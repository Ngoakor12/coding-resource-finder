module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: "esprima",
  parserOptions: {
    jsx: true,
    requireConfigFile: false,
    ecmaVersion: "latest",
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
  },
  extends: ["prettier"],
  overrides: [],
  plugins: ["html", "react"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};
