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

const takeUntil = function(array, callback) {
  let newArray = [];
  for(let element of array) {
    if(callback(element)) {
      break;
    }
    newArray.push(element);
  }
  return newArray;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);


console.log('---');

const data3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const results3 = takeUntil(data3, x => x > 6);
assertArraysEqual(results3, [1, 2, 3, 4, 5, 6]);

console.log('---');

const data4 = [2, 4, 6, 8, 10, 12, 14, 16, 17, 18, 20, 22, 24];
const results4 = takeUntil(data4, x => x%2 === 1);
assertArraysEqual(results4, [2, 4, 6, 8, 10, 12, 14, 16]);