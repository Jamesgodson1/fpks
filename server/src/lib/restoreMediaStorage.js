import crypto from "node:crypto";
import { Readable } from "node:stream";
import { cloudinary } from "../config/cloudinary.js";
import { assertCloudinaryRestoreAccess, verifyCloudinaryRestoreAccess } from "./cloudinaryRestore.js";

export function restoreMediaBackend() {
  return (process.env.RESTORE_MEDIA_STORAGE || "cloudinary").toLowerCase();
}

export async function verifyRestoreMediaStorage() {
  const cloudinaryStatus = await verifyCloudinaryRestoreAccess();
  return {
    backend: "cloudinary",
    cloudinary: cloudinaryStatus,
    uploadVerified: cloudinaryStatus.uploadVerified
  };
}

export async function assertRestoreMediaStorageAccess() {
  return assertCloudinaryRestoreAccess();
}

export async function uploadRemoteRestoreAsset(sourceUrl, options) {
  return uploadRemoteAssetToCloudinary(sourceUrl, {
    ...options,
    stats: options.stats || {}
  });
}

export function cloudinaryRestoreUrl(sourceUrl, { slug, index, resourceType }) {
  const folder = process.env.CLOUDINARY_RESTORE_FOLDER || "fuelspack/restored-products";
  const publicId = `${folder}/${slug}-${resourceType}-${index}-${shortHash(sourceUrl)}`;
  return cloudinary.url(publicId, {
    secure: true,
    resource_type: resourceType,
    type: "upload"
  });
}

export async function findCloudinaryRestoreAssetUrl(sourceUrl, { slug, index, resourceType }) {
  const folder = process.env.CLOUDINARY_RESTORE_FOLDER || "fuelspack/restored-products";
  const publicId = `${folder}/${slug}-${resourceType}-${index}-${shortHash(sourceUrl)}`;
  const asset = await cloudinary.api.resource(publicId, {
    resource_type: resourceType
  });
  return asset.secure_url || "";
}

export function isManagedRestoreMediaUrl(value) {
  return isCloudinaryUrl(value);
}

async function uploadRemoteAssetToCloudinary(sourceUrl, { slug, index, resourceType, stats }) {
  const folder = process.env.CLOUDINARY_RESTORE_FOLDER || "fuelspack/restored-products";
  const publicId = `${folder}/${slug}-${resourceType}-${index}-${shortHash(sourceUrl)}`;
  const existingUrl = await findExistingCloudinaryAssetUrl(publicId, resourceType);
  if (existingUrl) {
    if (resourceType === "image") stats.existingManagedImages += 1;
    if (resourceType === "video") stats.existingManagedVideos += 1;
    return existingUrl;
  }

  try {
    const result = resourceType === "video"
      ? await uploadRemoteUrlToCloudinary(sourceUrl, {
          public_id: publicId,
          overwrite: false,
          resource_type: resourceType,
          timeout: cloudinaryUploadTimeout()
        })
      : await uploadImageBufferToCloudinary(sourceUrl, {
          public_id: publicId,
          overwrite: false,
          resource_type: resourceType,
          timeout: cloudinaryUploadTimeout(),
          eager: [
            { width: 480, crop: "limit", fetch_format: "webp", quality: "auto" },
            { width: 480, crop: "limit", fetch_format: "avif", quality: "auto" }
          ]
        });

    if (resourceType === "image") stats.imageUploads += 1;
    if (resourceType === "video") stats.videoUploads += 1;
    return result.secure_url || sourceUrl;
  } catch (error) {
    if (error?.http_code === 409) {
      if (resourceType === "image") stats.existingManagedImages += 1;
      if (resourceType === "video") stats.existingManagedVideos += 1;
      return findExistingCloudinaryAssetUrl(publicId, resourceType);
    }
    throw new Error(error?.message || error?.error?.message || `Cloudinary ${resourceType} upload failed without details.`);
  }
}

async function uploadImageBufferToCloudinary(sourceUrl, options) {
  const asset = await fetchRemoteAsset(sourceUrl);
  return uploadBufferToCloudinary(asset.body, {
    ...options,
    content_type: asset.contentType
  });
}

function uploadRemoteUrlToCloudinary(sourceUrl, options) {
  return cloudinary.uploader.upload(sourceUrl, options);
}

async function fetchRemoteAsset(sourceUrl) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), Number(process.env.RESTORE_SOURCE_FETCH_TIMEOUT_MS || 45000));
  const response = await fetch(sourceUrl, {
    signal: controller.signal,
    headers: {
      accept: "image/*,*/*",
      "user-agent": "Mozilla/5.0 FuelspackRestore/1.0"
    }
  }).finally(() => {
    clearTimeout(timeout);
  });

  if (!response.ok) {
    throw new Error(`Source media fetch failed with ${response.status} for ${sourceUrl}`);
  }

  return {
    body: Buffer.from(await response.arrayBuffer()),
    contentType: response.headers.get("content-type") || "image/jpeg"
  };
}

function uploadBufferToCloudinary(buffer, options) {
  return new Promise((resolve, reject) => {
    const upload = cloudinary.uploader.upload_stream(options, (error, result) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
    });
    Readable.from(buffer).pipe(upload);
  });
}

function cloudinaryUploadTimeout() {
  return Number(process.env.CLOUDINARY_UPLOAD_TIMEOUT_MS || 180000);
}

async function findExistingCloudinaryAssetUrl(publicId, resourceType) {
  try {
    const asset = await cloudinary.api.resource(publicId, {
      resource_type: resourceType
    });
    return asset.secure_url || "";
  } catch (error) {
    if (error?.http_code === 404) return "";
    throw error;
  }
}

function isCloudinaryUrl(value) {
  try {
    return new URL(value).hostname.endsWith("cloudinary.com");
  } catch {
    return false;
  }
}

function shortHash(value) {
  return crypto.createHash("sha1").update(value).digest("hex").slice(0, 10);
}
