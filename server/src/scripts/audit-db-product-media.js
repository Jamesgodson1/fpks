import "dotenv/config";
import { dbQuery, ensureAppSchema, mysqlPool } from "../config/mysql.js";

const FALLBACK_IMAGE = "/fuelpack-assets/logo.jpeg";

await ensureAppSchema();

const products = await dbQuery("SELECT id, title, slug, image, gallery, video FROM `StoreProduct` ORDER BY sortOrder ASC, id ASC");
const byImage = new Map();
const fallbackProducts = [];
const imageGalleryMismatches = [];
const missingImages = [];
const nonCloudinaryRemoteImages = [];

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

  if (isRemoteHttpUrl(image) && !isCloudinaryUrl(image)) {
    nonCloudinaryRemoteImages.push(product.slug || product.title || String(product.id));
  }

  if (image) {
    const current = byImage.get(image) || [];
    current.push(product.slug || product.title || String(product.id));
    byImage.set(image, current);
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
      missingImages: missingImages.length,
      fallbackProducts: fallbackProducts.length,
      nonCloudinaryRemoteImages: nonCloudinaryRemoteImages.length,
      imageGalleryMismatches: imageGalleryMismatches.length,
      sharedImageGroups: sharedImages.length,
      fallbackProductSlugs: fallbackProducts,
      nonCloudinaryRemoteImageSlugs: nonCloudinaryRemoteImages,
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
