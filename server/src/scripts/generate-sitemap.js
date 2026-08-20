import "dotenv/config";
import fs from "node:fs/promises";
import path from "node:path";

const sitemapPath = path.resolve(process.cwd(), "public", "sitemap.xml");
const csvPath = path.resolve(process.cwd(), "live products", "fuelpack-live-products.csv");
const baseUrl = await resolveBaseUrl();
const today = new Date().toISOString().slice(0, 10);
const rows = parseCsv(await fs.readFile(csvPath, "utf8"));
const categorySlugs = Array.from(new Set(rows.map((row) => row.categorySlug).filter(Boolean))).sort();
const productPaths = Array.from(
  new Set(rows.map((row) => row.canonicalUrl || `/products/${row.slug}`).filter(Boolean))
).sort();

const urls = [
  { path: "/", changefreq: "daily", priority: "1.0" },
  { path: "/menu", changefreq: "daily", priority: "0.9" },
  { path: "/deals", changefreq: "weekly", priority: "0.8" },
  { path: "/faq", changefreq: "monthly", priority: "0.6" },
  ...categorySlugs.map((slug) => ({
    path: `/menu/${slug}`,
    changefreq: "daily",
    priority: "0.8"
  })),
  ...productPaths.map((productPath) => ({
    path: productPath,
    changefreq: "daily",
    priority: "0.7"
  }))
];

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map(
    (item) => `  <url>
    <loc>${escapeXml(new URL(item.path, baseUrl).toString())}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  ),
  "</urlset>",
  ""
].join("\n");

await fs.writeFile(sitemapPath, xml, "utf8");

console.log(
  JSON.stringify(
    {
      sitemapPath,
      baseUrl,
      urls: urls.length,
      categories: categorySlugs.length,
      products: productPaths.length
    },
    null,
    2
  )
);

async function resolveBaseUrl() {
  if (process.env.SITEMAP_BASE_URL) return normalizeBaseUrl(process.env.SITEMAP_BASE_URL);
  if (process.env.SITE_URL) return normalizeBaseUrl(process.env.SITE_URL);

  try {
    const current = await fs.readFile(sitemapPath, "utf8");
    const match = current.match(/<loc>(https?:\/\/[^/<]+)\/?<\/loc>/i) || current.match(/<loc>(https?:\/\/[^/]+)/i);
    if (match?.[1]) return normalizeBaseUrl(match[1]);
  } catch {
    // Fall through to the public production domain.
  }

  return "https://fuelpack.store/";
}

function normalizeBaseUrl(value) {
  return `${String(value || "").trim().replace(/\/+$/, "")}/`;
}

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

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
