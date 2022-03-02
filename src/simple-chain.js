const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },

  addLink(value) {
    if (typeof value !== 'string') {
      value = value + ''
    }
    this.chain.push(`( ${value} )`)
    return chainMaker
  },

  removeLink(position) {
    if (typeof position !== 'number' || position <= 0 || position > this.chain.length - 1) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1)
    return chainMaker
  },

  reverseChain() {
    this.chain = this.chain.reverse()
    return chainMaker
  },

  finishChain() {
    const result = this.chain;
    this.chain = [];
    return result.join('~~');
  }
};



module.exports = {
  chainMaker
};
