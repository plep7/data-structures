var BinarySearchTree = function(value) {
  var treeValues = [];
  treeValues.push(value);
  var binaryTree = {
    left: undefined,
    right: undefined,
    value: value
  };

  binaryTree.insert = function(val) {
    //O(log(n)
    var parentNode = binaryTree;
    function recurseTree(node) {
      if (val < node.value) {
        if (!node.left) {
          node.left = {
            left: undefined,
            right: undefined,
            value: val
          };
          treeValues.push(val);
        } else {
          recurseTree(node.left);
        }
      } else {
        if (!node.right) {
          node.right = {
            left: undefined,
            right: undefined,
            value: val
          };
          treeValues.push(val);
        } else {
          recurseTree(node.right);
        }
      }
    }
    recurseTree(parentNode);
  };

  //O(n) constant since we stored all values in an array
  binaryTree.contains = function(val) {
    if (treeValues.includes(val)){
      return true;
    }
    return false;
  };

  //O(log(n)) 
  binaryTree.depthFirstLog = function(cb) {

    cb(binaryTree.value);
    function recurseTree(node) { 
      if (node.left) {
        cb(node.left.value);
        recurseTree(node.left);
      }
      if (node.right) {
        cb(node.right.value);
        recurseTree(node.right);
      }
    }
    recurseTree(binaryTree);
  };
  return binaryTree;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */