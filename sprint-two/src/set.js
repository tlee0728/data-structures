var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // object or array
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  // iterate through each element in the storage
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  // check variable to indicate if item has been found to remove
  // after finding the variable, shift the index of every value after down by 1.
  var check = false;
  for (var i = 0; i < this._storage.length; i++) {
    if (i === this._storage.length - 1) {
      this._storage.pop();
    } else if (check) {
      this._storage[i] = this._storage[i + 1];
    }
    
    // if item is found, change check variable to true for future iteration to shift future indices.
    if (this._storage[i] === item) {
      check = true;
      this._storage[i] = this._storage[i + 1];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 add: O(1)
 contains: O(n)
 remove O(n)
 */
