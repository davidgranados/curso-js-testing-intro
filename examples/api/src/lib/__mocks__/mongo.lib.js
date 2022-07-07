const { generateManyBooks } = require('../../fakes/book.fake');

class MongoLibStub {
  static booksQty = 10;

  constructor() {
    this.getAll = jest.fn().mockResolvedValue(generateManyBooks(MongoLibStub.booksQty));
  }
}

module.exports = MongoLibStub;
