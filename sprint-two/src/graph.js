

// Instantiate a new graph
var Graph = function() {
  this.graph = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // if node already exists in graph, return
  if (this.contains(node)) {
    return;
  }

  var newNode = {};
  newNode.value = node;

  // create object of pointers. whenever an edge is made, add the node object onto the pointer 
  newNode.pointers = {};
  this.graph[node] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (keys in this.graph) {
    if (this.graph[keys].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // iterate through all of the pointers and remove current node from their pointers object.
  var keys = Object.keys(this.graph[node].pointers);
  for (var i = 0; i < keys.length; i++) {
    delete this.graph[keys[i]].pointers[node];
  }

  delete this.graph[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // if the fromNode has toNode in its pointers
  // AND if the toNode has fromNode in its receivers
  if (this.graph[fromNode].pointers[toNode] !== undefined) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // make fromNode have toNode in its pointers 
  this.graph[fromNode].pointers[toNode] = this.graph[toNode];
  // make toNode have fromNode in its receivers
  this.graph[toNode].pointers[fromNode] = this.graph[fromNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.graph[fromNode].pointers[toNode];
  delete this.graph[toNode].pointers[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (keys in this.graph) {
    cb(keys);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


