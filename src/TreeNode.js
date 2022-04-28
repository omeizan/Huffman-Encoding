     // CLASS: TreeNode
     //
     // Author: NOEL OMEIZA, 7873571
     //
     // REMARKS: What is the purpose of this class? 
     //
     //-----------------------------------------
class TreeNode{
    #char
    #weight
    #left
    #right
    constructor(c,w){
        this.#char = c
        this.#weight = w
        this.#left = null
        this.#right = null
    }

   
    get getRight(){
        return this.#right
    }
    get getLeft(){
        return this.#left
    }
    get getChar(){
        return this.#char
    }
    get getWeight(){
        return this.#weight
    }
    setLeft(newNode){
        this.#left = newNode 
    }
    setRight(newNode){
        this.#right = newNode 
    }
}
'use strict';
module.exports = TreeNode;