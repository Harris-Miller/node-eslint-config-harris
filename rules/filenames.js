'use strict';

module.exports = {
  plugins: [
    'filenames' // https://github.com/selaux/eslint-plugin-filenames
  ],
  rules: {
    'filenames/match-regex': ['error', '^[a-z\-]+$'], // kebab-case
    'filenames/match-exported': 'off',
    'filenames/no-index': 'off'
  }
};
