var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; 
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  // use helper function to recursively go through all the child nodes.
  // create check variable to see if value has been found. change check to true if found.
  var check = false;

  var helper = function(currentTree) {
    if (check) {
      return;
    }
    if (currentTree.value === target) {
      check = true;
      return;
    }

    // check all children trees.
    for (var i = 0; i < currentTree.children.length; i++) {
      helper(currentTree.children[i]);
    }

  };
  helper(this);
  return check;
};



/*
 * Complexity: What is the time complexity of the above functions?
 for addChild: constant time
 for contains: long n time
 */
