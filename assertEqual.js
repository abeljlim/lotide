// FUNCTION IMPLEMENTATION
const aFunction = function() {console.log("aFunction was called")};
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
  aFunction();
};

const variableLimitedToFile = "variableLimitedToFile string";
console.log(aFunction());
console.log("variableLimitedToFile: ",variableLimitedToFile);

module.exports = assertEqual;