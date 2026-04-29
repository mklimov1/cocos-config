import { patchPackageJson } from "./patchPackageJson.js";
import { patchTsconfig } from "./patchTsconfig.js";
import { copyTemplates } from "./copyTemplates.js";

console.log("🥥 cocos-config\n");

patchPackageJson();
patchTsconfig();
copyTemplates();

console.log("✅ Готово! Запусти npm install для установки зависимостей.");
