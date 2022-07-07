const request = require('supertest');

const createApp = require('../src/app');

describe('Test for hello endpoint', () => {
  let app;
  let server;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET]', () => {
    it('should return a message', async () => {
      const response = await request(app).get('/');
      expect(response.status).toBe(200);
      expect(response.text).toBe('Hello World!');
    });
  });
});
