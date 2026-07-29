import path from "node:path";
import { fileURLToPath } from "node:url";
import cors from "cors";
import express from "express";
import { siteRouter } from "./routes/site.routes.js";
import { quoteRouter } from "./routes/quote.routes.js";
import { seoRouter } from "./routes/seo.routes.js";
import { uploadRouter } from "./routes/upload.routes.js";
import { adminRouter, storefrontRouter } from "./routes/storefront.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, "../../dist");

export const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173"
  })
);
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/site", siteRouter);
app.use("/api/quotes", quoteRouter);
app.use("/api/uploads", uploadRouter);
app.use("/api/storefront", storefrontRouter);
app.use("/api/admin", adminRouter);
app.use("/", seoRouter);

app.use(express.static(distPath));
app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api")) {
    return next();
  }
  res.sendFile(path.join(distPath, "index.html"));
});

app.use(errorHandler);
