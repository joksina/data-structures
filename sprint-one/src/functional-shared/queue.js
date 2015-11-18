var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {}
  };
  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  increment : 0,
  decrement : 0,

  enqueue : function(value) {
    this.storage[this.increment] = value;
    this.increment++;
  },

  dequeue : function() {
    var diff = this.increment - this.decrement;
    if(diff > 0){
      var value = this.storage[this.decrement];
      delete this.storage[this.decrement];
      this.decrement++;
      return value;
    }
  },

  size : function() {
    return this.increment - this.decrement;
  }

};




