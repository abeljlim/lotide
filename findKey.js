const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Finds key by the return value of the callback function that takes in the value of the key-value pair
const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  // returns undefined if no key is found
};

const testObj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
assertEqual(findKey(testObj, x => x.stars === 2), "noma");
assertEqual(findKey(testObj, x => x.stars === 3), "Akaleri");
assertEqual(findKey(testObj, x => Object.keys(x).length === 1), "Blue Hill");
assertEqual(findKey(testObj, x => x.stars < 2), "Blue Hill");

const testObj2 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2, numRaters: 3 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
assertEqual(findKey(testObj2, x => Object.keys(x).length === 2), "noma");