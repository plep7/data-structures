

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.counter = 0;
};

HashTable.prototype.insert = function(k, v) {
//O(1) constant if buckets are evenly distributed and sufficiently small
//O(n) if a bucket approaches n
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  // if our current storage doesnt have a bucket, make a bucket and push the tuple
  // else retrieve that bucket
    // check if the bucket has the passed in key and overwrite it
    // else add the tuple to the bucket;

  if (this.counter / this._limit >= 0.75) {
    this.counter = 0;
    this._limit = this._limit * 2;
    var oldHashTable = this._storage;
    this._storage = LimitedArray(this._limit);
    var that = this;
    oldHashTable.each(function(bucket, index, storage) {
      if (bucket) {
        for (var j = 0; j < bucket.length; j++) {
          that.insert(bucket[j][0], bucket[j][1]);
        }
      }
    });
  }
  
  if (this._storage.get(index) === undefined) { 
    var bucket = [];
    bucket.push(tuple);
    this.counter++;
  } else {
    var bucket = this._storage.get(index);
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i].includes(k)) {
        bucket[i] = tuple;
      } else {
        bucket.push(tuple);
      }
    }
  }
  this._storage.set(index, bucket);
};

//O(1) constant if buckets are evenly distributed and sufficiently small
//O(n) if a bucket approaches n
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

//O(1) constant if buckets are evenly distributed and sufficiently small
//O(n) if a bucket approaches n
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
    if (bucket.length === 0) {
      this.counter--;
    }
  }

  if ((this.counter / this._limit <= 0.25) && this._limit > 8) {
    this.counter = 0;
    this._limit = this._limit / 2;
    var oldHashTable = this._storage;
    this._storage = LimitedArray(this._limit);
    var that = this;
    oldHashTable.each(function(bucket, index, storage) {
      if (bucket) {
        for (var j = 0; j < bucket.length; j++) {
          that.insert(bucket[j][0], bucket[j][1]);
        }
      }
    });
  }
};







/*
 * Complexity: What is the time complexity of the above functions?
 */


