// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

const head = function(arr) {
  if (typeof arr === 'string') {
    return undefined;
  }
  return arr[0];
};

module.exports = head;