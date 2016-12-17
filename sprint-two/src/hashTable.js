

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
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
  if (this._storage.get(index) === undefined) { 
    var bucket = [];
    bucket.push(tuple);
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
  }
};





/*
 * Complexity: What is the time complexity of the above functions?
 */


