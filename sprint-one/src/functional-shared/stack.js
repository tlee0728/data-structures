var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // push, pop, size
  var storage = {};
  var size = 0;
  stackMethods.push = function(value) {
  	storage[size] = value;
  	size += 1;
  };

  stackMethods.pop = function() {
  	if (size === 0) {
  		return;
  	}
  	var toReturn = storage[size - 1];
  	delete storage[size - 1];
  	size -= 1;

  	return toReturn;
  };

  stackMethods.size = function() {
  	return size;
  };

  return stackMethods;
};

var stackMethods = {};


