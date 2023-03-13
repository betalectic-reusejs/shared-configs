module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
    "jest/globals": true,
  },
  extends: ["eslint:recommended"],
  overrides: [],
  plugins: ["standard", "jest"],
  rules: {
    indent: ["error", "tab"],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "always"],
  },
  ignorePatterns: ["node_modules/"],
};
