'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL || global.DATABASE_URL || 'mongodb://dev:password@ds123371.mlab.com:23371/dash-app';
exports.TEST_DATABASE_URL = (
	process.env.TEST_DATABASE_URL || 'mongodb://localhost/dash-app');
exports.PORT = process.env.PORT || 8080;
