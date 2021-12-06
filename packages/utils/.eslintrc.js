require("@rushstack/eslint-patch/modern-module-resolution");

// Add your "extends" boilerplate here, for example:
module.exports = {
  extends: [require.resolve('@monorepo-demo/eslint/dist')],
  parserOptions: { tsconfigRootDir: __dirname }
};