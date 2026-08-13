import fs from "node:fs/promises";
import path from "node:path";
import { dbExecute, dbQuery, ensureAppSchema } from "../config/mysql.js";
import { cleanRestoredProductRow, mainCategoryPayloads } from "../lib/restoredCatalogCleanup.js";
import {
  assertRestoreMediaStorageAccess,
  isManagedRestoreMediaUrl,
  restoreMediaBackend,
  uploadRemoteRestoreAsset
} from "../lib/restoreMediaStorage.js";

const productJsonFields = new Set(["gallery", "variants", "hues"]);
const orderJsonFields = new Set(["items"]);

const settingFields = [
  "brandName",
  "logoUrl",
  "metaTitle",
  "metaDescription",
  "ogDescription",
  "seoKeywords",
  "searchConsoleId",
  "gaMeasurementId",
  "bingVerifyId",
  "marquee",
  "footerText",
  "contactEmail",
  "checkoutMode"
];

const contentFields = [
  "heroEyebrow",
  "heroLineOne",
  "heroLineTwo",
  "heroLineThree",
  "heroCopy",
  "primaryCta",
  "secondaryCta",
  "dropsEyebrow",
  "dropsTitle",
  "menuTitle",
  "menuCopy",
  "faqTitle"
];

const productFields = [
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
  "sortOrder"
];

export async function getStorefront(req, res, next) {
  try {
    await ensureAppSchema();
    const productPaging = storefrontProductPaging(req.query);
    const [settings, content, categories, products, faqs] = await Promise.all([
      first("SELECT * FROM `StoreSetting` WHERE id = 1 LIMIT 1"),
      first("SELECT * FROM `StoreContent` WHERE id = 1 LIMIT 1"),
      dbQuery("SELECT * FROM `StoreCategory` ORDER BY sortOrder ASC"),
      dbQuery(
        `SELECT * FROM \`StoreProduct\` WHERE status = ? ORDER BY sortOrder ASC${productPaging.sql}`,
        ["active", ...productPaging.params]
      ),
      dbQuery("SELECT * FROM `StoreFaq` ORDER BY sortOrder ASC")
    ]);
    const totalProducts = productPaging.limited
      ? Number((await first("SELECT COUNT(*) AS total FROM `StoreProduct` WHERE status = ?", ["active"]))?.total || 0)
      : products.length;

    res.json({
      settings,
      content,
      categories: categories.map(normalizeCategory),
      products: products.map(normalizeProduct),
      faqs,
      pagination: {
        products: {
          limit: productPaging.limit,
          offset: productPaging.offset,
          total: totalProducts,
          hasMore: productPaging.limited && productPaging.offset + products.length < totalProducts
        }
      }
    });
  } catch (error) {
    next(error);
  }
}

export async function getAdminStorefront(req, res, next) {
  try {
    await ensureAppSchema();
    const [settings, content, categories, products, faqs, orders] = await Promise.all([
      first("SELECT * FROM `StoreSetting` WHERE id = 1 LIMIT 1"),
      first("SELECT * FROM `StoreContent` WHERE id = 1 LIMIT 1"),
      dbQuery("SELECT * FROM `StoreCategory` ORDER BY sortOrder ASC"),
      dbQuery("SELECT * FROM `StoreProduct` ORDER BY sortOrder ASC"),
      dbQuery("SELECT * FROM `StoreFaq` ORDER BY sortOrder ASC"),
      dbQuery("SELECT * FROM `StoreOrder` ORDER BY createdAt DESC")
    ]);

    res.json({
      settings,
      content,
      categories: categories.map(normalizeCategory),
      products: products.map(normalizeProduct),
      faqs,
      orders: orders.map(normalizeOrder)
    });
  } catch (error) {
    next(error);
  }
}

export async function createOrder(req, res, next) {
  try {
    await ensureAppSchema();
    const payload = normalizeOrderPayload(req.body);
    const result = await insertRow("StoreOrder", serializeData(payload, orderJsonFields));
    const order = normalizeOrder(await findById("StoreOrder", result.insertId));
    const telegram =
      process.env.TELEGRAM_BOT_ENABLED === "true"
        ? await notifyTelegram(order)
        : { sent: false };

    res.status(201).json({
      success: true,
      order,
      telegramNotified: telegram.sent,
      telegramError: telegram.error
    });
  } catch (error) {
    next(error);
  }
}

export async function updateOrderStatus(req, res, next) {
  try {
    await ensureAppSchema();
    const id = Number(req.params.id);
    await updateRow("StoreOrder", { status: req.body.status || "new" }, id);
    res.json(normalizeOrder(await findById("StoreOrder", id)));
  } catch (error) {
    next(error);
  }
}

export async function trackAnalyticsEvent(req, res, next) {
  try {
    await ensureAppSchema();
    const type = String(req.body.type || "page_view").slice(0, 60);
    const path = String(req.body.path || req.get("referer") || "/").slice(0, 500);

    await insertRow("StoreAnalyticsEvent", {
      type,
      path,
      title: req.body.title ? String(req.body.title).slice(0, 255) : null,
      productSlug: req.body.productSlug ? String(req.body.productSlug).slice(0, 255) : null,
      productName: req.body.productName ? String(req.body.productName).slice(0, 255) : null,
      referrer: req.body.referrer ? String(req.body.referrer).slice(0, 1000) : req.get("referer") || null,
      userAgent: req.get("user-agent") || null
    });

    res.status(201).json({ success: true });
  } catch (error) {
    next(error);
  }
}

export async function getAdminAnalytics(req, res, next) {
  try {
    await ensureAppSchema();
    const days = Math.max(1, Math.min(365, Number(req.query.days || 30)));
    const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
    const events = await dbQuery(
      "SELECT * FROM `StoreAnalyticsEvent` WHERE createdAt >= ? ORDER BY createdAt DESC LIMIT 5000",
      [toMysqlDate(since)]
    );

    const pageViews = events.filter((event) => event.type === "page_view");
    const productViews = events.filter((event) => event.type === "product_view");
    const clicks = events.filter((event) => event.type.includes("click") || event.type === "add_to_cart");

    res.json({
      rangeDays: days,
      totals: {
        events: events.length,
        pageViews: pageViews.length,
        productViews: productViews.length,
        clicks: clicks.length
      },
      topPages: rankBy(events, "path", 10).map((item) => ({ path: item.key, views: item.count })),
      topProducts: rankProducts(events, 10),
      clickTypes: rankBy(clicks, "type", 10).map((item) => ({ type: item.key, count: item.count })),
      recentEvents: events.slice(0, 25)
    });
  } catch (error) {
    next(error);
  }
}

export async function updateSettings(req, res, next) {
  try {
    await ensureAppSchema();
    const data = pick(req.body, settingFields);
    await upsertSingleton("StoreSetting", data);
    res.json(await first("SELECT * FROM `StoreSetting` WHERE id = 1 LIMIT 1"));
  } catch (error) {
    next(error);
  }
}

export async function updateContent(req, res, next) {
  try {
    await ensureAppSchema();
    const data = pick(req.body, contentFields);
    await upsertSingleton("StoreContent", data);
    res.json(await first("SELECT * FROM `StoreContent` WHERE id = 1 LIMIT 1"));
  } catch (error) {
    next(error);
  }
}

export async function createProduct(req, res, next) {
  try {
    await ensureAppSchema();
    const payload = serializeData(normalizeProductPayload(req.body), productJsonFields);
    const result = await insertRow("StoreProduct", payload);
    res.status(201).json(normalizeProduct(await findById("StoreProduct", result.insertId)));
  } catch (error) {
    next(error);
  }
}

export async function updateProduct(req, res, next) {
  try {
    await ensureAppSchema();
    const id = Number(req.params.id);
    const payload = serializeData(normalizeProductPayload(req.body), productJsonFields);
    await updateRow("StoreProduct", payload, id);
    res.json(normalizeProduct(await findById("StoreProduct", id)));
  } catch (error) {
    next(error);
  }
}

export async function deleteProduct(req, res, next) {
  try {
    await ensureAppSchema();
    await dbExecute("DELETE FROM `StoreProduct` WHERE id = ?", [Number(req.params.id)]);
    res.json({ message: "Product deleted." });
  } catch (error) {
    next(error);
  }
}

export async function restoreLiveProducts(req, res, next) {
  try {
    const csvPath = path.resolve(process.cwd(), "live products", "fuelpack-live-products.csv");
    const rows = parseCsv(await fs.readFile(csvPath, "utf8"));
    const mediaValidation = validateRestoredProductMedia(rows);
    const restorePaging = restoredProductPaging(req.query || {});
    const restoreRows = restorePaging.limited ? rows.slice(restorePaging.offset, restorePaging.offset + restorePaging.limit) : rows;
    await assertRestoreMediaStorageAccess();
    await ensureAppSchema();
    let created = 0;
    let updated = 0;
    let deactivated = 0;
    const categoryCounts = new Map();
    const restoredSlugs = [];
    const mediaStats = {
      imageUploads: 0,
      videoUploads: 0,
      existingManagedImages: 0,
      existingManagedVideos: 0,
      preservedExistingImages: 0,
      preservedExistingVideos: 0,
      failedGalleryImages: 0
    };
    const existingProducts = new Map(
      (await dbQuery("SELECT slug, image, gallery, video FROM `StoreProduct`")).map((product) => [product.slug, product])
    );

    for (const [index, row] of restoreRows.entries()) {
      const sourceIndex = restorePaging.offset + index;
      const cleanRow = cleanRestoredProductRow(row, sourceIndex);
      const slug = cleanRow.slug || slugify(cleanRow.title);
      restoredSlugs.push(slug);
      categoryCounts.set(cleanRow.categorySlug, (categoryCounts.get(cleanRow.categorySlug) || 0) + 1);
      const media = await mirrorRestoredProductMedia({
        slug,
        image: cleanRow.image,
        video: cleanRow.video,
        gallery: parseJson(cleanRow.gallery, []),
        existingProduct: existingProducts.get(slug),
        stats: mediaStats
      });
      const payload = serializeData(
        optimizeProductForSeo(
          normalizeProductPayload({
            title: cleanRow.title,
            slug,
            category: cleanRow.category,
            categorySlug: cleanRow.categorySlug,
            price: cleanRow.price,
            tag: cleanRow.tag,
            inventory: cleanRow.inventory || 0,
            status: cleanRow.status || "active",
            image: media.image,
            video: media.video,
            gallery: media.gallery,
            variants: parseJson(cleanRow.variants, []),
            hues: parseJson(cleanRow.hues, []),
            description: cleanRow.description,
            seoTitle: cleanRow.seoTitle,
            seoDescription: cleanRow.seoDescription,
            seoKeywords: cleanRow.seoKeywords,
            canonicalUrl: cleanRow.canonicalUrl,
            imageAlt: cleanRow.imageAlt,
            brand: cleanRow.brand || "FUELPACKS",
            sku: cleanRow.sku || cleanRow.sourceHandle || cleanRow.slug,
            seoFocusKeyphrase: cleanRow.seoFocusKeyphrase || cleanRow.title,
            sortOrder: cleanRow.sortOrder
          })
        ),
        productJsonFields
      );
      const result = await withRestoreWriteRetry(() => upsertByUnique("StoreProduct", payload, "slug"));
      if (result.insertId) {
        created += 1;
      } else {
        updated += 1;
      }
    }

    if (!restorePaging.limited && restoredSlugs.length) {
      const placeholders = restoredSlugs.map(() => "?").join(", ");
      const result = await withRestoreWriteRetry(() =>
        dbExecute(
          `UPDATE \`StoreProduct\` SET status = ? WHERE slug NOT IN (${placeholders})`,
          ["inactive", ...restoredSlugs]
        )
      );
      deactivated = result.affectedRows || 0;
    }

    if (!restorePaging.limited) {
      for (const categoryPayload of mainCategoryPayloads()) {
        await withRestoreWriteRetry(() => upsertByUnique("StoreCategory", categoryPayload, "slug"));
      }
      await withRestoreWriteRetry(() => deleteNonMainCategories(mainCategoryPayloads().map((category) => category.slug)));
    }

    res.json({
      message: "Live products restored from CSV.",
      source: csvPath,
      total: restoreRows.length,
      sourceTotal: rows.length,
      offset: restorePaging.offset,
      limit: restorePaging.limit || null,
      hasMore: restorePaging.limited && restorePaging.offset + restoreRows.length < rows.length,
      nextOffset: restorePaging.limited && restorePaging.offset + restoreRows.length < rows.length
        ? restorePaging.offset + restoreRows.length
        : null,
      created,
      updated,
      deactivated,
      categories: mainCategoryPayloads().length,
      categoryCounts: Object.fromEntries(categoryCounts.entries()),
      media: {
        backend: restoreMediaBackend(),
        ...mediaValidation,
        ...mediaStats
      }
    });
  } catch (error) {
    next(error);
  }
}

export async function cleanupRestoredProducts(req, res, next) {
  try {
    await ensureAppSchema();
    const products = await dbQuery("SELECT * FROM `StoreProduct` ORDER BY sortOrder ASC, id ASC");
    const categoryCounts = new Map();
    let updated = 0;

    for (const [index, product] of products.entries()) {
      const cleanProduct = cleanRestoredProductRow(normalizeProduct(product), index);
      categoryCounts.set(cleanProduct.categorySlug, (categoryCounts.get(cleanProduct.categorySlug) || 0) + 1);
      await updateRow(
        "StoreProduct",
        {
          category: cleanProduct.category,
          categorySlug: cleanProduct.categorySlug,
          tag: cleanProduct.tag,
          canonicalUrl: `/products/${cleanProduct.slug}`,
          sortOrder: cleanProduct.sortOrder
        },
        product.id
      );
      updated += 1;
    }

    const mainCategories = mainCategoryPayloads();
    for (const categoryPayload of mainCategories) {
      const existing = await first("SELECT id FROM `StoreCategory` WHERE slug = ? LIMIT 1", [categoryPayload.slug]);
      if (existing) {
        await updateRow("StoreCategory", categoryPayload, existing.id);
      } else {
        await insertRow("StoreCategory", categoryPayload);
      }
    }

    await deleteNonMainCategories(mainCategories.map((category) => category.slug));

    res.json({
      message: "Restored products cleaned into the main category structure.",
      updated,
      categories: mainCategories.length,
      categoryCounts: Object.fromEntries(categoryCounts.entries())
    });
  } catch (error) {
    next(error);
  }
}

export async function finalizeLiveProductRestore(req, res, next) {
  try {
    const csvPath = path.resolve(process.cwd(), "live products", "fuelpack-live-products.csv");
    const rows = parseCsv(await fs.readFile(csvPath, "utf8"));
    await ensureAppSchema();
    const restoredSlugs = rows.map((row, index) => {
      const cleanRow = cleanRestoredProductRow(row, index);
      return cleanRow.slug || slugify(cleanRow.title);
    });
    let deactivated = 0;

    if (restoredSlugs.length) {
      const placeholders = restoredSlugs.map(() => "?").join(", ");
      const result = await withRestoreWriteRetry(() =>
        dbExecute(
          `UPDATE \`StoreProduct\` SET status = ? WHERE slug NOT IN (${placeholders})`,
          ["inactive", ...restoredSlugs]
        )
      );
      deactivated = result.affectedRows || 0;
    }

    for (const categoryPayload of mainCategoryPayloads()) {
      await withRestoreWriteRetry(() => upsertByUnique("StoreCategory", categoryPayload, "slug"));
    }
    await withRestoreWriteRetry(() => deleteNonMainCategories(mainCategoryPayloads().map((category) => category.slug)));

    res.json({
      message: "Live product restore finalized.",
      source: csvPath,
      sourceTotal: rows.length,
      categories: mainCategoryPayloads().length,
      deactivated
    });
  } catch (error) {
    next(error);
  }
}

export async function upsertCategory(req, res, next) {
  try {
    await ensureAppSchema();
    const payload = {
      label: req.body.label,
      slug: req.body.slug,
      href: req.body.href || `/menu/${req.body.slug}`,
      seoTitle: req.body.seoTitle || null,
      seoDescription: req.body.seoDescription || null,
      seoIntro: req.body.seoIntro || null,
      canonicalUrl: req.body.canonicalUrl || null,
      featured: req.body.featured ? 1 : 0,
      sortOrder: Number(req.body.sortOrder || 0)
    };

    let id = Number(req.params.id || 0);
    if (id) {
      await updateRow("StoreCategory", payload, id);
    } else {
      const existing = await first("SELECT id FROM `StoreCategory` WHERE slug = ? LIMIT 1", [payload.slug]);
      if (existing) {
        id = existing.id;
        await updateRow("StoreCategory", payload, id);
      } else {
        const result = await insertRow("StoreCategory", payload);
        id = result.insertId;
      }
    }

    res.json(normalizeCategory(await findById("StoreCategory", id)));
  } catch (error) {
    next(error);
  }
}

function normalizeProduct(product) {
  if (!product) return product;
  const gallery = normalizeMediaArray(normalizeJson(product.gallery, []));
  const image = normalizeMediaUrl(product.image) || gallery[0] || null;
  return {
    ...product,
    price: Number(product.price || 0),
    inventory: Number(product.inventory || 0),
    reviewRating: product.reviewRating === null || product.reviewRating === undefined ? null : Number(product.reviewRating),
    reviewCount: product.reviewCount === null || product.reviewCount === undefined ? null : Number(product.reviewCount),
    image,
    video: normalizeMediaUrl(product.video) || null,
    gallery: Array.from(new Set([image, ...gallery].filter(Boolean))),
    variants: normalizeJson(product.variants, []),
    hues: normalizeJson(product.hues, [])
  };
}

function storefrontProductPaging(query) {
  const rawLimit = Number(query.productLimit ?? query.limit ?? 0);
  const limit = rawLimit > 0 ? Math.min(Math.max(rawLimit, 1), 120) : 0;
  const offset = Math.max(Number(query.productOffset ?? query.offset ?? 0), 0);

  return {
    limit,
    offset,
    limited: limit > 0,
    sql: limit > 0 ? " LIMIT ? OFFSET ?" : "",
    params: limit > 0 ? [limit, offset] : []
  };
}

function restoredProductPaging(query) {
  const rawLimit = Number(query.restoreLimit ?? query.limit ?? 0);
  const limit = rawLimit > 0 ? Math.min(Math.max(rawLimit, 1), 121) : 0;
  const offset = Math.max(Number(query.restoreOffset ?? query.offset ?? 0), 0);

  return {
    limit,
    offset,
    limited: limit > 0
  };
}

function normalizeCategory(category) {
  if (!category) return category;
  return {
    ...category,
    featured: Boolean(category.featured)
  };
}

function normalizeOrder(order) {
  if (!order) return order;
  return {
    ...order,
    total: Number(order.total || 0),
    items: normalizeJson(order.items, [])
  };
}

function normalizeProductPayload(body) {
  const gallery = normalizeMediaArray(body.gallery);
  const image = normalizeMediaUrl(body.image) || gallery[0] || null;
  return pick(
    {
      title: body.title,
      slug: body.slug || slugify(body.title),
      category: body.category,
      categorySlug: body.categorySlug,
      price: Number(body.price || 0),
      tag: body.tag || "NEW",
      inventory: Number(body.inventory || 0),
      status: body.status || "active",
      image,
      video: normalizeMediaUrl(body.video) || null,
      gallery: Array.from(new Set([image, ...gallery].filter(Boolean))),
      variants: normalizeVariants(body.variants),
      hues: Array.isArray(body.hues)
        ? body.hues
        : String(body.hues || "")
            .split(",")
            .map((hue) => hue.trim())
            .filter(Boolean),
      description: body.description || null,
      seoTitle: body.seoTitle || null,
      seoDescription: body.seoDescription || null,
      seoKeywords: body.seoKeywords || null,
      canonicalUrl: body.canonicalUrl || null,
      imageAlt: body.imageAlt || null,
      brand: body.brand || null,
      sku: body.sku || null,
      reviewRating: body.reviewRating ? Number(body.reviewRating) : null,
      reviewCount: body.reviewCount ? Number(body.reviewCount) : null,
      seoFocusKeyphrase: body.seoFocusKeyphrase || null,
      sortOrder: Number(body.sortOrder || 0)
    },
    productFields
  );
}

function normalizeMediaUrl(value) {
  const url = String(value || "").trim();
  if (!url) return "";
  if (url.startsWith("//")) return `https:${url}`;
  return url.replace(/\s/g, "%20");
}

function normalizeMediaArray(value) {
  return normalizeArray(value).map(normalizeMediaUrl).filter(Boolean);
}

function validateRestoredProductMedia(rows) {
  const missingImages = [];
  const invalidImages = [];
  const invalidVideos = [];
  let videoCount = 0;

  for (const [index, row] of rows.entries()) {
    const imageItems = Array.from(new Set([row.image, ...normalizeMediaArray(parseJson(row.gallery, []))].map(normalizeMediaUrl).filter(Boolean)));
    if (!imageItems.length) {
      missingImages.push(row.slug || row.title || `row-${index + 1}`);
    }
    for (const imageUrl of imageItems) {
      if (!isRemoteHttpUrl(imageUrl)) {
        invalidImages.push(`${row.slug || row.title || `row-${index + 1}`}: ${imageUrl}`);
      }
    }
    const videoUrl = normalizeMediaUrl(row.video);
    if (videoUrl) {
      videoCount += 1;
      if (!isRemoteHttpUrl(videoUrl)) {
        invalidVideos.push(`${row.slug || row.title || `row-${index + 1}`}: ${videoUrl}`);
      }
    }
  }

  if (missingImages.length || invalidImages.length || invalidVideos.length) {
    const error = new Error("Restored product media validation failed.");
    error.status = 400;
    error.details = {
      missingImages,
      invalidImages,
      invalidVideos
    };
    throw error;
  }

  return {
    productsWithImages: rows.length,
    productsWithVideos: videoCount,
    productsMissingVideos: rows.length - videoCount
  };
}

async function mirrorRestoredProductMedia({ slug, image, video, gallery, existingProduct, stats }) {
  const galleryItems = normalizeMediaArray(gallery);
  const imageItems = Array.from(new Set([image, ...galleryItems].map(normalizeMediaUrl).filter(Boolean)));
  const mirroredGalleryImages = [];
  const imageErrors = [];
  const primaryImageUrl = imageItems[0] || "";
  let mirroredPrimaryImage = "";

  for (const [index, url] of imageItems.entries()) {
    try {
      const mirroredImage = await mirrorRemoteAsset(url, {
        slug,
        index,
        resourceType: "image",
        stats
      });
      if (index === 0) {
        mirroredPrimaryImage = mirroredImage;
      } else {
        mirroredGalleryImages.push(mirroredImage);
      }
    } catch (error) {
      imageErrors.push(error.message);
      if (url !== primaryImageUrl) stats.failedGalleryImages += 1;
    }
  }

  let primaryImage = mirroredPrimaryImage;
  if (!primaryImage) {
    primaryImage = firstPreservableExistingImage(existingProduct);
    if (primaryImage) stats.preservedExistingImages += 1;
  }

  if (!primaryImage) {
    const error = new Error(`Primary product image could not be uploaded or safely preserved for ${slug}.`);
    error.status = 502;
    error.details = {
      slug,
      primaryImageUrl,
      imageErrors
    };
    throw error;
  }

  const existingImages = preservableExistingImages(existingProduct);
  const imageSet = new Set([primaryImage, ...mirroredGalleryImages.filter(Boolean), ...existingImages]);

  return {
    image: primaryImage,
    gallery: Array.from(imageSet),
    video: await mirrorRestoredVideo({ slug, video, existingProduct, stats })
  }
}

async function mirrorRestoredVideo({ slug, video, existingProduct, stats }) {
  try {
    return await mirrorRemoteAsset(video, {
      slug,
      index: 0,
      resourceType: "video",
      stats
    });
  } catch (error) {
    const existingVideo = normalizeMediaUrl(existingProduct?.video);
    if (isPreservableMediaUrl(existingVideo)) {
      stats.preservedExistingVideos += 1;
      return existingVideo;
    }
    throw error;
  }
}

function firstPreservableExistingImage(product) {
  return preservableExistingImages(product)[0] || "";
}

function preservableExistingImages(product) {
  if (!product) return [];
  const candidates = normalizeMediaArray([product.image, ...normalizeJson(product.gallery, [])]);
  return Array.from(new Set(candidates.filter(isPreservableMediaUrl)));
}

function isPreservableMediaUrl(url) {
  const normalized = normalizeMediaUrl(url);
  if (!normalized || isFallbackProductImage(normalized)) return false;
  return normalized.startsWith("/") || isManagedRestoreMediaUrl(normalized);
}

function isFallbackProductImage(url) {
  return normalizeMediaUrl(url) === "/fuelpack-assets/logo.jpeg";
}

async function mirrorRemoteAsset(sourceUrl, { slug, index, resourceType, stats }) {
  const url = normalizeMediaUrl(sourceUrl);
  if (!url) return null;
  if (isManagedRestoreMediaUrl(url)) {
    if (resourceType === "image") stats.existingManagedImages += 1;
    if (resourceType === "video") stats.existingManagedVideos += 1;
    return url;
  }

  try {
    const resultUrl = await uploadRemoteRestoreAsset(url, {
      slug,
      index,
      resourceType,
      stats
    });
    if (restoreMediaBackend() !== "cloudinary") {
      if (resourceType === "image") stats.imageUploads += 1;
      if (resourceType === "video") stats.videoUploads += 1;
    }
    return resultUrl;
  } catch (error) {
    const uploadError = new Error(`${restoreMediaBackend()} ${resourceType} upload failed for ${slug}: ${error.message}`);
    uploadError.status = 502;
    uploadError.cause = error;
    throw uploadError;
  }
}

function isRemoteHttpUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function optimizeProductForSeo(product) {
  const title = product.title || "FUELPACKS Product";
  const category = product.category || "Products";
  const focus = title;
  const variantSummary = Array.isArray(product.variants) && product.variants.length
    ? product.variants.map((variant) => `${variant.name} at $${Number(variant.price || product.price || 0).toFixed(2)}`).join(", ")
    : `standard option at $${Number(product.price || 0).toFixed(2)}`;
  const baseDescription = stripHtml(product.description || "");
  const longDescription = [
    baseDescription,
    `${title} is available in the ${category} catalog from FUELPACKS with clear product media, current menu pricing, and quick Telegram ordering for direct sales rep handoff.`,
    `This listing includes the main product image, available product video when supplied, variant options, stock-ready menu details, and a clean product page built for shoppers comparing live FUELPACKS products.`,
    `Choose the preferred option, add it to the cart, review the order details, and send the prepared Telegram message to continue checkout without payment being processed on-site.`,
    `Current variants include ${variantSummary}. The product page is optimized with descriptive text, readable metadata, focused keywords, structured pricing details, and image alt text for reliable search visibility.`
  ].filter(Boolean).join(" ");

  return {
    ...product,
    description: ensureWordCount(longDescription, 85),
    seoTitle: seoTitle(`${title} | FUELPACKS ${category}`),
    seoDescription: seoDescription(`${title} from FUELPACKS ${category}. View images, video, variants, price, availability, and send your prepared order through Telegram checkout.`),
    seoKeywords: product.seoKeywords || [category, title, "FUELPACKS", "Telegram ordering"].filter(Boolean).join(", "),
    canonicalUrl: product.canonicalUrl || `/products/${product.slug}`,
    imageAlt: product.imageAlt || `${title} product image from FUELPACKS`,
    brand: product.brand || "FUELPACKS",
    sku: product.sku || product.slug,
    seoFocusKeyphrase: focus
  };
}

function normalizeArray(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  return String(value || "")
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

function normalizeVariants(value) {
  if (Array.isArray(value)) {
    return value
      .filter((variant) => variant?.name)
      .map((variant) => ({
        name: variant.name,
        price: Number(variant.price || 0),
        inventory: Number(variant.inventory || 0)
      }));
  }

  return String(value || "")
    .split("\n")
    .map((line) => {
      const [name, price, inventory] = line.split("|").map((part) => part?.trim());
      return name
        ? { name, price: Number(price || 0), inventory: Number(inventory || 0) }
        : null;
    })
    .filter(Boolean);
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

function parseJson(value, fallback) {
  if (!value) return fallback;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
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

function stripHtml(value) {
  return String(value || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
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

function normalizeOrderPayload(body) {
  const customer = String(body.customer || "").trim();
  const phone = String(body.phone || "").trim();
  const items = Array.isArray(body.items) ? body.items : [];

  if (!customer) {
    const error = new Error("Customer name is required.");
    error.status = 400;
    throw error;
  }
  if (!phone) {
    const error = new Error("Phone or Signal number is required.");
    error.status = 400;
    throw error;
  }
  if (!items.length) {
    const error = new Error("Cart is empty.");
    error.status = 400;
    throw error;
  }

  const normalizedItems = items.map((item) => {
    const price = Number(item.price || 0);
    const quantity = Math.max(1, Number(item.quantity || 1));
    return {
      productId: item.productId || item.id || null,
      slug: item.slug || "",
      title: item.title || "Product",
      variant: item.variant || item.selectedVariant?.name || "",
      price,
      quantity,
      lineTotal: price * quantity,
      image: item.image || ""
    };
  });
  const total = normalizedItems.reduce((sum, item) => sum + item.lineTotal, 0);

  const notes = [
    body.signal ? `Signal/Telegram: ${body.signal}` : "",
    body.deliveryArea ? `Delivery area: ${body.deliveryArea}` : "",
    body.notes ? `Notes: ${body.notes}` : ""
  ]
    .filter(Boolean)
    .join("\n");

  return {
    customer,
    email: String(body.email || "").trim() || null,
    phone,
    status: "new",
    total,
    items: normalizedItems,
    notes: notes || null
  };
}

async function notifyTelegram(order) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    return { sent: false };
  }

  const lines = Array.isArray(order.items) ? order.items : [];
  const text = [
    "New Fuelpacks order",
    "",
    `Order ID: #${order.id}`,
    `Customer: ${order.customer}`,
    `Phone: ${order.phone || "Not provided"}`,
    `Email: ${order.email || "Not provided"}`,
    `Total: $${Number(order.total || 0).toFixed(2)}`,
    "",
    "Items:",
    ...lines.map(
      (item) =>
        `- ${item.quantity} x ${item.title}${item.variant ? ` (${item.variant})` : ""} - $${Number(item.lineTotal || 0).toFixed(2)}`
    ),
    order.notes ? `\n${order.notes}` : ""
  ].join("\n");

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text
      })
    });
    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      return { sent: false, error: data.description || "Telegram notification failed." };
    }
    return { sent: true };
  } catch (error) {
    return { sent: false, error: error.message };
  }
}

async function first(sql, params = []) {
  const rows = await dbQuery(sql, params);
  return rows[0] || null;
}

async function findById(table, id) {
  return first(`SELECT * FROM \`${table}\` WHERE id = ? LIMIT 1`, [id]);
}

async function insertRow(table, data) {
  const keys = Object.keys(data).filter((key) => data[key] !== undefined);
  const columns = keys.map((key) => `\`${key}\``).join(", ");
  const placeholders = keys.map(() => "?").join(", ");
  return dbExecute(`INSERT INTO \`${table}\` (${columns}) VALUES (${placeholders})`, keys.map((key) => data[key]));
}

async function upsertByUnique(table, data, uniqueKey) {
  const keys = Object.keys(data).filter((key) => data[key] !== undefined);
  const columns = keys.map((key) => `\`${key}\``).join(", ");
  const placeholders = keys.map(() => "?").join(", ");
  const updates = keys
    .filter((key) => key !== uniqueKey && key !== "id")
    .map((key) => `\`${key}\` = VALUES(\`${key}\`)`)
    .join(", ");
  return dbExecute(
    `INSERT INTO \`${table}\` (${columns}) VALUES (${placeholders}) ON DUPLICATE KEY UPDATE ${updates}`,
    keys.map((key) => data[key])
  );
}

async function updateRow(table, data, id) {
  const keys = Object.keys(data).filter((key) => data[key] !== undefined);
  if (!keys.length) return;
  const assignments = keys.map((key) => `\`${key}\` = ?`).join(", ");
  await dbExecute(`UPDATE \`${table}\` SET ${assignments} WHERE id = ?`, [...keys.map((key) => data[key]), id]);
}

async function deleteNonMainCategories(slugs) {
  if (!slugs.length) return;
  const placeholders = slugs.map(() => "?").join(", ");
  await dbExecute(`DELETE FROM \`StoreCategory\` WHERE slug NOT IN (${placeholders})`, slugs);
}

async function withRestoreWriteRetry(operation, attempts = Number(process.env.RESTORE_DB_WRITE_ATTEMPTS || 5)) {
  let lastError;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      if (!isTransientRestoreDbError(error) || attempt === attempts) {
        throw error;
      }
      await wait(750 * attempt);
    }
  }

  throw lastError;
}

function isTransientRestoreDbError(error) {
  return [
    "ECONNRESET",
    "ETIMEDOUT",
    "EAI_AGAIN",
    "PROTOCOL_CONNECTION_LOST",
    "ER_TOO_MANY_USER_CONNECTIONS"
  ].includes(error?.code);
}

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function upsertSingleton(table, data) {
  const existing = await first(`SELECT id FROM \`${table}\` WHERE id = 1 LIMIT 1`);
  if (existing) {
    await updateRow(table, data, 1);
    return;
  }

  await insertRow(table, { id: 1, ...data });
}

function pick(source, fields) {
  return fields.reduce((data, field) => {
    if (source[field] !== undefined) data[field] = source[field];
    return data;
  }, {});
}

function serializeData(data, jsonFields) {
  return Object.fromEntries(
    Object.entries(data).map(([key, value]) => [
      key,
      jsonFields.has(key) && value !== null && value !== undefined ? JSON.stringify(value) : value
    ])
  );
}

function normalizeJson(value, fallback) {
  if (Array.isArray(value)) return value;
  if (value && typeof value === "object" && !Buffer.isBuffer(value)) return value;
  if (Buffer.isBuffer(value)) value = value.toString("utf8");
  if (!value) return fallback;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

function rankBy(events, key, limit) {
  const counts = new Map();
  for (const event of events) {
    const value = event[key] || "Unknown";
    counts.set(value, (counts.get(value) || 0) + 1);
  }
  return Array.from(counts.entries())
    .map(([itemKey, count]) => ({ key: itemKey, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}

function rankProducts(events, limit) {
  const counts = new Map();
  for (const event of events.filter((item) => item.productSlug || item.productName)) {
    const key = event.productSlug || event.productName;
    const current = counts.get(key) || {
      slug: event.productSlug || "",
      name: event.productName || event.productSlug || "Unknown product",
      views: 0,
      clicks: 0,
      carts: 0
    };
    if (event.type === "product_view") current.views += 1;
    if (event.type.includes("click")) current.clicks += 1;
    if (event.type === "add_to_cart") current.carts += 1;
    counts.set(key, current);
  }
  return Array.from(counts.values())
    .map((item) => ({ ...item, total: item.views + item.clicks + item.carts }))
    .sort((a, b) => b.total - a.total)
    .slice(0, limit);
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function toMysqlDate(date) {
  return date.toISOString().slice(0, 19).replace("T", " ");
}
