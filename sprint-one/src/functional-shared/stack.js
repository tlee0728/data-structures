var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // push, pop, size
  var newStack = {};
  newStack.storage = {};
  newStack.sizeQueue = 0;

  _.extend(newStack, stackMethods);

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.sizeQueue] = value;
  this.sizeQueue += 1;
};

stackMethods.pop = function() {
  if (this.sizeQueue === 0) {
    return;
  }
  var toReturn = this.storage[this.sizeQueue - 1];
  delete this.storage[this.sizeQueue - 1];
  this.sizeQueue -= 1;

  return toReturn;
};

stackMethods.size = function() {
  return this.sizeQueue;
};


