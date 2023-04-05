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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} is equal to ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} is not equal to ${expected}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // should PASS
assertArraysEqual([1, 2, 3], [3, 2, 1]); // should FAIL

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // should FAIL

assertArraysEqual(["1", "2", "3", "4"], ["1", "2", "3"]); // should FAIL
assertArraysEqual(["1", "2"], ["1", "2", "3"]); // should FAIL
