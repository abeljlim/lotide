// TEST/ASSERTION FUNCTIONS
const eqArrays = function (arr1, arr2) {
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

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} is equal to ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} is not equal to ${expected}`);
  }
};

// ACTUAL FUNCTION
const middle = function (arr) {
  // For arrays with one or two elements, there is no middle. Return an empty array.
  if (arr.length === 1 || arr.length === 2) {
    return [];
  }

  // For arrays with odd number of elements, an array containing a single middle element should be returned.
  if (arr.length %2 === 1) {
    let middleElement = Math.floor(arr.length/2)
    return [arr[middleElement]];
  }

  // For arrays with an even number of elements, an array containing the two elements in the middle should be returned
  // Since this line is reached, arr.length %2 === 0
  let middleElement_left = arr.length/2 - 1;
  let middleElement_right = arr.length/2;
  return [arr[middleElement_left], arr[middleElement_right]];
}

// TEST CODE
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);