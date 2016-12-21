'use strict';

var path = require('path');

module.exports = {
	extends: [
		path.join(__dirname, './rules/best-practices'),
		path.join(__dirname, './rules/errors'),
		path.join(__dirname, './rules/style'),
		path.join(__dirname, './rules/variables')
	].map(require.resolve)
};
