import { NotImplementedError } from '../extensions/index.js';

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
 *  [true, '0', '0'],
 *  ['0', true, '0'],
 *  ['0', '0', '0']
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
//  let cloneMatrix = [].concat(matrix);
let cloneMatrix = JSON.parse(JSON.stringify(matrix));
  console.log('cloneMatrix'); 
  console.log(cloneMatrix);

  matrix.unshift(Array.from('0'.repeat(matrix[0].length)));
  matrix.push(Array.from('0'.repeat(matrix[0].length)));
  for (let i of matrix) {
    i.unshift('0');
    i.push('0');
  }
  console.log('matrix');
  console.log(matrix);

  for (let i = 1; i < matrix.length - 1; i++) {
    for (let j = 1; j < matrix[i].length - 1; j++) {
      cloneMatrix[i-1][j-1] = +matrix[i-1][j-1] + +matrix[i-1][j] + +matrix[i-1][j+1] +
      +matrix[i][j-1] + +matrix[i][j+1] + +matrix[i+1][j-1] + +matrix[i+1][j] + +matrix[i+1][j+1];
    }
  }
  return cloneMatrix;
}
