const sum = require('../src/sum');

it('should add 1 and 2', () => {
  expect(sum(1, 2)).toBe(3);
});