import { Router } from "express";
import { dbQuery, ensureAppSchema } from "../config/mysql.js";

export const seoRouter = Router();

function siteUrl(req) {
  return (process.env.SITE_URL || process.env.CLIENT_URL || `${req.protocol}://${req.get("host")}`).replace(/\/$/, "");
}

function xmlEscape(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

seoRouter.get("/robots.txt", (req, res) => {
  const baseUrl = siteUrl(req);
  res.type("text/plain").send(
    [
      "User-agent: *",
      "Allow: /",
      "Disallow: /admin",
      "Disallow: /api",
      "",
      `Sitemap: ${baseUrl}/sitemap.xml`,
      ""
    ].join("\n")
  );
});

seoRouter.get("/sitemap.xml", async (req, res) => {
  const baseUrl = siteUrl(req);
  const urls = [
    { loc: "/", priority: "1.0", changefreq: "daily" },
    { loc: "/menu", priority: "0.9", changefreq: "daily" },
    { loc: "/faq", priority: "0.6", changefreq: "monthly" }
  ];

  try {
    await ensureAppSchema();
    const [categories, products] = await Promise.all([
      dbQuery("SELECT slug, featured FROM `StoreCategory` ORDER BY sortOrder ASC"),
      dbQuery("SELECT slug, updatedAt FROM `StoreProduct` WHERE status = ? ORDER BY updatedAt DESC", ["active"])
    ]);

    for (const category of categories) {
      urls.push({
        loc: category.slug === "all" ? "/menu" : `/menu/${category.slug}`,
        priority: category.featured ? "0.9" : "0.75",
        changefreq: "daily"
      });
    }

    for (const product of products) {
      urls.push({
        loc: `/products/${product.slug}`,
        priority: "0.85",
        changefreq: "daily",
        lastmod: product.updatedAt ? new Date(product.updatedAt).toISOString() : undefined
      });
    }
  } catch (error) {
    console.error("Sitemap database fallback:", error.message);
  }

  const uniqueUrls = Array.from(new Map(urls.map((url) => [url.loc, url])).values());
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...uniqueUrls.map((url) =>
      [
        "  <url>",
        `    <loc>${xmlEscape(`${baseUrl}${url.loc}`)}</loc>`,
        url.lastmod ? `    <lastmod>${url.lastmod}</lastmod>` : "",
        `    <changefreq>${url.changefreq}</changefreq>`,
        `    <priority>${url.priority}</priority>`,
        "  </url>"
      ]
        .filter(Boolean)
        .join("\n")
    ),
    "</urlset>"
  ].join("\n");

  res.type("application/xml").send(body);
});
