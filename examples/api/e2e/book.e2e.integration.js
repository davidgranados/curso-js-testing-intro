const request = require('supertest');

const MongoLib = require('../src/lib/mongo.lib');
const createApp = require('../src/app');

jest.mock('../src/lib/mongo.lib');

describe('Test for books', () => {
  let app;
  let server;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET] /api/v1/books', () => {
    it('should', async () => {
      // Arrange / Given
      // Act / When
      const response = await request(app).get('/api/v1/books');
      // Assert / Then
      expect(response.status).toBe(200);
      expect(response.body.length).toBe(MongoLib.booksQty);
    });
  });
});
