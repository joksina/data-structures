

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._increment = 0
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //declare a collided variable
  //declare newSlot variable
  //if k matches collided
    //then return newSlot
  var item = this._storage.get(index);
    if(item === undefined){
      this._storage.set(index, [[k,v]]);
    } else {
      //if item at index's key /=== k
        //push duple to array in index
      for(var i = 0; i<item.length; i++){
        if (item[i][0] === k) {
          item[i][1] = v;
        }
      }
        item.push([k,v]);
        this._increment++;
        //check if increment/limit > 75%
        if( this._increment/this._limit > .75 ) {
          //if yes, double capacity
          this._limit = this._limit * 2;
          //iterate over item
          for (var i = 0; i < item.length; i++) {
            for (var j = 0; j < item[i].length; j++) {
             insert(item[i][j][0],item[i][j][1]);
            }
          }           
        }
          

    }

  
  //if at 75% capacity
    //double size
    //slice

};
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var item = this._storage.get(index);
  for (var i = 0; i < item.length; i++) {
    if (item[i][0] === k ){
      // return item[i][1];
      return item[i][1];
     }
  };
     
     return undefined;
  

  //return this._storage[index];
  this._increment--;
  //check if increment/limit < 25%
     //if yes, halve capacity
    if( this._increment/this._limit < .25 ) {
      this._limit = this._limit / 2;
      for (var i = 0; i < item.length; i++) {
        for (var j = 0; j < item[i].length; j++) {
         insert(item[i][j][0],item[i][j][1]);
        }
      }           
    }


  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var item = this._storage.get(index);
    for (var i = 0; i < item.length; i++) {
      if( item[i][0] === k) {
      // return item.splice(i, 1);
      return item.splice(i, 1);
      
     }
    };
     

  //item[1] = undefined;

  //if at 25% capacity
  //halve size
  //slice


};



/*
 * Complexity: What is the time complexity of the above functions?
 */

