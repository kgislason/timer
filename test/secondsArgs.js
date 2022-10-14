const assert = require('chai').assert;
const args = require('../js/secondsArgs');

describe("#processArgv", () => {
  it('Should return empty array until arguments are entered into the console', () => {
    const actual = args();
    const expected = [];
    assert.deepEqual(actual, expected);
  });
});