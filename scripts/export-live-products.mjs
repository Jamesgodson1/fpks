import fs from "node:fs";
import path from "node:path";

const sourcePath = path.join("live products", "fuelpack-live-home.html");
const outputPath = path.join("live products", "fuelpack-live-products.csv");
const html = fs.readFileSync(sourcePath, "utf8");
const chunks = [];
const chunkPattern = /streamController\.enqueue\(("(?:\\.|[^"\\])*")\)/g;
let chunkMatch;

while ((chunkMatch = chunkPattern.exec(html))) {
  chunks.push(JSON.parse(chunkMatch[1]));
}

if (!chunks.length) {
  throw new Error("No React Router stream chunks found in live HTML.");
}

const encodedText = chunks.join("").split(/\n(?=[A-Z]\d+:)/)[0];
const encoded = JSON.parse(encodedText);
const decoded = decode(encoded);
const products = findProducts(decoded);

if (!products.length) {
  throw new Error("No products found in decoded live payload.");
}

const rows = products.map(normalizeProduct);
const headers = [
  "title",
  "slug",
  "category",
  "categorySlug",
  "price",
  "tag",
  "inventory",
  "status",
  "image",
  "video",
  "gallery",
  "variants",
  "hues",
  "description",
  "seoTitle",
  "seoDescription",
  "seoKeywords",
  "canonicalUrl",
  "imageAlt",
  "brand",
  "sku",
  "reviewRating",
  "reviewCount",
  "seoFocusKeyphrase",
  "sortOrder",
  "sourceProductId",
  "sourceHandle",
  "sourcePublishedAt"
];

fs.writeFileSync(outputPath, toCsv(headers, rows), "utf8");
console.log(`Exported ${rows.length} products to ${outputPath}`);

function decode(values) {
  const cache = new Map();

  function resolve(value) {
    if (typeof value === "number") {
      if (value === -5 || value === -7) return null;
      if (value < 0) return undefined;
      return resolveIndex(value);
    }
    return value;
  }

  function resolveIndex(index) {
    if (cache.has(index)) return cache.get(index);
    const value = values[index];

    if (Array.isArray(value)) {
      const output = [];
      cache.set(index, output);
      output.push(...value.map(resolve));
      return output;
    }

    if (value && typeof value === "object") {
      const output = {};
      cache.set(index, output);
      for (const [keyRef, valueRef] of Object.entries(value)) {
        output[resolve(Number(keyRef.slice(1)))] = resolve(valueRef);
      }
      return output;
    }

    cache.set(index, value);
    return value;
  }

  return resolveIndex(0);
}

function findProducts(root) {
  const seen = new Set();
  const products = [];

  function visit(value) {
    if (!value || typeof value !== "object" || seen.has(value)) return;
    seen.add(value);

    if (
      typeof value.id === "string" &&
      value.id.startsWith("gid://shopify/Product/") &&
      value.handle &&
      value.title
    ) {
      products.push(value);
    }

    for (const child of Object.values(value)) {
      visit(child);
    }
  }

  visit(root);
  return uniqueBy(products, (product) => product.id);
}

function normalizeProduct(product, index) {
  const media = Array.isArray(product.media) ? product.media : [];
  const images = media.filter((item) => item?.type === "image").map((item) => item.url).filter(Boolean);
  const videos = media.filter((item) => item?.type === "video");
  const video = videos[0]?.sources?.find((source) => source?.mimeType === "video/mp4")?.url || "";
  const variants = Array.isArray(product.variants) ? product.variants : [];
  const category = product.productType || "Products";
  const slug = product.handle || slugify(product.title);
  const sourceDescription = product.description || stripHtml(product.descriptionHtml || "");
  const title = product.title || "FUELPACKS Product";
  const variantSummary = variants.length
    ? variants.map((variant) => `${variant.title || variant.name || "Default"} at $${Number(variant.price || 0).toFixed(2)}`).join(", ")
    : `standard option at $${Number(product.price || 0).toFixed(2)}`;
  const description = ensureWordCount(
    [
      sourceDescription,
      `${title} is available in the ${category} catalog from FUELPACKS with live product images, video media when available, variant pricing, and a simple Telegram checkout handoff.`,
      `This restored listing includes clean product details for shoppers comparing menu items, reviewing availability, choosing options, and sending prepared order details directly to the sales rep.`,
      `Current variants include ${variantSummary}. The page includes optimized metadata, descriptive image alt text, a clean slug, pricing information, and product copy built for search visibility.`
    ].filter(Boolean).join(" "),
    85
  );

  return {
    title,
    slug,
    category,
    categorySlug: slugify(category),
    price: variants[0]?.price ?? product.price ?? "",
    tag: product.productType || "NEW",
    inventory: 0,
    status: "active",
    image: product.image || images[0] || "",
    video,
    gallery: JSON.stringify(uniqueBy([product.image, ...images].filter(Boolean), (item) => item)),
    variants: JSON.stringify(
      variants.map((variant) => ({
        name: variant.title || variant.name || "Default",
        price: Number(variant.price || 0),
        inventory: variant.available ? 999 : 0
      }))
    ),
    hues: JSON.stringify(Array.isArray(product.palette) ? product.palette : []),
    description,
    seoTitle: seoTitle(`${title} | FUELPACKS ${category}`),
    seoDescription: seoDescription(`${title} from FUELPACKS ${category}. View images, video, variants, price, availability, and send your prepared order through Telegram checkout.`),
    seoKeywords: joinList([category, title, "FUELPACKS", "Telegram ordering", ...(product.tags || [])]),
    canonicalUrl: `/products/${slug}`,
    imageAlt: `${title} product image from FUELPACKS`,
    brand: "FUELPACKS",
    sku: product.handle || product.id || "",
    reviewRating: "",
    reviewCount: "",
    seoFocusKeyphrase: title,
    sortOrder: index,
    sourceProductId: product.id || "",
    sourceHandle: product.handle || "",
    sourcePublishedAt: product.publishedAt || ""
  };
}

function uniqueBy(items, keyFn) {
  const seen = new Set();
  return items.filter((item) => {
    const key = keyFn(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function joinList(value) {
  return Array.isArray(value) ? value.filter(Boolean).join("; ") : "";
}

function seoTitle(value) {
  const base = String(value || "FUELPACKS Product").replace(/\s+/g, " ").trim();
  if (base.length >= 35 && base.length <= 65) return base;
  if (base.length > 65) return base.slice(0, 65).replace(/\s+\S*$/, "").trim();
  return `${base} | Premium Live Menu`.slice(0, 65);
}

function seoDescription(value) {
  const base = stripHtml(value).replace(/\s+/g, " ").trim();
  const expanded = base.length >= 120
    ? base
    : `${base} Browse live FUELPACKS product details, media, prices, variants, availability, and send a prepared Telegram order request.`;
  if (expanded.length <= 160) return expanded;
  return `${expanded.slice(0, 154).replace(/\s+\S*$/, "").trim()}...`;
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function stripHtml(value) {
  return String(value || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function ensureWordCount(value, minimum) {
  const words = stripHtml(value).split(/\s+/).filter(Boolean);
  const filler = "FUELPACKS keeps this live product listing clear with current catalog information, product media, variant pricing, simple cart review, Telegram ordering, and sales rep confirmation for every requested item.".split(/\s+/);
  let index = 0;
  while (words.length < minimum) {
    words.push(filler[index % filler.length]);
    index += 1;
  }
  return words.join(" ");
}

function toCsv(headers, rows) {
  return [
    headers.join(","),
    ...rows.map((row) => headers.map((header) => csvCell(row[header])).join(","))
  ].join("\n");
}

function csvCell(value) {
  const text = value === null || value === undefined ? "" : String(value);
  return `"${text.replace(/"/g, '""')}"`;
}
