const Person = require('../../examples/person');

// AAA
// Arrange ./ Given
// Act /. When
// Assert /. Then

describe('Test for Person', () => {
  let person;
  beforeEach(() => {
    person = new Person('John', 70, 1.8);
  });

  it('should return down', () => {
    // Arrange ./ Given
    person.weight = 45;
    // Act /. When
    const imc = person.calcIMC();
    // Assert /. Then
    expect(imc).toBe('down');
  });

  it('should return normal', () => {
    person.weight = 60;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
