var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // create variable that stores the key/index of the next value.
  var nextIndex = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[nextIndex] = value;
    nextIndex += 1;
  };

  someInstance.pop = function() {
    if (nextIndex === 0) {
      return;
    }
    var toReturn = storage[nextIndex - 1];
    delete storage[nextIndex - 1];
    nextIndex -= 1;
    return toReturn;
  };

  someInstance.size = function() {
    return nextIndex;
  };

  return someInstance;
};
