var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  var newTree = new BinarySearchTree(value);
  // compare new tree's value to current value to determine whether it will go left or right.
  // if the left/right is null, add to it. if not, recursively add down the tree in the 
  // right direction
  if (this.value < newTree.value && this.right === null) {
    this.right = newTree;
  } else if (this.value > newTree.value && this.left === null) {
    this.left = newTree;
  } else if (this.value < newTree.value && this.right !== null) {
    this.right.insert(value);
  } else if (this.value > newTree.value && this.left !== null) {
    this.left.insert(value);
  }

};

BinarySearchTree.prototype.contains = function(value) {
  var condition = false;

  // create helper function for recursion.
  var helper = function(tree) { 
    // return if current tree is null
    if (tree === null) {
      return;
    }
    if (tree.value === value) {
      condition = true;
    }
    // if current tree does not contain the value, iterate through left and right.
    helper(tree.left);
    helper(tree.right);

  };
  helper(this);
  return condition;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {

  var helper = function(tree) {
    if (tree === null) {
      return;
    }
    cb(tree.value);
    helper(tree.left);
    helper(tree.right);
  };
  helper(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(log n)
 contains: O(log n)
 depthsFistLog: O(n) 
 */
