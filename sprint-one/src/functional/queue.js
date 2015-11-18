var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var increment = 0;
  var decrement = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[increment] = value;
    increment++;
  };

  someInstance.dequeue = function() {
    var diff = increment - decrement;
    if(diff > 0){
      var value = storage[decrement];
      delete storage[decrement];
      decrement++;
      return value;
    }
  };

  someInstance.size = function() {
    return increment - decrement;
  };

  return someInstance;
};
