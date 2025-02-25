import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  let count = 0;
  for (let i of arr1) {
    if (arr2.includes(i)) {
      count++;
      arr2.splice(arr2.indexOf(i), 1);
    }
  console.log(arr1);
  console.log(arr2);
  }
  return count;
}

