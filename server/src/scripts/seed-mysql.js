import "dotenv/config";
import { fallbackStorefront } from "../../../client/src/data/storefrontData.js";
import { dbExecute, ensureAppSchema, mysqlPool } from "../config/mysql.js";

async function main() {
  await ensureAppSchema();

  await upsert("StoreSetting", { id: 1, ...fallbackStorefront.settings });
  await upsert("StoreContent", { id: 1, ...fallbackStorefront.content });

  await dbExecute("DELETE FROM `StoreFaq`");
  await dbExecute("DELETE FROM `StoreProduct`");
  await dbExecute("DELETE FROM `StoreCategory`");

  for (const [index, category] of fallbackStorefront.categories.entries()) {
    await insert("StoreCategory", {
      label: category.label,
      slug: category.slug,
      href: category.href,
      seoTitle: `${category.label} Menu | FUELPACKS`,
      seoDescription: `Browse ${category.label.toLowerCase()} products from FUELPACKS with active availability, variants, pricing, and sales rep handoff.`,
      seoIntro: `Browse ${category.label.toLowerCase()} from today's active supply. Pick a product, choose a variation, and send your cart request to the sales rep.`,
      canonicalUrl: category.slug === "all" ? "/menu" : `/menu/${category.slug}`,
      featured: category.featured ? 1 : 0,
      sortOrder: index + 1
    });
  }

  for (const [index, product] of fallbackStorefront.products.entries()) {
    await insert("StoreProduct", {
      title: product.title,
      slug: product.slug,
      category: product.category,
      categorySlug: product.categorySlug,
      price: product.price,
      tag: product.tag,
      inventory: product.inventory,
      status: product.status,
      image: product.image,
      gallery: JSON.stringify(product.gallery || []),
      variants: JSON.stringify(product.variants || []),
      hues: JSON.stringify(product.hues || []),
      description:
        product.description ||
        `${product.title} is part of the active FUELPACKS menu. Review available variants, pricing, inventory, and product images before adding it to your cart request for sales rep confirmation.`,
      seoTitle: `${product.title} | FUELPACKS`,
      seoDescription: `View ${product.title} from FUELPACKS. Check price, availability, variants, images, and send an order request to the sales rep.`,
      seoKeywords: `${product.title}, ${product.category}, FUELPACKS`,
      seoFocusKeyphrase: product.title.replace(/^#\w+\s+/, ""),
      imageAlt: `${product.title} product image`,
      brand: "FUELPACKS",
      sku: product.slug,
      sortOrder: index + 1
    });
  }

  for (const [index, faq] of fallbackStorefront.faqs.entries()) {
    await insert("StoreFaq", {
      question: faq.question,
      answer: faq.answer,
      sortOrder: index + 1
    });
  }

  console.log("MySQL database seeded.");
}

async function insert(table, data) {
  const keys = Object.keys(data).filter((key) => data[key] !== undefined);
  const columns = keys.map((key) => `\`${key}\``).join(", ");
  const placeholders = keys.map(() => "?").join(", ");
  await dbExecute(`INSERT INTO \`${table}\` (${columns}) VALUES (${placeholders})`, keys.map((key) => data[key]));
}

async function upsert(table, data) {
  const keys = Object.keys(data).filter((key) => data[key] !== undefined);
  const columns = keys.map((key) => `\`${key}\``).join(", ");
  const placeholders = keys.map(() => "?").join(", ");
  const updates = keys
    .filter((key) => key !== "id")
    .map((key) => `\`${key}\` = VALUES(\`${key}\`)`)
    .join(", ");
  await dbExecute(
    `INSERT INTO \`${table}\` (${columns}) VALUES (${placeholders}) ON DUPLICATE KEY UPDATE ${updates}`,
    keys.map((key) => data[key])
  );
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await mysqlPool.end();
  });
