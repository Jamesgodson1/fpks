import fs from "node:fs/promises";
import path from "node:path";

const csvPath = path.resolve(process.cwd(), "live products", "fuelpack-live-products.csv");
const rows = parseCsv(await fs.readFile(csvPath, "utf8"));
const missingImages = [];
const missingGallery = [];
const invalidImages = [];
const invalidVideos = [];
const unreachableImages = [];
const unreachableVideos = [];
let productsWithVideos = 0;
const checkReachability = process.argv.includes("--check-remote");
const remoteChecks = [];

for (const [index, row] of rows.entries()) {
  const label = row.slug || row.title || `row-${index + 1}`;
  const gallery = parseJson(row.gallery, []);
  const images = Array.from(new Set([row.image, ...gallery].map(normalizeUrl).filter(Boolean)));

  if (!normalizeUrl(row.image)) missingImages.push(label);
  if (!gallery.length) missingGallery.push(label);
  for (const image of images) {
    if (!isRemoteHttpUrl(image)) invalidImages.push(`${label}: ${image}`);
    else if (checkReachability) {
      remoteChecks.push({ type: "image", label, url: image });
    }
  }

  const video = normalizeUrl(row.video);
  if (video) {
    productsWithVideos += 1;
    if (!isRemoteHttpUrl(video)) invalidVideos.push(`${label}: ${video}`);
    else if (checkReachability) {
      remoteChecks.push({ type: "video", label, url: video });
    }
  }
}

if (checkReachability) {
  const results = await mapWithConcurrency(remoteChecks, 20, async (item) => ({
    ...item,
    reachable: await remoteExists(item.url)
  }));
  for (const item of results.filter((result) => !result.reachable)) {
    if (item.type === "image") unreachableImages.push(`${item.label}: ${item.url}`);
    if (item.type === "video") unreachableVideos.push(`${item.label}: ${item.url}`);
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
  unreachableImages,
  unreachableVideos,
  remoteChecked: checkReachability,
  passed:
    !missingImages.length &&
    !missingGallery.length &&
    !invalidImages.length &&
    !invalidVideos.length &&
    !unreachableImages.length &&
    !unreachableVideos.length
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

async function remoteExists(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);
  try {
    const response = await fetch(url, { method: "HEAD", signal: controller.signal });
    if (response.ok) return true;
    if (response.status === 405 || response.status === 403) {
      const getResponse = await fetch(url, {
        method: "GET",
        headers: { Range: "bytes=0-0" },
        signal: controller.signal
      });
      return getResponse.ok || getResponse.status === 206;
    }
    return false;
  } catch {
    return false;
  } finally {
    clearTimeout(timeout);
  }
}

async function mapWithConcurrency(items, limit, worker) {
  const results = new Array(items.length);
  let cursor = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (cursor < items.length) {
      const current = cursor;
      cursor += 1;
      results[current] = await worker(items[current], current);
    }
  });
  await Promise.all(workers);
  return results;
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
