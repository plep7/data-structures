var Stack = function() {
  this.storage = {};
  this.currentSize = 0;
};

Stack.prototype.push = function(value) {
  this.currentSize++;
  this.storage[this.currentSize] = value;
};

Stack.prototype.pop = function() {
  var temp = this.storage[this.currentSize];
  delete this.storage[this.currentSize];
  this.currentSize--;
  return temp;
};

Stack.prototype.size = function() {
  return this.currentSize >= 0 ? this.currentSize : 0;
};


