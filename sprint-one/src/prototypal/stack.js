var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // push, pop, size
  var newStack = Object.create(stackMethods);
  newStack.sizeStack = 0;
  newStack.storage = {};

  return newStack;

};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.sizeStack] = value;
  this.sizeStack += 1;
};

stackMethods.pop = function() {
  if (this.sizeStack === 0) {
    return;
  }

  var toReturn = this.storage[this.sizeStack - 1];
  delete this.storage[this.sizeStack - 1];
  this.sizeStack -= 1;

  return toReturn;
};

stackMethods.size = function() {
  return this.sizeStack;
};
