var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // check if index in array is empty
  if (this._storage[index] === undefined) {
    this._storage[index] = [k, v];
  } else {
    // if not, check if k exists in tuple for identical keys.
    // if it does already exist, overwrite the value of that key and return
    for (var i = 0; i < this._storage[index].length / 2; i++) {
      if (this._storage[index][2 * i] === k) {
        this._storage[index][2 * i + 1] = v;
        this._size += 1;
        return;
      }
    }

    // if it does not already exist, create array and push previous key, value and then  
    // push current key, value onto the array after the previous key, value.
    this._storage[index].push(k);
    this._storage[index].push(v);
  }
  
  this._size += 1;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // iterate through each value to see if it equals k, 
  // then return the very next element in that array.
  var len = this._storage[index].length;
  for (var i = 0; i < len / 2; i++) {
    if (this._storage[index][2 * i] === k) {
      return this._storage[index][2 * i + 1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  // return if empty 
  if (this._size === 0) {
    return;
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var len = this._storage[index].length;
  // iterate through all elements in the array at the given index
  // if the value is found, set that value to undefined.
  for (var i = 0; i < len / 2; i++) {
    if (this._storage[index][2 * i] === k) {
      this._storage[index][2 * i] = undefined;
      this._storage[index][2 * i + 1] = undefined;
      this._size -= 1;
      break;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(1)
 retrieve: O(1)
 remove: O(1)
 */
