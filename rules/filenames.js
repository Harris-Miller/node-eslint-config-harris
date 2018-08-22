'use strict';

module.exports = {
  plugins: [
    'filenames' // https://github.com/selaux/eslint-plugin-filenames
  ],
  rules: {
    'filenames/match-regex': ['error', '^[a-z\-\.]+$'], // kebab-case, multi .'s allowed, eg file.config.js
    'filenames/match-exported': 'off',
    'filenames/no-index': 'off'
  }
};
