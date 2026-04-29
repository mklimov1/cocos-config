import { ROOT, TEMPLATES } from "./constants.js";
import { join } from "path";
import { existsSync, readFileSync, writeFileSync } from "fs";

export interface PackageJson {
  type?: string;
  scripts?: Record<string, string>;
  devDependencies?: Record<string, string>;
  [key: string]: unknown;
}

export interface PackageAdditions {
  scripts: Record<string, string>;
  devDependencies: Record<string, string>;
}

export const patchPackageJson = (): void => {
  const pkgPath = join(ROOT, "package.json");
  const additionsPath = join(TEMPLATES, "package.additions.json");

  if (!existsSync(pkgPath)) {
    console.error("✗ package.json не найден. Запусти из корня Cocos-проекта.");
    process.exit(1);
  }

  const pkg: PackageJson = JSON.parse(readFileSync(pkgPath, "utf-8"));
  const additions: PackageAdditions = JSON.parse(
    readFileSync(additionsPath, "utf-8"),
  );

  pkg.type = "module";
  pkg.scripts = { ...(pkg.scripts ?? {}), ...additions.scripts };
  pkg.devDependencies = {
    ...(pkg.devDependencies ?? {}),
    ...additions.devDependencies,
  };

  writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n", "utf-8");
  console.log("✓ package.json обновлён");
};
