class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // push, pop, size
  constructor() {
  	this.storage = {};
  	this.sizeStack = 0;
  }

  push(value) {
  	this.storage[this.sizeStack] = value;
  	this.sizeStack += 1;
  }

  pop() {
  	if (this.sizeStack === 0) {
  		return;
  	}

  	var toReturn = this.storage[this.sizeStack - 1];
  	delete this.storage[this.sizeStack - 1];
  	this.sizeStack -= 1;

  	return toReturn;
  }

  size() {
  	return this.sizeStack;
  }

}