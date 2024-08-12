module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'airbnb',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: [
      'react',
      'react-hooks',
    ],
    rules: {
      // Customize your rules here
      'react/react-in-jsx-scope': 'off', // Next.js/React 17+ doesn't require React to be in scope
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the react version
      },
    },
  };
  