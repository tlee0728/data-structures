var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  var size = 0;

  // enqueue, dequeue, size
  queueMethods.enqueue = function(value) {
  	storage[size] = value;
  	size += 1;
  };

  queueMethods.dequeue = function() {
  	if (size === 0) {
  		return;
  	}
  	var toReturn = storage[0];
  	delete storage[0];
  	size -= 1;
  	// create for loop to shift all the key values down by 1
  	for (var i = 0; i < size; i++) {
  		storage[i] = storage[i + 1];
  	}

  	return toReturn;
  };

  queueMethods.size = function() {
  	return size;
  };

  return queueMethods;
};

var queueMethods = {};
