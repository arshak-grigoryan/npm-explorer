module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  plugins: [
    'eslint-plugin-prettier',
    'prettier'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'eslint-config-prettier',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['off', { allowConstantExport: true }],
    "@typescript-eslint/no-explicit-any": "off",
    "prettier/prettier": "error"
  },
};
