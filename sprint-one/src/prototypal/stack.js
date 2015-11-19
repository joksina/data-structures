var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var instance = Object.create(stackMethods);
instance.storage = {};
instance.stackSize = 0;

return instance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  // body...
  this.storage[this.stackSize] = value;
  this.stackSize++;
};

stackMethods.pop = function(){
  var item = this.storage[this.stackSize - 1];
  delete this.storage[this.stackSize - 1];
  this.stackSize--;
  return item;
};

stackMethods.size = function(){
  return this.stackSize < 0 ? 0 : this.stackSize;
};