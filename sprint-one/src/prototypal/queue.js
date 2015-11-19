var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var instance = Object.create(queueMethods);
instance.storage = {};
instance.increment = 0;
instance.decrement = 0;

return instance;

};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.increment] = value;
  this.increment++;

};

queueMethods.dequeue = function(){
  var item = this.storage[this.decrement];
  delete this.storage[this.decrement];
  this.decrement++;
  return item;
};

queueMethods.size = function(){
  var diff = this.increment - this.decrement;
  return diff < 0 ? 0 : diff;
};