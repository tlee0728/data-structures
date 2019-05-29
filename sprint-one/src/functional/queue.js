var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size += 1;
  };

  someInstance.dequeue = function() {
    if (size === 0) {
      return;
    }
    var toReturn = storage[0];
    delete storage[0];
    size -= 1;
    // shift all the keys down by 1 using for loop
    for (var i = 0; i < size; i++) {
      storage[i] = storage[i + 1];
    }

    return toReturn;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
