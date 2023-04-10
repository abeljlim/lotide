const assertEqual = function(actual, expected) {
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
    // It's okay for eqArrays to not return true for nested arrays or arrays of objects that are identical. We will save this "deeper" problem for another day.
    if(Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if(!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
      continue;
    }
    // when this point is reached, both of what we are comparing are not arrays. So, they are either primitives or objects or functions (the latter two of which we are not handling comparison).
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  
  return true; // No inequalities found
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

assertEqual(eqArrays(["1", "2", "3", "4"], ["1", "2", "3"]), false);
assertEqual(eqArrays(["1", "2"], ["1", "2", "3"]), false);

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);