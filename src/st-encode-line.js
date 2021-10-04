import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let lstr = str + '*';
  let res = '';
  let count = 1;
  for ( let i = 0; i < lstr.length - 1; i++) {
    if (lstr[i] === lstr[i + 1]) {
      count++;
    } else {
      res += `${count}` + lstr[i];
      count = 1;
    }
  }
  res = res.replace(/1/g, '');
  return res;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
