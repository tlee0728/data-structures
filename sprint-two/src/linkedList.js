var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.size = 0;

  // create holder value for removing the head.
  list.holder = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);

    // if size = 0, then both head and tail will point to the new node
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // otherwise have previous tail point to new tail. discard tail pointer.
      // make tail pointer now point to the new tail.
      this.tail.next = newNode;
      // this.tail = null;
      this.tail = newNode;
    }

    // increment size
    this.size += 1;
  };


  list.removeHead = function() {
    // if size = 0, return
    if (this.size === 0) {
      return;
    }
    // store current head in holder variable
    // then make head pointer point to whatever the current head (holder) was pointing to.
    // that will essentially delete the previous head since nothing will be pointing to it.
    this.holder = this.head;
    // this.head = null;
    this.head = this.holder.next;

    // increment size
    this.size -= 1;

    // return previous head's value (holder's value) 
    return this.holder.value;
  };

  list.contains = function(target) {
    // iterate through entire linked list based on size. check if value is equal to target for each loop
    var current = this.head;
    for (var i = 0; i < this.size; i++) {
      if (current.value === target) {
        return true;
      }
      // let current be equal to the next node for the next loop.
      current = current.next;
    }
    // if for loop is completed, target does not exist in linked list. return false.
    return false;
  };

  return list; 
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 for addToTail: constant time
 for removeHead: constant time
 for contains: n time.
 */
