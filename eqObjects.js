const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  // if the arrays' lengths differ, then return false
  if (arr1.length !== arr2.length) {
    return false;
  }

  // iterate through arr1 (and arr2, which has an equal length) and check for inequality of each element of arr1 to arr2's corresponding element, and return false if at least one inequality is found
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  // It's okay for eqArrays to not return true for nested arrays or arrays of objects that are identical. We will save this "deeper" problem for another day.
  
  return true; // No inequalities found
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  
  // Eliminate the possibility of one object having more keys than the other
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  // Check for matching key-value pairs in object1 and object2 (this checks for matching keys as well, as object2 would return undefined for a key if it doesn't have the same set of keys)
  for(let key in object1) {
    let object1Val = object1[key];
    let object2Val = object2[key];
    if(Array.isArray(object1Val) && Array.isArray(object2Val)) { // if both are an array, check for equality of the arrays
      if(!eqArrays(object1Val, object2Val)) {
        return false;
      }
      // if they're equal, then they match, so move to checking the next key-value pair
    } else if(object1Val !== object2Val) {
      return false;
    }
  }
  return true;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false