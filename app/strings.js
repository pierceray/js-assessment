exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

  },

  wordWrap: function(str, cols) {
    var words = str.split(' ');
    var phrase;

    for (var i = 0; i < words.length; i++) {
      words[i];
    }
  },

  reverseString: function(str) {

    return str.split('').reverse().join('');
  }
};
