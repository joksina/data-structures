var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if(typeof item ==='string' && !this.contains(item)){
    this._storage[item] = item;

  } else if (typeof item ==='number' && !this.contains(item)){
    this._storage[item] = item;
  } else if (typeof item ==='object' && !this.contains(item)){ 
    this._storage[item] = item;
  
  }
};

setPrototype.contains = function(item) {
  return _.contains(this._storage, item);
//   return _.reduce(this._storage, function(found, current){
//     if(found){
//       return true;
//     } else {
//       if(Array.isArray(current) || typeof current === "object") {
//         //_.each(current, function(val) {
//           // body...
//           return current === item;
//         })
        
//       }
//     }
//   }, false)
 };

setPrototype.remove = function(item) {
  delete  this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
