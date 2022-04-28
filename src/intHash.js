'use strict';
const Hashable = require('./Hashable.js')
     // CLASS: intHash
     //
     // Author: NOEL OMEIZA, 7873571
     //
     // REMARKS: Hashable class for integers
     //
     //-----------------------------------------

class intHash extends Hashable{
  
    constructor(val){
        super(val);
        
    }

    hashVal(){
      return this._val;
    }
    equals(other){
      
      return this.Val === other.Val?true:false;
    }
    get hash(){
      var x= this.hashVal()
      return x;
    }
}

module.exports = intHash;