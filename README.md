# @mklimov1/cocos-config

Sets up Biome (linter + formatter) for Cocos Creator 3.x + TypeScript projects.

## What it does

- Copies `biome.json` to the project root
- Merges `compilerOptions` into the existing `tsconfig.json`
- Adds scripts and devDependencies to `package.json`

## Usage

Run in the root of your Cocos Creator project:

```bash
npx @mklimov1/cocos-config
```

Then install dependencies:

```bash
npm install
```

## Scripts

```bash
npm run lint        # lint assets/**/*.ts
npm run lint:fix    # lint with autofix
npm run format      # format
npm run check       # lint + format + organize imports, with autofix
```
