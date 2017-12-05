require('babel-register');
require('babel-polyfill');

const env = require('dotenv');
//configure dotenv here
env.config({
  path: '../.env'
})

require('../src')