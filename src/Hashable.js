'use strict';
     // CLASS: Hashable
     //
     // Author: NOEL OMEIZA, 7873571
     //
     // REMARKS: Abstract class specifying
     //         'hashable' behaviour must have
     //          hashVal function
     //
     //-----------------------------------------
class Hashable{
   
   constructor(val){
       if(this.constructor === Hashable){
             throw new Error("Hashable class is abstract");
       }else{
        this._val = val;
       }
         
   }
    hashVal(){
        throw new Error("Implement hashval!")
    }
    equals(other){
        throw new Error("Implement equals!")
    }
    get Val(){
        return this._val;
    }
    

}

module.exports = Hashable;



