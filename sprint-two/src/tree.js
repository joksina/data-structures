var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // your code here 
  var child = Tree(value);
  child.value = value;
  this.children.push(child);  // fix me
};

treeMethods.contains = function(target) {
  var result = false;
  var subroutine = function(node){
    if (node.value === target) {
    console.log(node.value ===target);
      result = true;
    } 

    if(node.children) {
      _.each(node.children, function(value){
        subroutine(value);
      });
    }
  };

  subroutine(this);
  return result;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
