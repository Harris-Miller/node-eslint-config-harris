'use strict';

var path = require('path');

module.exports = {
  extends: [
    path.join(__dirname, './rules/typescript')
  ].map(require.resolve)
};
