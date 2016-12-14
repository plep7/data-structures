var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.currentSize = 0;

  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  //
  push: function(value) {
    this.currentSize++;
    this.storage[this.currentSize] = value;
  },
  pop: function() {
    var temp = this.storage[this.currentSize];
    delete this.storage[this.currentSize];
    this.currentSize--;
    return temp;
  },
  size: function() {
    return this.currentSize >= 0 ? this.currentSize : 0;
  }
};

