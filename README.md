# @mklimov1/cocos-config

Sets up ESLint + Prettier for Cocos Creator 3.x + TypeScript projects.

## What it does

- Copies `.prettierrc`, `.prettierignore`, `eslint.config.js` to the project root
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
npm run lint        # check assets/**/*.ts
npm run lint:fix    # autofix
npm run format      # prettier
```
