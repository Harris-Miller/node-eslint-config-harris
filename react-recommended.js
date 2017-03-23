'use strict';

var path = require('path');

module.exports = {
  extends: [
    path.join(__dirname, './rules/base'),
    path.join(__dirname, './rules/best-practices'),
    path.join(__dirname, './rules/errors'),
    path.join(__dirname, './rules/style'),
    path.join(__dirname, './rules/variables'),
    path.join(__dirname, './environments/browser'),
    path.join(__dirname, './rules/node'),
    path.join(__dirname, './rules/es6'),
    path.join(__dirname, './rules/import'),
    path.join(__dirname, './rules/react')
  ].map(require.resolve)
};
