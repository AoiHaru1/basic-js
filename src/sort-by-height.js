const { NotImplementedError } = require('../extensions/index.js');

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

 function sortByHeight(arr) {
  const indexOfOnes = [];
  arr.forEach((x, i) => x === -1 ? indexOfOnes.push(i): null)
  let sortedCopyArr = arr.filter(x => x !== -1).sort((a, b) => a-b);
  for (let i = 0; i < indexOfOnes.length; i++) {
   const part1 = sortedCopyArr.slice(0, indexOfOnes[i ])
   const part2 = sortedCopyArr.slice(indexOfOnes[i])
   part1.push(-1)
   sortedCopyArr =[...part1, ...part2] 
  }
  return sortedCopyArr
 }

module.exports = {
  sortByHeight
};
