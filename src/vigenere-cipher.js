const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(method = true) {
    if (method === true) {
      this.dir = 'direct'
    } else if (method === false) {
      this.dir = 'reverse'
    } else {
      throw new Error("Incorrect arguments!")
    }
    this.table = {
      A: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      B: "BCDEFGHIJKLMNOPQRSTUVWXYZA",
      C: "CDEFGHIJKLMNOPQRSTUVWXYZAB",
      D: "DEFGHIJKLMNOPQRSTUVWXYZABC",
      E: "EFGHIJKLMNOPQRSTUVWXYZABCD",
      F: "FGHIJKLMNOPQRSTUVWXYZABCDE",
      G: "GHIJKLMNOPQRSTUVWXYZABCDEF",
      H: "HIJKLMNOPQRSTUVWXYZABCDEFG",
      I: "IJKLMNOPQRSTUVWXYZABCDEFGH",
      J: "JKLMNOPQRSTUVWXYZABCDEFGHI",
      K: "KLMNOPQRSTUVWXYZABCDEFGHIJ",
      L: "LMNOPQRSTUVWXYZABCDEFGHIJK",
      M: "MNOPQRSTUVWXYZABCDEFGHIJKL",
      N: "NOPQRSTUVWXYZABCDEFGHIJKLM",
      O: "OPQRSTUVWXYZABCDEFGHIJKLMN",
      P: "PQRSTUVWXYZABCDEFGHIJKLMNO",
      Q: "QRSTUVWXYZABCDEFGHIJKLMNOP",
      R: "RSTUVWXYZABCDEFGHIJKLMNOPQ",
      S: "STUVWXYZABCDEFGHIJKLMNOPQR",
      T: "TUVWXYZABCDEFGHIJKLMNOPQRS",
      U: "UVWXYZABCDEFGHIJKLMNOPQRST",
      V: "VWXYZABCDEFGHIJKLMNOPQRSTU",
      W: "WXYZABCDEFGHIJKLMNOPQRSTUV",
      X: "XYZABCDEFGHIJKLMNOPQRSTUVW",
      Y: "YZABCDEFGHIJKLMNOPQRSTUVWX",
      Z: "ZABCDEFGHIJKLMNOPQRSTUVWXY"
    }
  }

  encrypt(message, key) {
    if (arguments.length < 2 || typeof arguments[0] !== 'string' || typeof arguments[1] !== 'string') throw new Error('Incorrect arguments!');
    const upperMessage = message.toUpperCase();
    const upperKey = key.toUpperCase();

    let wrongChar = 0;
    let result = "";

    for (let i = 0; i < upperMessage.length; i++) {
      const keyInd = this.table.A.indexOf(upperKey[(i - wrongChar) % upperKey.length]);

      if (this.table[upperMessage[i]]) {
        result += this.table[upperMessage[i]][keyInd];
        continue
      }
      result += upperMessage[i];
      wrongChar += 1;
    }

    if (this.dir === 'direct') {
      return result.toUpperCase();
    }
    return result.split('').reverse().join('').toUpperCase()
  }

  decrypt(encryptedMessage, key) {
    if (arguments.length < 2 || typeof arguments[0] !== 'string' || typeof arguments[1] !== 'string') throw new Error('Incorrect arguments!');
    const upperMessage = encryptedMessage.toUpperCase();
    const upperKey = key.toUpperCase();

    let wrongChar = 0;
    let result = "";

    for (let i = 0; i < upperMessage.length; i++) {
      const keyRow = this.table[upperKey[(i - wrongChar) % upperKey.length]];

      if (keyRow.indexOf(upperMessage[i]) >= 0) {
        result += this.table.A[keyRow.indexOf(upperMessage[i])];
        continue
      }
      result += upperMessage[i];
      wrongChar += 1;
    }

    if (this.dir === 'direct') {
      return result.toUpperCase();
    }
    return result.split('').reverse().join('').toUpperCase()
  }
}

module.exports = {
  VigenereCipheringMachine
};
