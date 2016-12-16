
// Instantiate a new graph
var Graph = function() {
  //need a storage container here
  this.nodes = []; 

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // this.node = node;
  // this.node.connections = [];
  //push this node into some array on the graph object
  this.instance = {
    value: node,
    edges: []
  };
  this.nodes.push(this.instance);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
//   if (this.node && this.instance.value === node) {
//     return true;
//   }
//   return false;  
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      return true;
        }
      }
      return false;
  };


// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // if (this.instance.value === node) {
  //   delete this.instance;
  // }
  var x = this;
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      var links = this.nodes[i].edges;
      for (var j = 0; j < links.length; j++) {
        this.removeEdge(node, links[j]);
      }
    }
    this.nodes.splice(i, 1);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      if (this.nodes[i].edges.includes(toNode)) {
        return true;
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      this.nodes[i].edges.push(toNode);
    }
    if (this.nodes[i].value === toNode) {
      this.nodes[i].edges.push(fromNode);
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.nodes.length; i++) {
    var currentNode = this.nodes[i];
    if (currentNode.value === fromNode) {
      var index = currentNode.edges.indexOf(toNode);
      currentNode.edges.splice(index, 1);
    }
    if (currentNode.value === toNode) {
      var index = currentNode.edges.indexOf(fromNode);
      currentNode.edges.splice(index, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, function(node) {
    cb(node.value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


