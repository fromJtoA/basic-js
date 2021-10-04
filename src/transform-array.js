import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new NotImplementedError('\'arr\' parameter must be an instance of the Array!');
  }
  let localArr = [].concat(arr);
  for (let i = 0; i < localArr.length; i++) {
    if ((localArr[i] === '--double-next') && (i + 1 < localArr.length)) {
      localArr.splice(i, 1, localArr[i + 1]);
    }
    if ((localArr[i] === '--discard-next') && (i + 1 < localArr.length)) {
      localArr.splice(i, 2);
    }
    if ((localArr[i] === '--double-prev') && (i - 1 > -1)) {
      localArr.splice(i, 1, localArr[i - 1]);
    }
    if ((localArr[i] === '--discard-prev') && (i - 1 > -1)) {
      localArr.splice(i - 1, 2);
    }
  }
  localArr = localArr.filter(n => !(/--double-next/.test(n) || /--discard-next/.test(n) ||
   /--double-prev/.test(n) || /--discard-prev/.test(n)));
  return localArr;
}

