const sum = require('./sum');

test('adds 1 and 2 to get 3', () => {
    expect(sum(1, 2)).toBe(3);
    // .toBe uses Object.is to test exact equality
});
