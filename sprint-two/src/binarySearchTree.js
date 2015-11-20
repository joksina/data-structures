var BinarySearchTree = function(value) {

var nodes = Object.create(binaryMethods);
nodes.left = undefined;
nodes.right = undefined;
nodes.value = value;

return nodes;

};

var binaryMethods = {};


binaryMethods.search = function(tree, target){
  //if no origin set, set to this.nodes

  //declare currentNode equal to origin
  //declare subroutine
    //if currentNode equals target
      //return currentNode
    //else if node.children exist
      //if origin.value > target
        //set currentNode to currentNode.left
      //else if currentNode < target
        //set currentNode to currentNode.right
      //else return currentNode
  //call subroutine on origin
};

binaryMethods.insert = function(value){
  // var adds = BinarySearchTree(value);
  // var tree = function(trees){
  //   if( trees.left === undefined && value < trees.value) {
  //     trees.left = adds;
  //   } else 
  // }

  //call search on entire tree to find location for insterted value

var adds = BinarySearchTree(value);

};

binaryMethods.contains = function(value){

};

binaryMethods.depthFirstLog = function(){

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
