/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 * [0, 1, 2, 3, 4, 5, 6, 7, 8]
 */
function findIndex(array, value) {
  function divide(val) {
    return Math.floor(val / 2);
  }
  function getIndex(from, to) {
    const middle = from + divide(to - from);
    const arrVal = array[middle];
    if (arrVal === value) return middle;
    if (arrVal > value) return getIndex(from, middle - 1);
    if (arrVal < value) return getIndex(middle + 1, to);
    return null;
  }

  return getIndex(0, array.length - 1);
}

module.exports = findIndex;
