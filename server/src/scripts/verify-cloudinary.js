import "dotenv/config";
import { verifyCloudinaryRestoreAccess } from "../lib/cloudinaryRestore.js";

const status = await verifyCloudinaryRestoreAccess();
console.log(JSON.stringify(status, null, 2));
if (!status.uploadVerified) process.exitCode = 1;
