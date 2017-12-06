import request from 'supertest';
import app from '../src/app'
//const app = require('../src/app.js') 

test('It should response the GET method', () => {
  return request(app).get("/").then(response => {
      expect(response.statusCode).toBe(200)
  })
});


