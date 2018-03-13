exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var bitIndex = bit - 1;  // 0 based
    return 1 & (num >> bitIndex);
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var binaryArray = [];

    // Loop 8 times
    for (var i = 7; i > -1; i--) {
      binaryArray.push(num & (1 << i) ? 1 : 0);
    }

    return binaryArray.join('');
  },

  multiply: function(a, b) {

    // var bSplit = b.toString().split('.');
    // var product = 1;
    // for (var i = 0; i < bSplit.length; i++) {
    //     product *= Math.pow(a, parseInt(bSplit[i], 10));
    // }

    // return product;
    return a / (1 / b);
  }
};
