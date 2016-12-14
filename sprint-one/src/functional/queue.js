var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    size++;
    storage[size] = value;
  };

  someInstance.dequeue = function() {
    var current = storage['1'];
    delete storage['1'];
    _.each(storage, function(value, key) {
      var k = parseInt(key) - 1;
      delete storage[key];
      storage[k] = value;
    });
    size--;
    return current;
  };

  someInstance.size = function() {
    return size >= 0 ? size : 0;
  };

  return someInstance;
};
