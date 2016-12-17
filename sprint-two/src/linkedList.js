var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
    if (list.head === null) {
      var node = Node(value);
      list.tail = node;
      list.head = list.tail;
    } else {
      node = Node(value);
      node.next = list.head;
      list.head.prev = node;
      list.head = node;
    }    
  };

  list.addToTail = function(value) {
    //time complexity: O(c)
    if (list.head === null) {
      var node = Node(value);
      list.tail = node;
      list.head = list.tail;    //{value: 1, next: null} list.head = {value: 1, next: null} list.tail = {value: 1, next: null}
    } else {
      node = Node(value);
      list.tail.next = node;
      node.prev = list.tail;
      list.tail = node;
    }
  };

  list.removeTail = function () {
    var temp = list.tail;
    list.tail = list.tail.prev;
    if (list.tail) {
      list.tail.next = null;  
    }
    return temp.value;
  };

  list.removeHead = function() {
    //time complexity O(c)
    var temp = list.head;
    list.head = list.head.next;
    if (list.head) {
      list.head.prev = null;
    }
    return temp.value;
  };

  list.contains = function(target) {
    //time complexity: O(n)
    var currentNode = list.head;
    while (currentNode) {
      if (target === currentNode.value) {
        return true;
      } else {
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
  node.prev = null;

  return node;
};
var linkedList = LinkedList();
linkedList.addToTail(5);
linkedList.addToTail(6);
linkedList.addToTail(7);
linkedList.addToTail(8);
linkedList.addToTail(9);
// console.log(linkedList);

/*
 * Complexity: What is the time complexity of the above functions?
 */
