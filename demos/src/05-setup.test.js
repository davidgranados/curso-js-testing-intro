beforeEach(() => {
  console.log('beforeEach Global');
});
describe('Set', () => {
  beforeAll(() => {
    console.log('beforeAll Set');
  });
  afterAll(() => {
    console.log('afterAll');
  });
  beforeEach(() => {
    console.log('beforeEach Set');
  });
  afterEach(() => {
    console.log('afterEach Set');
  });
  it('case 1', () => {
    expect(1 + 1).toBe(2);
  });
  it('case 2', () => {
    expect(1 + 2).toBe(3);
  });

  describe('Set 2', () => {
    beforeEach(() => {
      console.log('beforeEach Set 2');
    });
    it('case 3', () => {
      expect(1 + 4).toBe(5);
    });
    it('case 4', () => {
      expect(1 + 3).toBe(4);
    });
  });
});
