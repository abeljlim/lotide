// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  if (typeof arr === 'string') {
    return undefined;
  }
  return arr[0];
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["The only element"]), "The only element");
assertEqual(head([]), undefined);
assertEqual(head("Not an array...or am I? Aren't strings static arrays? Nope, they're array-likes"), undefined);
assertEqual(head(17), undefined);