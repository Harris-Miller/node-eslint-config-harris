'use strict';

const path = require('path');

module.exports = {
  extends: [
    path.join(__dirname, './rules/import')
  ].map(require.resolve)
};
