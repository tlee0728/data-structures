class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 	// enqueue, dequeue, size
  constructor() {
  	this.storage = {};
  	this.sizeQueue = 0;
  }

  enqueue(value) {
  	this.storage[this.sizeQueue] = value;
  	this.sizeQueue += 1;
  }

  dequeue() {
  	if (this.sizeQueue === 0) {
  		return;
  	}

  	var toReturn = this.storage[0];
  	delete this.storage[0];
  	this.sizeQueue -= 1;

  	// decrease all keys by 1
  	for (var i = 0; i < this.sizeQueue; i++) {
  		this.storage[i] = this.storage[i + 1];
  	}

  	return toReturn;
  }

  size() {
  	return this.sizeQueue;
  }

}
