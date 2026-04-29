import { ROOT, TEMPLATES } from "./constants.js";
import { copyFileSync } from "fs";
import { join } from "path";

export const copyTemplates = (): void => {
  const files = [".prettierrc", ".prettierignore", "eslint.config.js"];

  for (const file of files) {
    copyFileSync(join(TEMPLATES, file), join(ROOT, file));
    console.log(`✓ ${file} скопирован`);
  }
};
