var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);  // fix me

  return newTree;
};

var treeMethods = {};

// time complexity O(c)
treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

// time complexity O(c^n)
treeMethods.contains = function(target) {

  var tree = this;
  var isFound = false;
  function recurseTree(currentTree) {

    if (currentTree.value === target) {
      isFound = true;
    }
    if (currentTree.children.length > 0) {
      for (var i = 0; i < currentTree.children.length; i++) {
        recurseTree(currentTree.children[i]);
      }
    }
  }
  recurseTree(tree);
  return isFound;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
