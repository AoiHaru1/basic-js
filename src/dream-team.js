const { NotImplementedError } = require('../extensions/index.js');

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
 function createDreamTeam(members) {
  if (!Array.isArray(arguments[0])) return false
  const sorted = members
                .filter(x => typeof x === 'string')
                .map(x => {
                  const newWord = x.replace(/\s/g, '');
                  return newWord[0].toUpperCase();
                })
                .sort();

  return sorted.reduce((a, c) => a += c[0], '')
}

module.exports = {
  createDreamTeam
};
