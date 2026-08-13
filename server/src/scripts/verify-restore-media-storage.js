import "dotenv/config";
import { verifyRestoreMediaStorage } from "../lib/restoreMediaStorage.js";

const status = await verifyRestoreMediaStorage();
console.log(JSON.stringify(status, null, 2));

process.exitCode = status.uploadVerified ? 0 : 1;
