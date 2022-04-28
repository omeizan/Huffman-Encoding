'use srrict';
const Hashable = require('./Hashable.js')
     // CLASS: KVP
     //
     // Author: NOEL OMEIZA, 7873571
     //
     // REMARKS: Stores a key-value pair
     //
     //-----------------------------------------
class KVP{

    constructor(key,value){
        
         if (arguments.length == 2) {
            if(arguments[0] instanceof Hashable && !(arguments[1]===undefined)){
                this._key = key;
                this._value = value;
            }
            else{
                throw new Error("Parameters must be of types hashable and not undefined")
            }
        } else {
            throw new Error("Parameters must be of types hashable and not undefined")
        }
    }
    get Key() {
        return this._key;
    }
    get Value() {
        return this._value;
    }
    equals(other){
        var result = false;
        if(other instanceof KVP){
            if(other.Key.equals(this._key)&& (other.Value === this._value) ){
                result = true
            }

        }
        return result;
    }
    
}

module.exports = KVP;