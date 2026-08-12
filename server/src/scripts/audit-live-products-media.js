import fs from "node:fs/promises";
import path from "node:path";

const csvPath = path.resolve(process.cwd(), "live products", "fuelpack-live-products.csv");
const rows = parseCsv(await fs.readFile(csvPath, "utf8"));
const missingImages = [];
const missingGallery = [];
const invalidImages = [];
const invalidVideos = [];
let productsWithVideos = 0;

for (const [index, row] of rows.entries()) {
  const label = row.slug || row.title || `row-${index + 1}`;
  const gallery = parseJson(row.gallery, []);
  const images = Array.from(new Set([row.image, ...gallery].map(normalizeUrl).filter(Boolean)));

  if (!normalizeUrl(row.image)) missingImages.push(label);
  if (!gallery.length) missingGallery.push(label);
  for (const image of images) {
    if (!isRemoteHttpUrl(image)) invalidImages.push(`${label}: ${image}`);
  }

  const video = normalizeUrl(row.video);
  if (video) {
    productsWithVideos += 1;
    if (!isRemoteHttpUrl(video)) invalidVideos.push(`${label}: ${video}`);
  }
}

const result = {
  source: csvPath,
  totalProducts: rows.length,
  productsWithPrimaryImage: rows.length - missingImages.length,
  productsWithGallery: rows.length - missingGallery.length,
  productsWithVideos,
  productsMissingVideos: rows.length - productsWithVideos,
  missingImages,
  missingGallery,
  invalidImages,
  invalidVideos,
  passed: !missingImages.length && !missingGallery.length && !invalidImages.length && !invalidVideos.length
};

console.log(JSON.stringify(result, null, 2));
if (!result.passed) process.exitCode = 1;

function normalizeUrl(value) {
  const url = String(value || "").trim();
  if (!url) return "";
  if (url.startsWith("//")) return `https:${url}`;
  return url.replace(/\s/g, "%20");
}

function isRemoteHttpUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function parseJson(value, fallback = []) {
  if (!value) return fallback;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

function parseCsv(content) {
  const rows = [];
  let field = "";
  let row = [];
  let quoted = false;

  for (let index = 0; index < content.length; index += 1) {
    const char = content[index];
    const next = content[index + 1];

    if (quoted) {
      if (char === '"' && next === '"') {
        field += '"';
        index += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') {
      quoted = true;
    } else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n") {
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
