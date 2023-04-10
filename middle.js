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

module.exports = middle;