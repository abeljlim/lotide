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

const itemInArray = function(item, arr) {
  for (let arrItem of arr) {
    if (item === arrItem) {
      return true;
    }
  }
  return false;
};

const without = function(source, itemsToRemove) {
  // return a new array with only those elements from source that are not present in the itemsToRemove array
  let newArray = [];
  for (let sourceElem of source) {
    // check if sourceElem is in itemsToRemove; if it is, then add it to newArray
    if (!itemInArray(sourceElem, itemsToRemove)) {
      newArray.push(sourceElem);
    }
  }

  // It's okay for without to not function correctly when using nested arrays or arrays of objects. We will save this "deeper" problem for another day.
  return newArray;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["1", "2", "3"], []), ["1", "2", "3"]);
assertArraysEqual(without(["1", "2", "3"], [1]), ["1", "2", "3"]);
assertArraysEqual(without([], [1]), []);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case

// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);