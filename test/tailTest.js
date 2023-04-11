const assert = require('chai').assert;
const tail = require('../tail');

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
describe(`#tail (where words points to ["Yo Yo", "Lighthouse", "Labs"])`, () => {
  it(`returns 3 for words.length`, () => {
    assert.deepEqual(words.length, 3);
  });
  it(`returns 2 for tail(words).length`, () => {
    assert.deepEqual(tail(words).length, 2);
  });
  it(`returns "Lighthouse" for tail(words)[0]`, () => {
    assert.deepEqual(tail(words)[0], "Lighthouse");
  });
  it(`returns "Labs for tail(words)[1]`, () => {
    assert.deepEqual(tail(words)[1], "Labs");
  });

  it(`An array ["Heya"] that has only one element should yield an empty array for its tail`, () => {
    assert.deepEqual(tail(["Heya"])[0], undefined);
  });
  it(`An empty array should yield an empty array for its tail`, () => {
    assert.deepEqual(tail([])[0], undefined);
  });
});