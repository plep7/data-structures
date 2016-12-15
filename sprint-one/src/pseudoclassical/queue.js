var Queue = function() {
  this.storage = {};
  this.startIndex = 0;
  this.endIndex = 0;
};

Queue.prototype.enqueue = function(value) {
  this.endIndex++;
  this.storage[this.endIndex] = value;
};

Queue.prototype.dequeue = function() {
  this.startIndex++;
  var temp = this.storage[this.startIndex];
  delete this.storage[this.startIndex];
  return temp;
};

Queue.prototype.size = function() {
  return this.endIndex - this.startIndex >= 0 ? this.endIndex - this.startIndex : 0;
};



