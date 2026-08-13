import "dotenv/config";
import { dbExecute, dbQuery, ensureAppSchema, mysqlPool } from "../config/mysql.js";

const FALLBACK_IMAGE = "/fuelpack-assets/logo.jpeg";
const allowFallback = process.argv.includes("--fallback");

await ensureAppSchema();

const products = await dbQuery("SELECT id, title, slug, image, gallery, video FROM `StoreProduct` ORDER BY id ASC");
let repairedImages = 0;
let repairedGallery = 0;
const broken = [];

for (const product of products) {
  const gallery = normalizeJson(product.gallery, []);
  const imageCandidates = Array.from(new Set([product.image, ...gallery].map(normalizeUrl).filter(Boolean)));
  const reachableImages = [];

  for (const image of imageCandidates) {
    if (image.startsWith("/") || await remoteExists(image)) {
      reachableImages.push(image);
    }
  }

  const nextImage = reachableImages[0] || (allowFallback ? FALLBACK_IMAGE : product.image);
  const nextGallery = reachableImages.length ? reachableImages : (allowFallback ? [FALLBACK_IMAGE] : gallery);

  if (nextImage !== product.image || JSON.stringify(nextGallery) !== JSON.stringify(gallery)) {
    await dbExecute("UPDATE `StoreProduct` SET image = ?, gallery = ? WHERE id = ?", [
      nextImage,
      JSON.stringify(nextGallery),
      product.id
    ]);
    if (nextImage === FALLBACK_IMAGE) broken.push(product.slug || product.title || String(product.id));
    repairedImages += nextImage !== product.image ? 1 : 0;
    repairedGallery += JSON.stringify(nextGallery) !== JSON.stringify(gallery) ? 1 : 0;
  }
}

console.log(
  JSON.stringify(
    {
      totalProducts: products.length,
      repairedImages,
      repairedGallery,
      fallbackWritesEnabled: allowFallback,
      productsUsingFallbackImage: broken.length,
      fallbackProducts: broken
    },
    null,
    2
  )
);

await mysqlPool.end();

function normalizeUrl(value) {
  const url = String(value || "").trim();
  if (!url) return "";
  if (url.startsWith("//")) return `https:${url}`;
  return url.replace(/\s/g, "%20");
}

function normalizeJson(value, fallback) {
  if (Array.isArray(value)) return value;
  if (!value) return fallback;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

async function remoteExists(url) {
  if (!isRemoteHttpUrl(url)) return false;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch(url, { method: "HEAD", signal: controller.signal });
    if (response.ok) return true;
    if (response.status === 403 || response.status === 405) {
      const getResponse = await fetch(url, {
        method: "GET",
        headers: { Range: "bytes=0-0" },
        signal: controller.signal
      });
      return getResponse.ok || getResponse.status === 206;
    }
    return false;
  } catch {
    return false;
  } finally {
    clearTimeout(timeout);
  }
}

function isRemoteHttpUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}
