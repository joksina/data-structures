var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.stackSize = 0;
};

Stack.prototype.push = function(value) {
  // body...
  this.storage[this.stackSize] = value
  this.stackSize++;
};

Stack.prototype.pop = function() {
  // body...
  var item = this.storage[this.stackSize-1];
  delete this.storage[this.stackSize-1];
  this.stackSize--;
  return item;
};

Stack.prototype.size = function() {
  // body...
  return this.stackSize < 0 ? 0 : this.stackSize;
};
