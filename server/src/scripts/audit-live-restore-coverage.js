import "dotenv/config";
import fs from "node:fs/promises";
import path from "node:path";
import { dbQuery, ensureAppSchema, mysqlPool } from "../config/mysql.js";

const csvPath = path.resolve(process.cwd(), "live products", "fuelpack-live-products.csv");
const rows = parseCsv(await fs.readFile(csvPath, "utf8"));

await ensureAppSchema();

const products = await dbQuery("SELECT slug, status FROM `StoreProduct`");
const productBySlug = new Map(products.map((product) => [product.slug, product]));
const missing = [];
const inactive = [];
const active = [];

for (const row of rows) {
  const slug = row.slug || slugify(row.title);
  const product = productBySlug.get(slug);
  if (!product) {
    missing.push(slug);
  } else if (product.status !== "active") {
    inactive.push(slug);
  } else {
    active.push(slug);
  }
}

console.log(
  JSON.stringify(
    {
      source: csvPath,
      sourceTotal: rows.length,
      dbTotal: products.length,
      activeCurrentProducts: active.length,
      inactiveCurrentProducts: inactive.length,
      missingCurrentProducts: missing.length,
      inactive,
      missing
    },
    null,
    2
  )
);

await mysqlPool.end();

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

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
