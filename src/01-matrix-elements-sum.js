/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    const arr = matrix[i];
    if (i === 0) {
      sum += arr.reduce((acc, item) => acc + item, 0);
    } else {
      sum += arr.reduce((acc, item, index) => (matrix[i - 1][index] !== 0 ? acc + item : acc), 0);
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
