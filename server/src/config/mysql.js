import mysql from "mysql2/promise";

const database = process.env.DB_DATABASE || process.env.MYSQL_DATABASE;

export const mysqlPool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT || 3306),
  database,
  user: process.env.DB_USERNAME || process.env.MYSQL_USER || "root",
  password: process.env.DB_PASSWORD || process.env.MYSQL_PASSWORD || "",
  waitForConnections: true,
  connectionLimit: Number(process.env.DB_CONNECTION_LIMIT || (process.env.DB_PERSISTENT === "true" ? 5 : 1)),
  queueLimit: 0,
  connectTimeout: Number(process.env.DB_CONNECT_TIMEOUT || 30000),
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
  timezone: "Z",
  charset: "utf8mb4"
});

let schemaPromise;

export function ensureAppSchema() {
  if (!schemaPromise) {
    schemaPromise = createSchema();
  }
  return schemaPromise;
}

export async function dbQuery(sql, params = []) {
  const [rows] = await withMysqlRetry(() => mysqlPool.query(sql, params));
  return rows;
}

export async function dbExecute(sql, params = []) {
  const [result] = await withMysqlRetry(() => mysqlPool.execute(sql, params));
  return result;
}

async function withMysqlRetry(operation, attempts = Number(process.env.DB_RETRY_ATTEMPTS || 3)) {
  let lastError;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      if (!isTransientMysqlError(error) || attempt === attempts) {
        throw error;
      }
      await wait(400 * attempt);
    }
  }

  throw lastError;
}

function isTransientMysqlError(error) {
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

async function createSchema() {
  if (!database) {
    throw new Error("DB_DATABASE is required for the MySQL connection.");
  }

  await mysqlPool.query(`
    CREATE TABLE IF NOT EXISTS \`SiteSetting\` (
      \`id\` INT NOT NULL DEFAULT 1,
      \`brandName\` VARCHAR(255) NOT NULL,
      \`logoText\` VARCHAR(255) NOT NULL,
      \`contactEmail\` VARCHAR(255) NOT NULL,
      \`serviceArea\` VARCHAR(255) NOT NULL,
      \`footerDescription\` TEXT NOT NULL,
      \`createdAt\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      \`updatedAt\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (\`id\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);

  await mysqlPool.query(`
    CREATE TABLE IF NOT EXISTS \`HeroSection\` (
      \`id\` INT NOT NULL DEFAULT 1,
      \`eyebrow\` VARCHAR(255) NOT NULL,
      \`headline\` VARCHAR(255) NOT NULL,
      \`subtitle\` TEXT NOT NULL,
      \`imageUrl\` TEXT NOT NULL,
      \`imageAlt\` TEXT NOT NULL,
      \`primaryCtaLabel\` VARCHAR(255) NOT NULL,
      \`primaryCtaUrl\` VARCHAR(255) NOT NULL,
      \`createdAt\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      \`updatedAt\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (\`id\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);

  await mysqlPool.query(`
    CREATE TABLE IF NOT EXISTS \`Capability\` (
      \`id\` INT NOT NULL AUTO_INCREMENT,
      \`number\` VARCHAR(255) NOT NULL,
      \`title\` VARCHAR(255) NOT NULL,
      \`description\` TEXT NOT NULL,
      \`materials\` VARCHAR(255) NOT NULL,
      \`imageUrl\` TEXT NOT NULL,
      \`imageAlt\` TEXT NOT NULL,
      \`sortOrder\` INT NOT NULL DEFAULT 0,
      \`createdAt\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      \`updatedAt\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (\`id\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);

  await mysqlPool.query(`
    CREATE TABLE IF NOT EXISTS \`WorkItem\` (
      \`id\` INT NOT NULL AUTO_INCREMENT,
      \`number\` VARCHAR(255) NOT NULL,
      \`category\` VARCHAR(255) NOT NULL,
      \`title\` VARCHAR(255) NOT NULL,
      \`description\` TEXT NOT NULL,
      \`imageUrl\` TEXT NOT NULL,
      \`imageAlt\` TEXT NOT NULL,
      \`sortOrder\` INT NOT NULL DEFAULT 0,
      \`createdAt\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      \`updatedAt\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (\`id\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);

  await mysqlPool.query(`
    CREATE TABLE IF NOT EXISTS \`Faq\` (
      \`id\` INT NOT NULL AUTO_INCREMENT,
      \`question\` VARCHAR(255) NOT NULL,
      \`answer\` TEXT NOT NULL,
      \`sortOrder\` INT NOT NULL DEFAULT 0,
      \`createdAt\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      \`updatedAt\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (\`id\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);

  await mysqlPool.query(`
    CREATE TABLE IF NOT EXISTS \`MediaAsset\` (
      \`id\` INT NOT NULL AUTO_INCREMENT,
      \`cloudinaryPublicId\` VARCHAR(255) NOT NULL,
      \`url\` TEXT NOT NULL,
      \`altText\` TEXT NOT NULL,
      \`assetType\` VARCHAR(255) NOT NULL,
      \`createdAt\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (\`id\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);

  await mysqlPool.query(`
    CREATE TABLE IF NOT EXISTS \`QuoteRequest\` (
      \`id\` INT NOT NULL AUTO_INCREMENT,
      \`name\` VARCHAR(255) NOT NULL,
      \`email\` VARCHAR(255) NOT NULL,
      \`company\` VARCHAR(255) NOT NULL,
      \`phone\` VARCHAR(255) NULL,
      \`skuDetails\` TEXT NOT NULL,
      \`timeline\` VARCHAR(255) NULL,
      \`message\` TEXT NULL,
      \`createdAt\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (\`id\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);

  await mysqlPool.query(`
    CREATE TABLE IF NOT EXISTS \`StoreSetting\` (
      \`id\` INT NOT NULL DEFAULT 1,
      \`brandName\` VARCHAR(255) NOT NULL,
      \`logoUrl\` TEXT NOT NULL,
      \`metaTitle\` VARCHAR(255) NOT NULL,
      \`metaDescription\` TEXT NOT NULL,
      \`ogDescription\` TEXT NOT NULL,
      \`seoKeywords\` TEXT NULL,
      \`searchConsoleId\` VARCHAR(255) NULL,
      \`gaMeasurementId\` VARCHAR(255) NULL,
      \`bingVerifyId\` VARCHAR(255) NULL,
      \`marquee\` TEXT NOT NULL,
      \`footerText\` TEXT NOT NULL,
      \`contactEmail\` VARCHAR(255) NOT NULL,
      \`checkoutMode\` VARCHAR(255) NOT NULL DEFAULT 'request',
      \`createdAt\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      \`updatedAt\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (\`id\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);

  await mysqlPool.query(`
    CREATE TABLE IF NOT EXISTS \`StoreContent\` (
      \`id\` INT NOT NULL DEFAULT 1,
      \`heroEyebrow\` VARCHAR(255) NOT NULL,
      \`heroLineOne\` VARCHAR(255) NOT NULL,
      \`heroLineTwo\` VARCHAR(255) NOT NULL,
      \`heroLineThree\` VARCHAR(255) NOT NULL,
      \`heroCopy\` TEXT NOT NULL,
      \`primaryCta\` VARCHAR(255) NOT NULL,
      \`secondaryCta\` VARCHAR(255) NOT NULL,
      \`dropsEyebrow\` VARCHAR(255) NOT NULL,
      \`dropsTitle\` VARCHAR(255) NOT NULL,
      \`menuTitle\` VARCHAR(255) NOT NULL,
      \`menuCopy\` TEXT NOT NULL,
      \`faqTitle\` VARCHAR(255) NOT NULL,
      \`createdAt\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      \`updatedAt\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (\`id\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);

  await mysqlPool.query(`
    CREATE TABLE IF NOT EXISTS \`StoreCategory\` (
      \`id\` INT NOT NULL AUTO_INCREMENT,
      \`label\` VARCHAR(255) NOT NULL,
      \`slug\` VARCHAR(255) NOT NULL,
      \`href\` VARCHAR(255) NOT NULL,
      \`seoTitle\` VARCHAR(255) NULL,
      \`seoDescription\` TEXT NULL,
      \`seoIntro\` TEXT NULL,
      \`canonicalUrl\` TEXT NULL,
      \`featured\` TINYINT(1) NOT NULL DEFAULT 0,
      \`sortOrder\` INT NOT NULL DEFAULT 0,
      \`createdAt\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      \`updatedAt\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (\`id\`),
      UNIQUE KEY \`StoreCategory_slug_key\` (\`slug\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);

  await mysqlPool.query(`
    CREATE TABLE IF NOT EXISTS \`StoreProduct\` (
      \`id\` INT NOT NULL AUTO_INCREMENT,
      \`title\` VARCHAR(255) NOT NULL,
      \`slug\` VARCHAR(255) NOT NULL,
      \`category\` VARCHAR(255) NOT NULL,
      \`categorySlug\` VARCHAR(255) NOT NULL,
      \`price\` DOUBLE NOT NULL DEFAULT 0,
      \`tag\` VARCHAR(255) NULL,
      \`inventory\` INT NOT NULL DEFAULT 0,
      \`status\` VARCHAR(255) NOT NULL DEFAULT 'active',
      \`image\` TEXT NULL,
      \`video\` TEXT NULL,
      \`gallery\` JSON NULL,
      \`variants\` JSON NULL,
      \`hues\` JSON NULL,
      \`description\` TEXT NULL,
      \`seoTitle\` VARCHAR(255) NULL,
      \`seoDescription\` TEXT NULL,
      \`seoKeywords\` TEXT NULL,
      \`canonicalUrl\` TEXT NULL,
      \`imageAlt\` TEXT NULL,
      \`brand\` VARCHAR(255) NULL,
      \`sku\` VARCHAR(255) NULL,
      \`reviewRating\` DOUBLE NULL,
      \`reviewCount\` INT NULL,
      \`seoFocusKeyphrase\` VARCHAR(255) NULL,
      \`sortOrder\` INT NOT NULL DEFAULT 0,
      \`createdAt\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      \`updatedAt\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (\`id\`),
      UNIQUE KEY \`StoreProduct_slug_key\` (\`slug\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);

  await mysqlPool.query(`
    CREATE TABLE IF NOT EXISTS \`StoreFaq\` (
      \`id\` INT NOT NULL AUTO_INCREMENT,
      \`question\` VARCHAR(255) NOT NULL,
      \`answer\` TEXT NOT NULL,
      \`sortOrder\` INT NOT NULL DEFAULT 0,
      \`createdAt\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      \`updatedAt\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (\`id\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);

  await mysqlPool.query(`
    CREATE TABLE IF NOT EXISTS \`StoreOrder\` (
      \`id\` INT NOT NULL AUTO_INCREMENT,
      \`customer\` VARCHAR(255) NOT NULL,
      \`email\` VARCHAR(255) NULL,
      \`phone\` VARCHAR(255) NULL,
      \`status\` VARCHAR(255) NOT NULL DEFAULT 'new',
      \`total\` DOUBLE NOT NULL DEFAULT 0,
      \`items\` JSON NOT NULL,
      \`notes\` TEXT NULL,
      \`createdAt\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      \`updatedAt\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (\`id\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);

  await mysqlPool.query(`
    CREATE TABLE IF NOT EXISTS \`StoreAnalyticsEvent\` (
      \`id\` INT NOT NULL AUTO_INCREMENT,
      \`type\` VARCHAR(60) NOT NULL,
      \`path\` VARCHAR(500) NOT NULL,
      \`title\` VARCHAR(255) NULL,
      \`productSlug\` VARCHAR(255) NULL,
      \`productName\` VARCHAR(255) NULL,
      \`referrer\` TEXT NULL,
      \`userAgent\` TEXT NULL,
      \`createdAt\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (\`id\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);

  await ensureColumns();
}

async function ensureColumns() {
  const columns = [
    ["StoreSetting", "seoKeywords", "TEXT NULL"],
    ["StoreSetting", "searchConsoleId", "VARCHAR(255) NULL"],
    ["StoreSetting", "gaMeasurementId", "VARCHAR(255) NULL"],
    ["StoreSetting", "bingVerifyId", "VARCHAR(255) NULL"],
    ["StoreCategory", "seoTitle", "VARCHAR(255) NULL"],
    ["StoreCategory", "seoDescription", "TEXT NULL"],
    ["StoreCategory", "seoIntro", "TEXT NULL"],
    ["StoreCategory", "canonicalUrl", "TEXT NULL"],
    ["StoreProduct", "gallery", "JSON NULL"],
    ["StoreProduct", "video", "TEXT NULL"],
    ["StoreProduct", "variants", "JSON NULL"],
    ["StoreProduct", "hues", "JSON NULL"],
    ["StoreProduct", "seoTitle", "VARCHAR(255) NULL"],
    ["StoreProduct", "seoDescription", "TEXT NULL"],
    ["StoreProduct", "seoKeywords", "TEXT NULL"],
    ["StoreProduct", "canonicalUrl", "TEXT NULL"],
    ["StoreProduct", "imageAlt", "TEXT NULL"],
    ["StoreProduct", "brand", "VARCHAR(255) NULL"],
    ["StoreProduct", "sku", "VARCHAR(255) NULL"],
    ["StoreProduct", "reviewRating", "DOUBLE NULL"],
    ["StoreProduct", "reviewCount", "INT NULL"],
    ["StoreProduct", "seoFocusKeyphrase", "VARCHAR(255) NULL"]
  ];

  for (const [table, column, definition] of columns) {
    await ensureColumn(table, column, definition);
  }
}

async function ensureColumn(table, column, definition) {
  const rows = await dbQuery(
    "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ? AND COLUMN_NAME = ?",
    [database, table, column]
  );

  if (!rows.length) {
    await mysqlPool.query(`ALTER TABLE \`${table}\` ADD COLUMN \`${column}\` ${definition}`);
  }
}
