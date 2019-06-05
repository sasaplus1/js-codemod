module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      files: ['transforms/__tests__/**/*.js'],
      rules: {
        'node/no-unpublished-require': 'off'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  root: true
};
