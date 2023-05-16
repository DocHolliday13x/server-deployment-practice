'use strict';

const { app } = require('../src/server.js');
const supertest = require('supertest');
// In the future, mockRequest will just be Request. This is acceptable for today only.
const mockRequest = supertest(app);

describe('Testing our Express Server', () => {
  test('handles the root path', async () => {
    const response = await mockRequest.get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Proof of Life');
  });
  test('handles success route', async () => {
    const response = await mockRequest.get('/success');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Success');
  });
  test('handles error route', async () => {
    const response = await mockRequest.get('/bad');
    expect(response.status).toBe(500);
    expect(response.text).toBe('We Have an Error!');
  });
  test('handles bad route', async () => {
    const response = await mockRequest.get('/no-route');
    expect(response.status).toBe(404);
    expect(response.text).toBe('Not Found');
  });
});


