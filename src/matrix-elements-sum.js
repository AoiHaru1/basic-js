const { NotImplementedError } = require('../extensions/index.js');

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
  let rotatedMatrix = matrix[0].map((val, index) => matrix.map(row => row[index]));
  let counter = 0;
  for (let i = 0; i < rotatedMatrix.length; i++) {
    for (let j = 0; j < rotatedMatrix[i].length; j++) {
      if (rotatedMatrix[i][j] === 0) {
        break
      } else {
        counter += rotatedMatrix[i][j]
      }
    }
  }
  return counter
}

module.exports = {
  getMatrixElementsSum
};
