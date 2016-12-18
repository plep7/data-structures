var BinarySearchTree = function(value) {
  var treeValues = [];
  treeValues.push(value);
  var binaryTree = {
    left: undefined,
    right: undefined,
    value: value
  };
  binaryTree.depths = [];

  binaryTree.insert = function(val) {
    //O(log(n)
    var counter = 1;
    // checking for depth
    var parentNode = binaryTree;
    var max, min = 1, ratio;
    function recurseTree(node) {
      if (val < node.value) {
        if (!node.left) {
          node.left = {
            left: undefined,
            right: undefined,
            value: val
          };
          treeValues.push(val);
          binaryTree.depths.push(counter);
        } else {
          counter++;
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
          binaryTree.depths.push(counter);
        } else {
          counter++;
          recurseTree(node.right);
        }
      }

    }
    recurseTree(parentNode);
    max = Math.max(...binaryTree.depths);
    min = calculateMinDepths(binaryTree.depths);
    ratio = max / min;
    console.log(ratio);
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


binaryTree.breadthFirstLog = function(cb) {
  var currentLevel = [];
  currentLevel.push(this);
  var children = [];
  function recurseTree() {
    //populate our children array

    for (var i = 0; i < currentLevel.length; i++) {
      cb(currentLevel[i]);
      if (currentLevel[i].left) {
        children.push(currentLevel[i].left);
      }
      if (currentLevel[i].right) {
        children.push(currentLevel[i].right);
      }
    }
    currentLevel = children;
    children = [];
    if (currentLevel.length > 0) {
      recurseTree();
    }
    

    //set the children to the current node
    //clear the children array
  }
  recurseTree();
};
    return binaryTree;
};
function calculateMinDepths(array){
  var counts = {};
  var results = [];
  _.each(array, function(val){
    counts[val] = (counts[val] || 0) + 1;
  });
  for (var key in counts){
    if (Math.pow(2, parseInt(key) + 1) > counts[parseInt(key) + 1]) {
      console.log(key);
      results.push(parseInt(key));
    }
  }
  return Math.min(...results);
}





/*
 * Complexity: What is the time complexity of the above functions?
 */