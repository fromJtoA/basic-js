import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  arr: [],
  
  getLength() {
    return ('( ' + this.arr.join(' )~~( ') + ' )').length;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    this.arr.push(value);
    return this;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (!((typeof position === 'number') && (0 < position < this.arr.length) &&
    (Math.round(position) === position))) {
      throw new NotImplementedError("You can't remove incorrect link!");
    }
    this.arr.splice(position - 1, 1);
    return this;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.arr.reverse();
    return this;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    return '( ' + this.arr.join(' )~~( ') + ' )';
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};
