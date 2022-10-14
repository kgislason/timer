const assert = require('chai').assert;
const filterNum = require('../js/filterNum');

describe("#filterNum", () => {
  it('Should return [1, 2, 3] for ["1", "2", "3"]', () => {
    const argsTest = ["1", "2", "3"];
    const actual = filterNum(argsTest);
    const expected = [1, 2, 3];
    assert.deepEqual(actual, expected);
  });
});