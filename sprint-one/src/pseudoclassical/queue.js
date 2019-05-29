var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // enqueue, dequeue, size
  this.sizeQueue = 0;
  this.storage = {};

};

Queue.prototype.enqueue = function(value) {
  this.storage[this.sizeQueue] = value;
  this.sizeQueue += 1;
};

Queue.prototype.dequeue = function() {
  if (this.sizeQueue === 0) {
    return;
  }

  var toReturn = this.storage[0];
  delete this.storage[0];
  this.sizeQueue -= 1;
  //shift all keys down by 1
  for (var i = 0; i < this.sizeQueue; i++) {
    this.storage[i] = this.storage[i + 1];
  }

  return toReturn;
};

Queue.prototype.size = function() {
  return this.sizeQueue;
};

