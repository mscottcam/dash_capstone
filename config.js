'use strict';

require('dotenv').config();

exports.DATABASE_URL = process.env.DATABASE_URL || global.DATABASE_URL || 'mongodb://localhost/dash-app';

exports.TEST_DATABASE_URL = (
	process.env.TEST_DATABASE_URL || 'mongodb://localhost/dash-app');
exports.PORT = process.env.PORT || 8080;