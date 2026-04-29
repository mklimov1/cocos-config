import { ROOT } from "./constants.js";
import { join } from "path";
import { existsSync, readFileSync, writeFileSync } from "fs";

export interface TsConfig {
  compilerOptions?: Record<string, unknown>;
  [key: string]: unknown;
}

export const patchTsconfig = (): void => {
  const tsconfigPath = join(ROOT, "tsconfig.json");

  const base: TsConfig = existsSync(tsconfigPath)
    ? JSON.parse(
        readFileSync(tsconfigPath, "utf-8")
          .replace(/\/\*[\s\S]*?\*\//g, "")
          .replace(/\/\/.*/g, ""),
      )
    : {};

  const merged: TsConfig = {
    ...base,
    compilerOptions: {
      ...(base.compilerOptions ?? {}),
      strict: false,
      lib: ["es2020", "dom"],
      allowImportingTsExtensions: true,
    },
  };

  writeFileSync(tsconfigPath, JSON.stringify(merged, null, 2) + "\n", "utf-8");
  console.log("✓ tsconfig.json обновлён");
};
