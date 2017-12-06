require('babel-register');
require('babel-polyfill');

const path = require('path');
const env = require('dotenv');
//configure dotenv here
env.config({
  path: path.join(__dirname, '/../.env')
})

require('../src')
