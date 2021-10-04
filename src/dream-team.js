import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let arr = [];
  if (Array.isArray(members)) {
  arr = members.filter(name => typeof name == 'string');
  }
  let result = [];
  arr = arr.map(name => name.trim());
  arr = arr.filter(name => name.match(/\D/));
  console.log(arr);
  arr.sort((a, b) => a.codePointAt(0) - b.codePointAt(0));
  console.log(arr);
  for ( let i of arr) {
    result.push(i[0].toUpperCase());
  }
  console.log(result);
  return (result.length) ? result.join('') : false;
}
