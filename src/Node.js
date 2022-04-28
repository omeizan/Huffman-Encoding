"use strict";
     // CLASS: Node
     //
     // Author: NOEL OMEIZA, 7873571
     //
     // REMARKS: What is the purpose of this class? 
     //
     //-----------------------------------------
class Node {
    
    constructor(data,next) {
        if (arguments.length == 1) {
            this._data = data;
            this._next = null;
        } else if (arguments.length >= 2) {
           this._data = data;
            this._next = next;
        } else {
            this._data = null;
            this._next = null;
        }
    }    

    // write getters.

    get data() {
        return this._data;
    }

    get next() {
        return this._next;
    }
    
    setNext(node){
        this._next = node;
    }

}

module.exports = Node;
