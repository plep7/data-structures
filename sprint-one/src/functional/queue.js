var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var endIndex = 0;
  var startIndex = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    endIndex++;
    storage[endIndex] = value;
  };

  someInstance.dequeue = function() {
    startIndex++;
    var current = storage[startIndex];
    delete storage[startIndex];
    return current;
  };

  someInstance.size = function() {
    return endIndex - startIndex >= 0 ? endIndex - startIndex : 0;
  };

  return someInstance;
};
