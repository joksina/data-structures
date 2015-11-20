

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var item = this._storage.get(index);
  if(item === undefined){
    this._storage.set(index, [k,v]);
  } else {
    for(var i = 0; i<item.length; i++){
      if (item[i][0] === k) {
        item[i][1] = v;
      }
    }
    //item.push([k,v]);
  }

  //if at 75% capacity
    //double size
    //slice

};
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var item = this._storage.get(index);
  return item[1];

  //return this._storage[index];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var item = this._storage.get(index);
  // for (var i = 0; i < item.length; i++) {
  //   if( item[i][0]
  // };
  item[1] = undefined;
//if at 25% capacity
  //halve size
  //slice


};



/*
 * Complexity: What is the time complexity of the above functions?
 */

