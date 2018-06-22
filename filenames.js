'use strict';

var path = require('path');

module.exports = {
  extends: [
    path.join(__dirname, './rules/filenames')
  ].map(require.resolve)
};
