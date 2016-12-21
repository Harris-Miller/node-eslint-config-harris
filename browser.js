'use strict';

var path = require('path');

module.exports = {
	extends: [
		path.join(__dirname, './environments/browser')
	].map(require.resolve)
};
