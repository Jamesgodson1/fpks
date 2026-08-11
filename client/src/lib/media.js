const SHOPIFY_IMAGE_HOSTS = new Set(["cdn.shopify.com", "cdn.shopifycdn.net"]);
const CLOUDINARY_IMAGE_HOST = "res.cloudinary.com";
const IMAGE_EXTENSIONS = /\.(avif|gif|jpe?g|png|webp)(\?|$)/i;

export const imageSizes = {
  card: "(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 25vw",
  detail: "(max-width: 900px) 100vw, 58vw",
  thumb: "96px"
};

export function normalizeMediaUrl(value) {
  const url = String(value || "").trim();
  if (!url) return "";
  if (url.startsWith("//")) return `https:${url}`;
  return url.replace(/\s/g, "%20");
}

export function productImageUrl(value, width) {
  const url = normalizeMediaUrl(value);
  if (!url || !width || !IMAGE_EXTENSIONS.test(url)) return url;

  try {
    const baseUrl = typeof window === "undefined" ? "https://fuelpacks.local" : window.location.origin;
    const parsed = new URL(url, baseUrl);
    if (SHOPIFY_IMAGE_HOSTS.has(parsed.hostname)) {
      parsed.searchParams.set("width", String(width));
      return parsed.toString();
    }
    if (isCloudinaryImage(url)) {
      return cloudinaryImageUrl(url, { width });
    }
  } catch {
    return url;
  }

  return url;
}

export function productImageSrcSet(value) {
  const url = normalizeMediaUrl(value);
  if (!url || url.startsWith("/") || !IMAGE_EXTENSIONS.test(url)) return undefined;
  if (!isShopifyImage(url) && !isCloudinaryImage(url)) return undefined;
  const widths = [240, 480, 720, 960, 1200];
  return widths.map((width) => `${productImageUrl(url, width)} ${width}w`).join(", ");
}

export function productImageFormatSrcSet(value, format) {
  const url = normalizeMediaUrl(value);
  if (!url || !isCloudinaryImage(url)) return undefined;
  const widths = [240, 480, 720, 960, 1200];
  return widths.map((width) => `${cloudinaryImageUrl(url, { width, format })} ${width}w`).join(", ");
}

export function productMediaSources(product) {
  const gallery = Array.isArray(product?.gallery) ? product.gallery : [];
  return Array.from(new Set([product?.image, ...gallery].map(normalizeMediaUrl).filter(Boolean)));
}

function isShopifyImage(value) {
  try {
    const baseUrl = typeof window === "undefined" ? "https://fuelpacks.local" : window.location.origin;
    const parsed = new URL(value, baseUrl);
    return SHOPIFY_IMAGE_HOSTS.has(parsed.hostname);
  } catch {
    return false;
  }
}

function isCloudinaryImage(value) {
  try {
    const parsed = new URL(value);
    return parsed.hostname === CLOUDINARY_IMAGE_HOST && parsed.pathname.includes("/image/upload/");
  } catch {
    return false;
  }
}

function cloudinaryImageUrl(value, { width, format }) {
  const transforms = [`c_limit`, `w_${width}`, "q_auto"];
  if (format) transforms.push(`f_${format}`);
  const token = `/image/upload/`;
  const index = value.indexOf(token);
  if (index === -1) return value;
  return `${value.slice(0, index + token.length)}${transforms.join(",")}/${value.slice(index + token.length)}`;
}
