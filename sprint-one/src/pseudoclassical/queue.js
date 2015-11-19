var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage={};
  this.increment = 0;
  this.decrement = 0;
};

Queue.prototype.enqueue = function(value) {
  // body...
  this.storage[this.increment] = value;
  this.increment++;

};

Queue.prototype.dequeue = function() {
  // body...
  var item = this.storage[this.decrement];
  delete this.storage[this.decrement];
  this.decrement++;
  return item;
};

Queue.prototype.size = function() {
  // body...
  return this.increment - this.decrement < 0 ? 0 : this.increment-this.decrement;
};
