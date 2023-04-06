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

// Function implementation
const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  
  for (let i = 0; i < sentence.length; i++) { // use the index of the for loop to get the indices of each letter
    let letter = sentence[i];
    if (letter === ' ') { // don't count spaces
      continue;
    }

    // Update or add to array corresponding to the letter with the new index
    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }
  return results;
};

// Tests
const sentencePositionsResult1 = letterPositions('hello');
assertArraysEqual(sentencePositionsResult1['e'], [1]);
assertArraysEqual(sentencePositionsResult1['l'], [2, 3]);

const sentencePositionsResult2 = letterPositions('lighthouse in the house');
assertArraysEqual(sentencePositionsResult2['l'], [0]);
assertArraysEqual(sentencePositionsResult2['i'], [1, 11]);