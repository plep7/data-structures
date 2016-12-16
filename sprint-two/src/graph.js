
// // Instantiate a new graph
var Graph = function() {
// need a storage container here
  this.nodes = {}; 
};

// // Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // O(1) - constant time to add nodes regardless on size
  this.nodes[node] = {};
};

// // Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
// O(1) - constant time to check if node contains value
  if (this.nodes[node]) {
    return true;
  }
  return false;
};


// // Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
// O(n) - linear time to iterate through all nodes
  delete this.nodes[node];
  for (var key in this.nodes) {
    if (this.nodes[key][node]) {
      delete this.nodes[key][node];
    }
  }
};

// // Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
// O(1) - constant time to check if nodes have edges
  if (this.nodes[fromNode][toNode]) {
    return true;
  }
  return false;
  
};

// // Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
// O(1) - constant time to add edges between nodes
  this.nodes[fromNode][toNode] = 1;
  this.nodes[toNode][fromNode] = 1;
};

// // Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // O(1) - constant time to remove edges between nodes
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];
};

// // Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
// O(n) - linear time to iterate through all nodes and perform callback
  for (var node in this.nodes) {
    cb(node);  
  }
};

// /*
//  * Complexity: What is the time complexity of the above functions?
//  */


