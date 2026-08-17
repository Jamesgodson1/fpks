import "dotenv/config";
import { dbQuery, ensureAppSchema, mysqlPool } from "../config/mysql.js";

const FALLBACK_IMAGE = "/fuelpack-assets/logo.jpeg";
const checkRemote = process.argv.includes("--check-remote");

await ensureAppSchema();

const includeAll = process.argv.includes("--all");
const products = await dbQuery(
  `SELECT id, title, slug, status, image, gallery, video FROM \`StoreProduct\`${includeAll ? "" : " WHERE status = ?"} ORDER BY sortOrder ASC, id ASC`,
  includeAll ? [] : ["active"]
);
const byImage = new Map();
const fallbackProducts = [];
const imageGalleryMismatches = [];
const missingImages = [];
const nonCloudinaryRemoteImages = [];
const nonCloudinaryGalleryImages = [];
const nonCloudinaryVideos = [];
const missingGallery = [];
const remoteChecks = [];
const unreachableMedia = [];

for (const product of products) {
  const gallery = normalizeJson(product.gallery, []);
  const image = normalizeUrl(product.image);
  const normalizedGallery = gallery.map(normalizeUrl).filter(Boolean);

  if (!image) {
    missingImages.push(product.slug || product.title || String(product.id));
  }

  if (image === FALLBACK_IMAGE) {
    fallbackProducts.push(product.slug || product.title || String(product.id));
  }

  if (image && normalizedGallery.length && normalizedGallery[0] !== image) {
    imageGalleryMismatches.push({
      slug: product.slug || product.title || String(product.id),
      image,
      firstGalleryImage: normalizedGallery[0]
    });
  }

  if (!normalizedGallery.length) {
    missingGallery.push(product.slug || product.title || String(product.id));
  }

  if (isRemoteHttpUrl(image) && !isCloudinaryUrl(image)) {
    nonCloudinaryRemoteImages.push(product.slug || product.title || String(product.id));
  }

  for (const galleryImage of normalizedGallery) {
    if (isRemoteHttpUrl(galleryImage) && !isCloudinaryUrl(galleryImage)) {
      nonCloudinaryGalleryImages.push(`${product.slug || product.title || String(product.id)}: ${galleryImage}`);
    }
  }

  const video = normalizeUrl(product.video);
  if (video && isRemoteHttpUrl(video) && !isCloudinaryUrl(video)) {
    nonCloudinaryVideos.push(product.slug || product.title || String(product.id));
  }

  if (image) {
    if (checkRemote) remoteChecks.push({ slug: product.slug || product.title || String(product.id), type: "image", url: image });
    const current = byImage.get(image) || [];
    current.push(product.slug || product.title || String(product.id));
    byImage.set(image, current);
  }

  if (checkRemote) {
    for (const galleryImage of normalizedGallery) {
      remoteChecks.push({ slug: product.slug || product.title || String(product.id), type: "gallery", url: galleryImage });
    }
    if (video) {
      remoteChecks.push({ slug: product.slug || product.title || String(product.id), type: "video", url: video });
    }
  }
}

if (checkRemote) {
  const uniqueChecks = Array.from(new Map(remoteChecks.map((item) => [`${item.type}:${item.url}`, item])).values());
  for (const item of uniqueChecks) {
    if (!await remoteExists(item.url)) {
      unreachableMedia.push(`${item.slug} ${item.type}: ${item.url}`);
    }
  }
}

const sharedImages = Array.from(byImage.entries())
  .filter(([, slugs]) => slugs.length > 1)
  .sort((a, b) => b[1].length - a[1].length)
  .map(([image, slugs]) => ({
    image,
    count: slugs.length,
    products: slugs
  }));

console.log(
  JSON.stringify(
    {
      totalProducts: products.length,
      scope: includeAll ? "all" : "active",
      missingImages: missingImages.length,
      missingGallery: missingGallery.length,
      fallbackProducts: fallbackProducts.length,
      nonCloudinaryRemoteImages: nonCloudinaryRemoteImages.length,
      nonCloudinaryGalleryImages: nonCloudinaryGalleryImages.length,
      nonCloudinaryVideos: nonCloudinaryVideos.length,
      imageGalleryMismatches: imageGalleryMismatches.length,
      remoteChecked: checkRemote,
      remoteChecks: checkRemote ? remoteChecks.length : 0,
      unreachableMedia: unreachableMedia.length,
      sharedImageGroups: sharedImages.length,
      fallbackProductSlugs: fallbackProducts,
      missingGallerySlugs: missingGallery,
      nonCloudinaryRemoteImageSlugs: nonCloudinaryRemoteImages,
      nonCloudinaryGalleryImageSamples: nonCloudinaryGalleryImages.slice(0, 50),
      nonCloudinaryVideoSlugs: nonCloudinaryVideos,
      unreachableMediaSamples: unreachableMedia.slice(0, 50),
      topSharedImages: sharedImages.slice(0, 10),
      sampleImageGalleryMismatches: imageGalleryMismatches.slice(0, 25)
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

function isRemoteHttpUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function isCloudinaryUrl(value) {
  try {
    return new URL(value).hostname.endsWith("cloudinary.com");
  } catch {
    return false;
  }
}

async function remoteExists(url) {
  if (!isRemoteHttpUrl(url)) return true;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);
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
