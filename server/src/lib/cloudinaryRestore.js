import { cloudinary } from "../config/cloudinary.js";

const TEST_IMAGE =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiLz48L3N2Zz4=";

export function cloudinaryConfigStatus() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME || "";
  const validCloudName = /^[a-z0-9][a-z0-9_-]*$/.test(cloudName) && cloudName.length >= 5;
  return {
    configured: Boolean(validCloudName && process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET),
    cloudNamePresent: Boolean(cloudName),
    cloudNameLength: cloudName.length,
    cloudNameFormatValid: validCloudName,
    apiKeyPresent: Boolean(process.env.CLOUDINARY_API_KEY),
    apiSecretPresent: Boolean(process.env.CLOUDINARY_API_SECRET)
  };
}

export async function verifyCloudinaryRestoreAccess() {
  const status = cloudinaryConfigStatus();
  if (!status.configured) {
    return {
      ...status,
      cloudinaryReachable: false,
      uploadVerified: false,
      message: "Cloudinary env values are missing or invalid."
    };
  }

  const publicId = `${process.env.CLOUDINARY_RESTORE_FOLDER || "fuelspack/restored-products"}/restore-access-check`;

  try {
    const result = await cloudinary.uploader.upload(TEST_IMAGE, {
      public_id: publicId,
      overwrite: true,
      resource_type: "image"
    });
    await cloudinary.uploader.destroy(result.public_id, { resource_type: "image" });
    return {
      ...status,
      cloudinaryReachable: true,
      uploadVerified: true
    };
  } catch (error) {
    return {
      ...status,
      cloudinaryReachable: false,
      uploadVerified: false,
      message: error.message || error.error?.message || "Cloudinary upload check failed.",
      name: error.name,
      httpCode: error.http_code
    };
  }
}

export async function assertCloudinaryRestoreAccess() {
  const status = await verifyCloudinaryRestoreAccess();
  if (status.uploadVerified) return status;

  const error = new Error(
    "Cloudinary restore upload check failed. Confirm CLOUDINARY_CLOUD_NAME exactly matches the Cloudinary cloud name for the API key/secret."
  );
  error.status = 500;
  error.details = status;
  throw error;
}
