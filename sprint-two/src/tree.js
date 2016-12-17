var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  newTree.parent = null;
  _.extend(newTree, treeMethods);  // fix me

  return newTree;
};

var tree = Tree(5);
// tree.addChild(7);
// tree.children[0].children[0].addChild(8);
var treeMethods = {};

// time complexity O(c)
treeMethods.addChild = function(value) {
  var childNode = Tree(value);
  childNode.parent = this.value;
  this.children.push(childNode);
};

treeMethods.removeFromParent = function(target) {
  if (!this.contains(target)){
    console.log("Value does not exist in tree");
  }
  var tree = this;
  var removedTree;
  function recurseTree(currentTree) {

    for (var i = 0; i < currentTree.children.length; i++) {
      if (currentTree.children[i].value === target) {
        removedTree = currentTree.children[i].value;
        currentTree.children[i].parent = null;
        currentTree.children.splice(i, 1);
      } else {
        recurseTree(currentTree.children[i]);
      }
    }
  }
  recurseTree(tree);
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
