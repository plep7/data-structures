var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    if (list.head === null) {
      var node = Node(value);
      list.tail = node;
      list.head = list.tail;    //{value: 1, next: null} list.head = {value: 1, next: null} list.tail = {value: 1, next: null}
    }
    else {
      node = Node(value);
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    var temp = list.head;
    list.head = list.head.next;
    return temp.value;

  };

  list.contains = function(target) {
    var currentNode = list.head;
    while(currentNode) {
      if (target === currentNode.value) {
        return true;
      }
      else {
        currentNode = currentNode.next;
      }
    }
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
 */
