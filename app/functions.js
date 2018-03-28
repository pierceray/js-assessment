exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(str2){
      return str + ', ' + str2;
    };
  },

  makeClosures: function(arr, fn) {
    var fnArray = [];

    var foo = function(n) {
      return function (){ return fn(n); };
    }

    for (var i = 0; i < arr.length; i++) {
      fnArray.push(foo(arr[i]));
    }

    return fnArray;
  },

  partial: function(fn, str1, str2) {
    return function(str3){
      return fn(str1,str2, str3);
    }
  },

  useArguments: function() {
    var total = 0;

    for (var i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }

    return total;
  },

  callIt: function(fn) {
    var argArray = [...arguments].slice(1, arguments.length);

    return fn.apply(null, argArray);
  },

  partialUsingArguments: function(fn) {
    var argArray = [...arguments].slice(1, arguments.length);

    return function(){
      var allArgsArray = argArray.concat([...arguments])
      return fn.apply(this, allArgsArray);
    }
  },

  curryIt: function(fn) {

  }
};
