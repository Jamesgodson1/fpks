import { dbQuery, ensureAppSchema } from "../config/mysql.js";

export async function getSiteContent(req, res, next) {
  try {
    await ensureAppSchema();
    const [settings, hero, capabilities, workItems, faqs] = await Promise.all([
      first("SELECT * FROM `SiteSetting` WHERE id = 1 LIMIT 1"),
      first("SELECT * FROM `HeroSection` WHERE id = 1 LIMIT 1"),
      dbQuery("SELECT * FROM `Capability` ORDER BY sortOrder ASC"),
      dbQuery("SELECT * FROM `WorkItem` ORDER BY sortOrder ASC"),
      dbQuery("SELECT * FROM `Faq` ORDER BY sortOrder ASC")
    ]);

    res.json({
      settings,
      hero,
      capabilities,
      workItems,
      faqs
    });
  } catch (error) {
    next(error);
  }
}

async function first(sql, params = []) {
  const rows = await dbQuery(sql, params);
  return rows[0] || null;
}
