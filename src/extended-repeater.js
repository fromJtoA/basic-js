import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  if (!options.hasOwnProperty('repeatTimes')) {
    options.repeatTimes = 1;
  }
  if (!options.hasOwnProperty('separator')) {
    options.separator = '+';
  }
  if (!options.hasOwnProperty('addition')) {
    options.addition = '';
  }
  if (!options.hasOwnProperty('additionRepeatTimes')) {
    options.additionRepeatTimes = 1;
  }
  if (!options.hasOwnProperty('additionSeparator')) {
    options.additionSeparator = '|';
  }
  let allAdd = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes);
  allAdd = allAdd.slice(0, allAdd.length - options.additionSeparator.length);
  let allStr = (str + allAdd + options.separator).repeat(options.repeatTimes);
  allStr = allStr.slice(0,allStr.length - options.separator.length);
  return allStr;
}
