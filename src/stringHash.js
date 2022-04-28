'use strict';
     // CLASS: stringHash
     //
     // Author: NOEL OMEIZA, 7873571
     //
     // REMARKS: Hashable class for strings 
     //
     //-----------------------------------------
const Hashable = require('./Hashable.js')
class stringHash extends Hashable{
    constructor(val){
        super(val);
        
    }

    hashVal(){
      const p = 13// Prime number of choice
      const n = this.Val.length
       var sum = 0;
      for(var i = 0;i<n;i++){
          sum += this.Val.charCodeAt(i)*Math.pow(p,n-i+1)
      }
      return sum;

    }
    equals(other){
      
      return this.Val === other.Val?true:false;
    }
    get hash(){
        var x= this.hashVal()
        return x;
      }
}

module.exports = stringHash;