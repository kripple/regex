const rules = {
  '@typescript-eslint/no-unused-vars': [
    'warn',
    { argsIgnorePattern: '^_', ignoreRestSiblings: true },
  ],
  'react/jsx-sort-props': 'warn',
};

module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['**/*.test.*'],
      rules: {
        ...rules,
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
  plugins: ['@typescript-eslint/eslint-plugin', 'react', 'react-refresh'],
  root: true,
  rules,
  settings: {
    react: {
      version: 'detect',
    },
  },
};
