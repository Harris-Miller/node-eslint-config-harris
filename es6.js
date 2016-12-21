'use strict';

var path = require('path');

module.exports = {
	extends: [
		path.join(__dirname, './rules/es6')
	].map(require.resolve)
};
