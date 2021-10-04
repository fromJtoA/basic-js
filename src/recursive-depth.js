import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    let maxCount = 0;
    for (let i = 0; i < arr.length; i++) {
      let count = 0;
      if (Array.isArray(arr[i])) {
        count += 1;
        DepthCalculator.calculateDepth(arr[i]);
      }
      if (count > maxCount) {
        maxCount = count;
      }
    }
    return maxCount;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}
