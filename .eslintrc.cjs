module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  plugins: ['react-refresh', 'eslint-plugin-prettier', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'eslint-config-prettier',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  rules: {
    'react-refresh/only-export-components': ['off', { allowConstantExport: true }],
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': 'error',
    'import/order': [
      'warn',
      {
        groups: ['type', 'object', 'builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
