require('../dist/index');
require('babel-register');
require('babel-polyfill');

const env = require('dotenv');
const path = require('path');
// configure dotenv here
env.config({
  path: path.join(__dirname, '/../.env'),
});

