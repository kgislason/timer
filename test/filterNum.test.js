const assert = require('chai').assert;
const filterArr = require('../js/filterNum');

describe("#filterArr", () => {
  it('Should return [1, 2, 3] for ["1", "2", "3"]', () => {
    const argsTest = ["1", "2", "3"];
    const actual = filterArr(argsTest);
    const expected = [1, 2, 3];
    assert.deepEqual(actual, expected);
  });
});