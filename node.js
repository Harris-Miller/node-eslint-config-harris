'use strict';

const path = require('path');

module.exports = {
  extends: [
    path.join(__dirname, './rules/base'),
    path.join(__dirname, './rules/best-practices'),
    path.join(__dirname, './rules/errors'),
    path.join(__dirname, './rules/style'),
    path.join(__dirname, './rules/variables'),
    path.join(__dirname, './rules/node'),
    path.join(__dirname, './rules/es6')
  ].map(require.resolve)
};
