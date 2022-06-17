module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'standard',
    'eslint-config-prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    indent: ['warn', 2],
    'react/no-unescaped-entities': 'off',
    'react/jsx-indent': [2, 2, { indentLogicalExpressions: true }],
    "react/jsx-indent-props": [2, 2],
    'no-unused-vars': 'warn',
    'react/prop-types': 0, // disable prop-types
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
