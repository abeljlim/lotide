const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(strToCountLettersFrom) {
  let results = {};
  for (let letter of strToCountLettersFrom) {
    if (letter === ' ') { // don't count spaces
      continue;
    }
    if (results[letter]) {
      results[letter]++;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

const countLettersResult1 = countLetters('LHL');
assertEqual(countLettersResult1['L'], 2);
assertEqual(countLettersResult1['H'], 1);
assertEqual(countLettersResult1['J'], undefined);

const countLettersResult2 = countLetters('lighthouse labs');
assertEqual(countLettersResult2['l'], 2);
assertEqual(countLettersResult2['a'], 1);
assertEqual(countLettersResult2['k'], undefined);