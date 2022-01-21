module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended', 'airbnb'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', 'better-styled-components', 'eslint-plugin-import-helpers'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'import/no-extraneous-dependencies': 'off'
  }
}
