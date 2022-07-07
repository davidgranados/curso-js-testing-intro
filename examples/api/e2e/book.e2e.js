const request = require('supertest');
const { MongoClient } = require('mongodb');

const createApp = require('../src/app');
const { config } = require('../src/config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for books', () => {
  let app;
  let server;
  let database;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  afterEach(async () => {
    await database.dropDatabase();
  });

  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET] /api/v1/books', () => {
    it('should', async () => {
      // Arrange / Given
      const seedData = await database.collection('books').insertMany([{
        name: 'The Lord of the Rings',
        year: '1954',
        author: 'J.R.R. Tolkien',
      }, { name: 'The Hobbit', year: '1937', author: 'J.R.R. Tolkien' }]);
      // Act / When
      const response = await request(app).get('/api/v1/books');
      console.log(response.body);
      // Assert / Then
      expect(response.status).toBe(200);
      expect(response.body.length).toBe(seedData.insertedCount);
    });
  });
});
