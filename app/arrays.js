exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }

    return -1;
  },

  sum: function(arr) {
    var sumTotal = 0;

    for (var i = 0; i < arr.length; i++) {
      sumTotal += arr[i];
    }

    return sumTotal;
  },

  remove: function(arr, item) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== item) {
        newArray.push(arr[i]);
      }
    }
    return newArray;
  },

  removeWithoutCopy: function(arr, item) {
    for (var i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  append: function(arr, item) {
    var newArray = arr;
    newArray.push(item);
    return newArray;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    for(var i = 0; i < arr.length; i++) {
      if (arr[i] === item){
        count++;
      }
    }

    return count;
  },

  duplicates: function(arr) {
    var seen = {};
    var dupes = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      seen[arr[i]] = seen[arr[i]] ? seen[arr[i]] + 1 : 1;
    }

    for (var item in seen) {
      if (seen.hasOwnProperty(item) && seen[item] > 1) {
        // parseInt was added because the keys were considered strings
        dupes.push(parseInt(item, 10));
      }
    }

    return dupes;
  },

  square: function(arr) {
    var sqArray = [];

    for (var i = 0; i < arr.length; i++) {
      sqArray.push(arr[i] * arr[i]);
    }

    return sqArray;
  },

  findAllOccurrences: function(arr, target) {
    var indexArray = [];
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] === target) {
        indexArray.push(i);
      }
    }
    return indexArray;
  }
};
