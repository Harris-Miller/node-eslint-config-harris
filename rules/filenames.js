'use strict';

module.exports = {
  plugins: [
    'filenames' // https://github.com/selaux/eslint-plugin-filenames
  ],
  rules: {
    'filenames/match-regex': ['error', '^[a-z\-]+$'],
    'filenames/match-exported': ['error', 'kebab'],
    'filenames/no-index': 'off'
  }
};
