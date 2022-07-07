const { faker } = require('@faker-js/faker');

const generateOneBook = () => ({
  _id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
});

const generateManyBooks = (size) => {
  const limit = size || faker.random.number({ min: 1, max: 10 });
  const books = [];
  for (let i = 0; i < limit; i += 1) {
    books.push(generateOneBook());
  }
  return [...books];
};

module.exports = { generateOneBook, generateManyBooks };
