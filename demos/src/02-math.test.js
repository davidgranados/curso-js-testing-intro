const { multiply, divide } = require('./02-math');

test('multiply 1 * 2 to equal 1', () => {
  expect(multiply(1, 2)).toBe(2);
});

test('divide 2 / 2 to equal 1', () => {
  expect(divide(2, 2)).toBe(1);
});
