var BinarySearchTree = function(value) {

var nodes = Object.create(binaryMethods);
nodes.left = undefined;
nodes.right = undefined;
nodes.value = value;

return nodes;

};

var binaryMethods = {};


binaryMethods.insert = function(val){ //O(log n)
  var newTree = BinarySearchTree(val);
  var innerFunc = function(tree) {
    if( tree.left === undefined && val < tree.value ) {
     tree.left = newTree;
    } else if ( tree.right === undefined && val > tree.value ) {
      tree.right = newTree;
     } else if ( val < tree.value ) {
      innerFunc(tree.left);
    } else { 
       innerFunc(tree.right);
    }
  };
 innerFunc(this);
  
};

binaryMethods.contains = function(target){ //O(log n)
  

  if(this.value === target){
    return true;
  }
  if(target < this.value && this.left){
    return this.left.contains(target);
  }
  if(target > this.value && this.right){
    return this.right.contains(target);
  }

  return false;

};

binaryMethods.depthFirstLog = function(cb){ //O(n)
  var innerFunc = function(tree) {
     if(tree.value) {
      cb(tree.value);
    }
   if(tree.left) {
      innerFunc(tree.left);
    }
   if(tree.right) {

    innerFunc(tree.right);
  }
};
  
  innerFunc(this);

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
