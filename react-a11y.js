'use strict';

var path = require('path');

module.exports = {
  extends: [
    path.join(__dirname, './rules/react-a11y')
  ].map(require.resolve)
};
