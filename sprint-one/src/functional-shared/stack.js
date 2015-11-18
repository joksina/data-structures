var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var store = {
    storage: {}
  };
  _.extend(store, stackMethods);

  return store;
};
  var stackMethods = { 

  stackSize: 0,
  push: function(value) {
    this.storage[this.stackSize] = value;
    this.stackSize++;
  },

  pop: function() {
    // body...
    var value = this.storage[this.stackSize - 1];
    delete this.storage[this.stackSize - 1];
    this.stackSize--;
    return value;
  },
  size : function() {
    return this.stackSize < 0 ? 0 : this.stackSize;
  }
};



