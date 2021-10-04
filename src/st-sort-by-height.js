import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let numbs = arr.filter( numb => numb != -1);
  console.log(numbs);
  let count = 0;
  numbs.sort((a,b) => a - b);
  console.log(numbs);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != -1) {
      arr.splice(i, 1, numbs[count]);
      count++;
    }
  }
  return arr;
}
