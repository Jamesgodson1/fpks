import { spawnSync } from "node:child_process";
import path from "node:path";
import { setupPrismaEnv } from "./prisma-env.js";

const args = process.argv.slice(2);
const isGenerateOnly = args[0] === "generate";

setupPrismaEnv({ allowPlaceholder: isGenerateOnly });

const command =
  process.platform === "win32"
    ? path.resolve("node_modules/.bin/prisma.cmd")
    : path.resolve("node_modules/.bin/prisma");

const result = spawnSync(command, args, {
  stdio: "inherit",
  env: process.env,
  shell: process.platform === "win32"
});

if (result.error) {
  console.error(result.error);
}

process.exit(result.status ?? 1);
