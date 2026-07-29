import "dotenv/config";
import {
  buildDatabaseUrl,
  ensureDatabaseUrl
} from "../server/src/config/databaseUrl.js";

export function setupPrismaEnv({ allowPlaceholder = false } = {}) {
  const databaseUrl = buildDatabaseUrl();

  if (databaseUrl) {
    process.env.DATABASE_URL = databaseUrl;
    return databaseUrl;
  }

  if (allowPlaceholder) {
    process.env.DATABASE_URL = "mysql://root:password@localhost:3306/fuelspack";
    return process.env.DATABASE_URL;
  }

  return ensureDatabaseUrl();
}
