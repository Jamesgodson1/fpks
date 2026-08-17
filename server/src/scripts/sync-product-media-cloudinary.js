import "dotenv/config";
import fs from "node:fs/promises";
import path from "node:path";
import { dbExecute, ensureAppSchema, mysqlPool } from "../config/mysql.js";
import {
  assertRestoreMediaStorageAccess,
  findCloudinaryRestoreAssetUrl,
  isManagedRestoreMediaUrl,
  uploadRemoteRestoreAsset
} from "../lib/restoreMediaStorage.js";

const csvPath = path.resolve(process.cwd(), "live products", "fuelpack-live-products.csv");
const args = parseArgs(process.argv.slice(2));
const rows = parseCsv(await fs.readFile(csvPath, "utf8"));
const selectedRows = args.limit ? rows.slice(args.offset, args.offset + args.limit) : rows.slice(args.offset);
const stats = {
  imageUploads: 0,
  videoUploads: 0,
  existingManagedImages: 0,
  existingManagedVideos: 0,
  verifiedDeliveryUrls: 0
};
const repaired = [];
const failures = [];

await withNetworkRetry(() => assertRestoreMediaStorageAccess(), {
  label: "Cloudinary restore access check",
  attempts: Number(process.env.RESTORE_CLOUDINARY_VERIFY_ATTEMPTS || 5)
});
await ensureAppSchema();

for (const [index, row] of selectedRows.entries()) {
  const sourceIndex = args.offset + index;
  const slug = row.slug || slugify(row.title);

  try {
    console.error(`syncing ${sourceIndex + 1}/${rows.length}: ${slug}`);
    const media = await cloudinaryMediaForRow(row, slug, stats);
    if (args.verifyDelivery) {
      await verifyDelivery(media);
    }
    if (!args.dryRun) {
      await withDbRetry(() =>
        dbExecute("UPDATE `StoreProduct` SET image = ?, gallery = ?, video = ? WHERE slug = ?", [
          media.image,
          JSON.stringify(media.gallery),
          media.video,
          slug
        ])
      );
    }

    repaired.push({
      slug,
      sourceIndex,
      image: media.image,
      galleryItems: media.gallery.length,
      video: Boolean(media.video)
    });
  } catch (error) {
    failures.push({
      slug,
      sourceIndex,
      error: error.message
    });
  }
}

async function withDbRetry(operation, attempts = Number(process.env.RESTORE_DB_WRITE_ATTEMPTS || 5)) {
  let lastError;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      if (!isTransientDbError(error) || attempt === attempts) throw error;
      await wait(750 * attempt);
    }
  }

  throw lastError;
}

function isTransientDbError(error) {
  return [
    "ECONNRESET",
    "ETIMEDOUT",
    "EAI_AGAIN",
    "PROTOCOL_CONNECTION_LOST",
    "ER_TOO_MANY_USER_CONNECTIONS"
  ].includes(error?.code);
}

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function withNetworkRetry(operation, { label, attempts = 5 }) {
  let lastError;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      const retryable = isTransientNetworkError(error) || isTransientNetworkError(error?.details);
      if (!retryable || attempt === attempts) throw error;
      console.error(`${label} failed with ${errorCode(error)}; retrying ${attempt}/${attempts}`);
      await wait(1000 * attempt);
    }
  }

  throw lastError;
}

function isTransientNetworkError(error) {
  return ["EAI_AGAIN", "ECONNRESET", "ETIMEDOUT", "ENOTFOUND"].includes(error?.code) ||
    /EAI_AGAIN|ECONNRESET|ETIMEDOUT|ENOTFOUND/i.test(error?.message || "");
}

function errorCode(error) {
  return error?.code || error?.details?.code || error?.details?.message || error?.message || "unknown error";
}

console.log(
  JSON.stringify(
    {
      source: csvPath,
      dryRun: args.dryRun,
      sourceTotal: rows.length,
      offset: args.offset,
      limit: args.limit || null,
      processed: selectedRows.length,
      repaired: repaired.length,
      failed: failures.length,
      hasMore: args.offset + selectedRows.length < rows.length,
      nextOffset: args.offset + selectedRows.length < rows.length ? args.offset + selectedRows.length : null,
      media: stats,
      failures
    },
    null,
    2
  )
);

await mysqlPool.end();

if (failures.length) {
  process.exitCode = 1;
}

async function cloudinaryMediaForRow(row, slug, stats) {
  const gallery = parseJson(row.gallery, []);
  const imageSources = Array.from(new Set([row.image, ...gallery].map(normalizeUrl).filter(Boolean)));
  const imageUrls = [];

  for (const [index, sourceUrl] of imageSources.entries()) {
    imageUrls.push(await cloudinaryUrlFor(sourceUrl, { slug, index, resourceType: "image", stats }));
  }

  if (!imageUrls.length) {
    throw new Error("No image sources found in live CSV row.");
  }

  const videoSource = normalizeUrl(row.video);
  const videoUrl = videoSource
    ? await cloudinaryUrlFor(videoSource, { slug, index: 0, resourceType: "video", stats })
    : null;

  return {
    image: imageUrls[0],
    gallery: Array.from(new Set(imageUrls)),
    video: videoUrl
  };
}

async function cloudinaryUrlFor(sourceUrl, options) {
  if (isManagedRestoreMediaUrl(sourceUrl)) return sourceUrl;
  const existingUrl = await findExistingCloudinaryUrl(sourceUrl, options);
  if (existingUrl) {
    if (options.resourceType === "image") stats.existingManagedImages += 1;
    if (options.resourceType === "video") stats.existingManagedVideos += 1;
    return existingUrl;
  }
  return uploadRemoteRestoreAsset(sourceUrl, options);
}

async function findExistingCloudinaryUrl(sourceUrl, options) {
  try {
    return await findCloudinaryRestoreAssetUrl(sourceUrl, options);
  } catch (error) {
    if (error?.http_code === 404) return "";
    throw error;
  }
}

function parseArgs(args) {
  const parsed = {
    offset: 0,
    limit: 0,
    dryRun: false,
    verifyDelivery: false
  };

  for (const arg of args) {
    const [key, value] = arg.replace(/^--/, "").split("=");
    if (key === "offset") parsed.offset = Math.max(Number(value || 0), 0);
    if (key === "limit") parsed.limit = Math.max(Number(value || 0), 0);
    if (key === "dry-run") parsed.dryRun = true;
    if (key === "verify-delivery") parsed.verifyDelivery = true;
  }

  return parsed;
}

async function verifyDelivery(media) {
  const urls = [media.image, media.video].filter(Boolean);

  for (const url of urls) {
    if (!await remoteExists(url)) {
      throw new Error(`Cloudinary delivery URL failed: ${url}`);
    }
    stats.verifiedDeliveryUrls += 1;
  }
}

async function remoteExists(url) {
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

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"' && inQuotes && next === '"') {
      field += '"';
      index += 1;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      row.push(field);
      field = "";
    } else if (char === "\n" && !inQuotes) {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (char !== "\r") {
      field += char;
    }
  }

  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }

  const [headers, ...dataRows] = rows;
  return dataRows
    .filter((dataRow) => dataRow.some((value) => value !== ""))
    .map((dataRow) =>
      headers.reduce((item, header, index) => {
        item[header] = dataRow[index] || "";
        return item;
      }, {})
    );
}

function parseJson(value, fallback) {
  if (!value) return fallback;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

function normalizeUrl(value) {
  const url = String(value || "").trim();
  if (!url) return "";
  if (url.startsWith("//")) return `https:${url}`;
  return url.replace(/\s/g, "%20");
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
