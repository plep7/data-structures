var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.endIndex = 0;
  someInstance.startIndex = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.endIndex++;
  this.storage[this.endIndex] = value;
};

queueMethods.dequeue = function() {
  this.startIndex++;
  var current = this.storage[this.startIndex];
  delete this.storage[this.startIndex];
  return current;
};

queueMethods.size = function() {
  return this.endIndex - this.startIndex >= 0 ? this.endIndex - this.startIndex : 0;
};