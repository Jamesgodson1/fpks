import "dotenv/config";
import { restoreLiveProducts } from "../controllers/storefront.controller.js";
import { mysqlPool } from "../config/mysql.js";

const response = {
  statusCode: 200,
  status(code) {
    this.statusCode = code;
    return this;
  },
  json(payload) {
    console.log(JSON.stringify({ statusCode: this.statusCode, ...payload }, null, 2));
  }
};

try {
  const query = restoreQueryFromArgs(process.argv.slice(2));
  await restoreLiveProducts(
    { query, body: {}, get: () => "" },
    response,
    (error) => {
      if (error) throw error;
    }
  );
} catch (error) {
  console.error(error);
  process.exitCode = 1;
} finally {
  await mysqlPool.end();
}

function restoreQueryFromArgs(args) {
  const query = {};

  for (const arg of args) {
    const [key, value] = arg.replace(/^--/, "").split("=");
    if (key === "limit") query.restoreLimit = value || "20";
    if (key === "offset") query.restoreOffset = value || "0";
  }

  return query;
}
