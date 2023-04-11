const middle = function(arr) {
  // For arrays with one or two elements, there is no middle. Return an empty array.
  if (arr.length === 1 || arr.length === 2) {
    return [];
  }

  // For arrays with odd number of elements, an array containing a single middle element should be returned.
  if (arr.length % 2 === 1) {
    let middleElement = Math.floor(arr.length / 2);
    return [arr[middleElement]];
  }

  // For arrays with an even number of elements, an array containing the two elements in the middle should be returned
  // Since this line is reached, arr.length %2 === 0
  let middleElementLeft = arr.length / 2 - 1;
  let middleElementRight = arr.length / 2;
  return [arr[middleElementLeft], arr[middleElementRight]];
};

module.exports = middle;