import request from 'supertest';
import app from '../src/app';

test('It should response the GET method', () => {
  return request(app).get('/api/test').then(response => {
    expect(response.statusCode).toBe(200);
  });
});

