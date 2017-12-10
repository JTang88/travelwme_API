require('babel-register');
require('babel-polyfill');

const path = require('path');
const env = require('dotenv');
// configure dotenv here
env.config({
  path: path.join(__dirname, '/../.env'),
});

require(path.join(__dirname, '/../graphql-server/src/'));
require(path.join(__dirname, '/../socket-server/src'));

