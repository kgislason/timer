const assert = require('chai').assert;
const sortNum = require('../js/sortNum');

describe("#sortNum", () => {
  it('Should return sorted array [1, 4, 10]', () => {
    const argsTest = [10, 4, 1];
    const actual = sortNum(argsTest);
    const expected = [1, 4, 10];
    assert.deepEqual(actual, expected);
  });
});