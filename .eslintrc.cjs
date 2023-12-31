/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:prettier/recommended",
        "prettier",
    ],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
    },
    env: {
        es6: true,
        browser: true,
        es2021: true,
    },
    plugins: ["@typescript-eslint", "prettier", "simple-import-sort"],
    rules: {
        "prettier/prettier": "error",

        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
    },
    ignorePatterns: ["node_modules"],
}
