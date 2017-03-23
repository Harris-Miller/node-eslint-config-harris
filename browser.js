'use strict';

var path = require('path');

module.exports = {
  env: {
    browser: true,
    jquery: true
  }
  extends: [
    path.join(__dirname, './environments/browser')
  ].map(require.resolve)
};
