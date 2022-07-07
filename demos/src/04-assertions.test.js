test('test obj', () => {
  const data = { name: 'david' };
  data.lastName = 'granados';
  expect(data).toEqual({ name: 'david', lastName: 'granados' });
});

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
});

test('bolleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('string', () => {
  expect('david granados').toMatch(/david/);
});

test('list / array', () => {
  const numbers = [1, 2, 3, 4];
  expect(numbers).toContain(2);
});
