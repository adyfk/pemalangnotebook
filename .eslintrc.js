module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "strict": 0,
    "linebreak-style": 0,
    "react/jsx-filename-extension":0,
    "max-len":0,
    "no-restricted-globals":0,
    "react/jsx-props-no-spreading":0,
    "react/prop-types":0,
    "react/destructuring-assignment":0,
    "import/prefer-default-export":0,
  },
};
