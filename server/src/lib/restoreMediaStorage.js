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

export function isManagedRestoreMediaUrl(value) {
  return isCloudinaryUrl(value);
}

async function uploadRemoteAssetToCloudinary(sourceUrl, { slug, index, resourceType, stats }) {
  const folder = process.env.CLOUDINARY_RESTORE_FOLDER || "fuelspack/restored-products";
  const publicId = `${folder}/${slug}-${resourceType}-${index}-${shortHash(sourceUrl)}`;

  try {
    const asset = await fetchRemoteAsset(sourceUrl, resourceType);
    const result = await uploadBufferToCloudinary(asset.body, {
      public_id: publicId,
      overwrite: false,
      resource_type: resourceType,
      content_type: asset.contentType,
      eager:
        resourceType === "image"
          ? [
              { width: 480, crop: "limit", fetch_format: "webp", quality: "auto" },
              { width: 480, crop: "limit", fetch_format: "avif", quality: "auto" }
            ]
          : undefined
    });

    if (resourceType === "image") stats.imageUploads += 1;
    if (resourceType === "video") stats.videoUploads += 1;
    return result.secure_url || sourceUrl;
  } catch (error) {
    if (error?.http_code === 409) {
      if (resourceType === "image") stats.existingManagedImages += 1;
      if (resourceType === "video") stats.existingManagedVideos += 1;
      return cloudinary.url(publicId, {
        secure: true,
        resource_type: resourceType,
        type: "upload"
      });
    }
    throw error;
  }
}

async function fetchRemoteAsset(sourceUrl, resourceType) {
  const response = await fetch(sourceUrl, {
    headers: {
      accept: resourceType === "video" ? "video/*,*/*" : "image/*,*/*",
      "user-agent": "Mozilla/5.0 FuelspackRestore/1.0"
    }
  });

  if (!response.ok) {
    throw new Error(`Source media fetch failed with ${response.status} for ${sourceUrl}`);
  }

  return {
    body: Buffer.from(await response.arrayBuffer()),
    contentType: response.headers.get("content-type") || (resourceType === "video" ? "video/mp4" : "image/jpeg")
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
