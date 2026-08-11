import "dotenv/config";
import { cleanupRestoredProducts } from "../controllers/storefront.controller.js";
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
  await cleanupRestoredProducts(
    { query: {}, body: {}, get: () => "" },
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
