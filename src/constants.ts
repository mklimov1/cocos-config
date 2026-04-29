import { dirname, join } from "path";
import { fileURLToPath } from "url";

export const ROOT = process.cwd();

export const TEMPLATES = join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "templates",
);
