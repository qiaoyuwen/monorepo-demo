require("@rushstack/eslint-patch/modern-module-resolution");

// Add your "extends" boilerplate here, for example:
module.exports = {
  extends: [require.resolve('@monorepo-demo/eslint/src')],
  parserOptions: { tsconfigRootDir: __dirname }
};