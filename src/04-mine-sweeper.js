/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  return matrix.map((arr, index) => arr.map((el, i) => {
    if (el) return 1;
    let bombs = 0;
    // top section
    if (index - 1 >= 0 && matrix[index - 1][i]) bombs++;
    // bottom section
    if (index + 1 < matrix.length && matrix[index + 1][i]) bombs++;
    // left section
    if (i - 1 >= 0 && matrix[index][i - 1]) bombs++;
    // right section
    if (i + 1 < arr.length && matrix[index][i + 1]) bombs++;
    // top left section
    if (index - 1 >= 0 && i - 1 >= 0 && matrix[index - 1][i - 1]) bombs++;
    // top right section
    if (index - 1 >= 0 && i + 1 < arr.length && matrix[index - 1][i + 1]) bombs++;
    // bottom left sectopn
    if (index + 1 < matrix.length && i - 1 >= 0 && matrix[index + 1][i - 1]) bombs++;
    // bottom right sectopn
    if (index + 1 < matrix.length && i + 1 < arr.length && matrix[index + 1][i + 1]) bombs++;
    return bombs;
  }));
}

module.exports = minesweeper;
