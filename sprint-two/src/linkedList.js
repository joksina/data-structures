var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var result = Node(value);
    if(list.head === null){
      list.head = result;
      list.tail = result;
    } else {
      list.head.next = result;
      list.tail = result;
    }
  };

  list.removeHead = function() {
    var result = list.head.value;
    list.head = list.head.next;
    return result;
  };

  list.contains = function(target) {
    var current = list.head;
    while ( current ){
      if(current.value === target) {
        return true;
      } else {
        current = current.next;
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
 O(1)
 O(1)
 O(n)
 */
