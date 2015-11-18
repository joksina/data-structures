var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var store = {
    storage: {}
  };
  _.extend(store, stackMethods);

  return store;
};

var queueMethods = {};


