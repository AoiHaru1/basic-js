const { NotImplementedError } = require('../extensions/index.js');

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
 class DepthCalculator {
  calculateDepth(arr, count = 1) {
    let copy = [...arr];
    let checker = (x) => x.some(y => Array.isArray(y))

    if (checker(copy)) {
      count += 1
      copy = copy.flat(1)
      return this.calculateDepth(copy, count)
    } 
      return count
  }
}

module.exports = {
  DepthCalculator
};
