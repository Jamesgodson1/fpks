import "dotenv/config";
import { cloudinary } from "../config/cloudinary.js";

const status = cloudinaryConfigStatus();

if (!status.configured) {
  console.log(JSON.stringify(status, null, 2));
  process.exitCode = 1;
} else {
  try {
    const result = await cloudinary.api.ping();
    console.log(JSON.stringify({ ...status, cloudinaryReachable: result.status === "ok" }, null, 2));
  } catch (error) {
    console.log(
      JSON.stringify(
        {
          ...status,
          cloudinaryReachable: false,
          message: error.message
        },
        null,
        2
      )
    );
    process.exitCode = 1;
  }
}

function cloudinaryConfigStatus() {
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
