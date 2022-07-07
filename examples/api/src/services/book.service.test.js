const { generateManyBooks } = require('../fakes/book.fake');
const BookService = require('./books.service');

// const fakeBooks = [
//   {
//     _id: 1,
//     name: 'Book 1',
//   },
//   {
//     _id: 2,
//     name: 'Book 2',
//   },
// ];

// const mockGetAll = jest.fn();

// const MongoLibStub = {
//   // getAll: () => fakeBooks,
//   getAll: mockGetAll,
//   create: () => {},
// };
// jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(
//   () => MongoLibStub
// ));

// jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(
//   () => ({ getAll: mockGetAll, create: () => {} }),
// ));

jest.mock('../lib/mongo.lib');

describe('Test for BookService', () => {
  let service;
  beforeEach(() => {
    service = new BookService();
    jest.clearAllMocks();
  });

  describe('Tests for getBooks', () => {
    it('should return an array of books', async () => {
      // Arrange ./ Given
      const generatedBooksQty = 20;
      const fakeBooks = generateManyBooks(generatedBooksQty);
      service.mongoDB.getAll.mockResolvedValue(fakeBooks);
      // Act /. When
      const books = await service.getBooks({});
      // Assert /. Then
      expect(books.length).toBe(generatedBooksQty);
      expect(service.mongoDB.getAll).toHaveBeenCalled();
      expect(service.mongoDB.getAll).toHaveBeenCalledWith('books', {});
    });
  });
});
