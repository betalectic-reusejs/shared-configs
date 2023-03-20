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
  rules: {},
  ignorePatterns: ["node_modules/"],
};
