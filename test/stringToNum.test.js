const assert = require('chai').assert;
const stringToNum = require('../js/stringToNum');

describe("#stringToNum", () => {
  it('Should turn array of strings into array of numbers', () => {
    const argsTest = ["1", "2", "3"];
    const actual = stringToNum(argsTest);
    const expected = [1, 2, 3];
    assert.deepEqual(actual, expected);
  });

  it('Should return array of NaN for strings that are not numbers', () => {
    const argsTest = ["test", "test2", "test3"];
    const actual = stringToNum(argsTest);
    const expected = [NaN, NaN, NaN];
    assert.deepEqual(actual, expected);
  });
});