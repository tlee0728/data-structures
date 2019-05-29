var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // push, pop, size
  this.sizeStack = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.sizeStack] = value;
  this.sizeStack += 1;
};

Stack.prototype.pop = function() {
  if (this.sizeStack === 0) {
    return;
  }

  var toReturn = this.storage[this.sizeStack - 1];
  delete this.storage[this.sizeStack - 1];
  this.sizeStack -= 1;

  return toReturn;
};

Stack.prototype.size = function() {
  return this.sizeStack;
};
