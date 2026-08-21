import "dotenv/config";
import fs from "node:fs/promises";
import path from "node:path";

const sourceUrl = process.env.LIVE_PRODUCTS_URL || "https://fuelpacks.store/";
const outputPath = path.resolve(process.cwd(), "live products", "fuelpack-live-home.html");

const response = await fetch(sourceUrl, {
  headers: {
    accept: "text/html,application/xhtml+xml",
    "user-agent": "Mozilla/5.0 FuelspackRestore/1.0"
  }
});

if (!response.ok) {
  throw new Error(`Failed to fetch ${sourceUrl}: ${response.status} ${response.statusText}`);
}

const html = await response.text();
await fs.mkdir(path.dirname(outputPath), { recursive: true });
await fs.writeFile(outputPath, html, "utf8");

console.log(
  JSON.stringify(
    {
      sourceUrl,
      outputPath,
      bytes: Buffer.byteLength(html)
    },
    null,
    2
  )
);
