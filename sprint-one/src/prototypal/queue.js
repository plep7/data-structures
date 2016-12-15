var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.currentSize = 0;

  return someInstance;
};

var queueMethods = {
  //
  enqueue: function(value) {
    this.currentSize++;
    this.storage[this.currentSize] = value;
  },
  dequeue: function() {
    var temp = this.storage['1'];
    delete this.storage['1'];
    var copyStorage = this.storage;
    _.each(copyStorage, function(value, key) {
      var k = parseInt(key) - 1;
      delete copyStorage[key];
      copyStorage[k] = value;
    });
    this.storage = copyStorage;
    this.currentSize--;
    return temp;
  },
  size: function() {
    return this.currentSize >= 0 ? this.currentSize : 0;
  }
};


