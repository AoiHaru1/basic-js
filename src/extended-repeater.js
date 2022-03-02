const { NotImplementedError } = require('../extensions/index.js');

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

 function repeater(str, options) {
  let ans = '';
  if (options.separator === undefined) {
    options.separator = '+'
  }
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1
  }
  if (options.additionRepeatTimes > 0 && options.additionSeparator === undefined) {
    options.additionSeparator ='|'
  }
  if (options.addition && options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1
  }
  for (let i = 0; i < options.repeatTimes; i++) {
    ans += str
    if (String(options.addition)) {
      for (let j = 0; j < options.additionRepeatTimes; j++) {
        ans += options.addition
        if (j !== options.additionRepeatTimes - 1) {
          ans += options.additionSeparator
        }
      }
    }
    if (i !== options.repeatTimes - 1) {
      ans+= options.separator
    }
  }
  return ans
}

module.exports = {
  repeater
};
