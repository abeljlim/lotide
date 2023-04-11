const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
// const eqObjects = require('./eqObjects'); // not adding this utility function or any others without separate test files because it results in a lot of assertion code running

module.exports = {
  head,
  tail,
  middle,
  eqArrays,
  assertArraysEqual,
  assertEqual,
  // eqObjects
};