import { z } from "zod";
import { dbExecute, dbQuery, ensureAppSchema } from "../config/mysql.js";
import { getTransporter } from "../config/mail.js";

const quoteSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  phone: z.string().optional().or(z.literal("")),
  skuDetails: z.string().min(10),
  timeline: z.string().optional().or(z.literal("")),
  message: z.string().optional().or(z.literal(""))
});

export async function createQuoteRequest(req, res, next) {
  try {
    await ensureAppSchema();
    const data = quoteSchema.parse(req.body);
    const result = await dbExecute(
      "INSERT INTO `QuoteRequest` (`name`, `email`, `company`, `phone`, `skuDetails`, `timeline`, `message`) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        data.name,
        data.email,
        data.company,
        data.phone || null,
        data.skuDetails,
        data.timeline || null,
        data.message || null
      ]
    );
    const quote = await first("SELECT * FROM `QuoteRequest` WHERE id = ? LIMIT 1", [result.insertId]);

    const transporter = getTransporter();
    if (transporter) {
      await transporter.sendMail({
        from: process.env.MAIL_USER,
        to: process.env.QUOTE_RECIPIENT || process.env.MAIL_USER,
        subject: `New RFQ from ${data.company}`,
        text: [
          `Name: ${data.name}`,
          `Email: ${data.email}`,
          `Company: ${data.company}`,
          `Phone: ${data.phone || "N/A"}`,
          `Timeline: ${data.timeline || "N/A"}`,
          "",
          "SKU details:",
          data.skuDetails,
          "",
          "Message:",
          data.message || "N/A"
        ].join("\n")
      });
    }

    res.status(201).json({ message: "Quote request received.", quote });
  } catch (error) {
    if (error.name === "ZodError") {
      error.status = 400;
      error.message = "Please complete all required quote fields.";
    }
    next(error);
  }
}

export async function listQuoteRequests(req, res, next) {
  try {
    await ensureAppSchema();
    const quotes = await dbQuery("SELECT * FROM `QuoteRequest` ORDER BY createdAt DESC");
    res.json(quotes);
  } catch (error) {
    next(error);
  }
}

async function first(sql, params = []) {
  const rows = await dbQuery(sql, params);
  return rows[0] || null;
}
