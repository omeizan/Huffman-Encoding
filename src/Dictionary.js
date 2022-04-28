
const Hashable = require('./Hashable.js')
const KVP = require('./KVP.js')
const Node = require('./Node.js')
'use strict';

     // CLASS: Dictionary
     //
     // Author: NOEL OMEIZA, 7873571
     //
     // REMARKS: Implementation of a dictionary
     //          data structure using linked list
     //          and seperate chaining 
     //
     //-----------------------------------------

class Dictionary{
    #size
    #table
    #current_size
    constructor(size){
        this.#size = size;
        this.#table = new Array(size)
        this.#current_size = 0;
        var i = 0;

        
    }
     //------------------------------------------------------
     // put
     //
     // PURPOSE:    insert a Key-value pair into the dictionary
     //             if it does not already exist in th dictionary
     // PARAMETERS:
     //     k : Hashable Key
     //     v : Associated value
     //
     //-----------------------------------------------------
    put(k,v){
        if(k instanceof Hashable){
            var kvp = new KVP(k,v)
        let el = new Node(kvp);
        var index = kvp.Key.hash;
        index = index%this.#size

        if(!this.duplicate(kvp)){

            if(this.#table[index] == null){
                this.#table[index] = el;
                this.#current_size++;
            }else{
                var node = this.#table[index];
                while(node.next!=null){
                    node = node.next;
                }
                node.setNext(el)
                this.#current_size++;
            }
        }
        }else{
            throw new Error("Invalid parameter: Should be of type 'Hashable'")
        }
        
    }
     //------------------------------------------------------
     // duplicate
     //
     // PURPOSE:    Check if the key value pair(k,v) already exists in the
     //             dictionary
     // PARAMETERS:
     //            kvp : Key-value pair to be searched for
     // Returns: describe the return value
     //-----------------------------------------------------
    duplicate(kvp){
        var double = false;
        var index = kvp.Key.hashVal();
        index = index%this.#size



        if(this.#table[index] != null){
            
        
            var node = this.#table[index];
            while(node!=null ){
                if(node.data.equals(kvp)){
                    double = true;
                }
                node = node.next;
            }
           
        }
        return double
    }
    //------------------------------------------------------
     // get
     //
     // PURPOSE:  gets the value associated with the key k in the
     //           dictionary
     // PARAMETERS:
     //    k : Key to be searched for
     // Returns: the value associated with key k or undefined
     //          if no such key exists in the dictionary
     //-----------------------------------------------------
    get(k){
        var result = undefined
        if(k instanceof Hashable){
            var found = false;

            var index = k.hashVal();
            index = index%this.#size



             if(this.#table[index] != null){
            
        
                var node = this.#table[index];
                while(node!=null &!found){
                    if(node.data.Key.equals(k)){
                        found = true;
                        result = node.data.Value
                    }
                    node = node.next;
                }
           
            }
        }else{
            throw new Error("Invalid parameter: Should be of type 'Hashable'")
        }
        return result 
    }
     //------------------------------------------------------
     // contains
     //
     // PURPOSE:  determines wether key k exists in the dictionary
     // PARAMETERS:
     //     k: The key to be searched for
     // Returns: true if k exists in the dictionary, false otherwise
     //-----------------------------------------------------
    
    contains(k){
        
        if(k instanceof Hashable){
        var found = false;
        var index = k.hashVal();
        index = index%this.#size



        if(this.#table[index] != null){
            
        
            var node = this.#table[index];
            while(node!=null &!found){
                if(node.data.Key.equals(k)){
                    found = true;
                }
                node = node.next;
            }
           
        }
        return found
        }else{
            throw new Error("Invalid parameter: Should be of type 'Hashable'")
        }
           
    }
    isEmpty(){
        return this.#current_size == 0?true:false;
    }
    get Table(){
        return this.#table
    }
    
}


module.exports = Dictionary;