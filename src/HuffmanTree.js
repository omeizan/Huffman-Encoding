'use strict';
const TreeNode = require('./TreeNode.js');
     // CLASS: Huffman Tree
     //
     // Author: NOEL OMEIZA, 7873571
     //
     // REMARKS: Implementation of a huffman tree data structure
     //
     //-----------------------------------------
class HuffmanTree{
    #root
    #weight
    constructor(data,weight){
        var root = new TreeNode(data,weight)
        this.#root = root
        this.#weight = root.getWeight
        
    }
    get getRoot(){
        return this.#root
    }
    get getWeight(){
        return this.#weight
    }
    //------------------------------------------------------
     // traverse
     //
     // PURPOSE:    Returns the path(as a string) of a char
     //             from the root(0 for every left move and 1 for every right move)
     // PARAMETERS:
     //     c : The character to be searched for
     // Returns: "Not found" if c is not in the tree, the path to c otherwise
     //-----------------------------------------------------
    traverse(c){
        var result = "Not Found"
    
        var node = this.#root
        if(this.contains(this.#root,c)){
            result = ""
                while(this.contains(node,c)){
                    
                        if(this.contains(node.getLeft,c)){
                            node = node.getLeft
                            result+='0'
                        }
                        else if(this.contains(node.getRight,c)){
                            node = node.getRight
                            result+='1'
                        }else{
                            return result;
                        }
                    
                }
            
        }
        return result;


    }
     //------------------------------------------------------
     // contains
     //
     // PURPOSE:    determines if the character c is contained
     //             in any node of the subtree rooted at node
     // PARAMETERS:
     //        node : the root the subtree to be searched
     //        c    : the character to be searched for
     // Returns: describe the return value
     //-----------------------------------------------------
    contains(node,c){
        if(node == null){
            return false
        }
    
        if(node.getChar != null){
            
            if(node.getChar == c[0]){
                
                 return true
            }
            else{return false}
        }

        if(this.contains(node.getLeft,c) || this.contains(node.getRight,c)){
            return  true;
        }
       return false
        
    
    }
     //------------------------------------------------------
     // setify
     //
     // PURPOSE:   Changes the tree to an array containing only 
    //             the ascii calue of characters stored in the leaf nodes
     // PARAMETERS:
     //     node : The root of the subtree we wish to setify
     //     arr : The array that will contain the result
     // Returns: an array containing the tree as a set
     //-----------------------------------------------------
    setify(node,arr){
        
        if(node == null){
            return arr
        }else{
            if(node.getChar!=null){
            arr.push(node.getChar.charCodeAt(0))
            }
        }
        this.setify(node.getLeft,arr)
        this.setify(node.getRight,arr)
        return arr

    }
    smallest(node){
        var arr = []
        var set = this.setify(this.#root,arr)

        set.sort(function(a,b){return a - b
        })
        return set[0]
    }
    combine(other){
        if(other instanceof HuffmanTree){
            var result = new HuffmanTree(null,0)
            var root = result.getRoot
            var i = this.compareTo(other)
            if (i == -1){
                  root.setLeft(this.#root)
                  root.setRight(other.getRoot)
                  result.#weight+=this.getWeight
                  result.#weight+=other.getWeight

            }
            else{
                 root.setRight(this.#root)
                  root.setLeft(other.getRoot)
                  result.#weight+=this.getWeight
                  result.#weight+=other.getWeight
            }
              return result;  
        }else{
            throw new Error("Invalid Parameter Type")
        }
        

    }
    //------------------------------------------------------
     // combine
     //
     // PURPOSE:    Joins two huffman trees, depending on their
     //             size(smaller to the left and bigger to the right)
     //             new tree is rooted at an empty node
     // PARAMETERS:
     //     other : The tree to be combined with
     // Returns: A new tree contianing 'this' and 'other'
     //-----------------------------------------------------
    compareTo(other){
        if(other instanceof HuffmanTree){
            var result = 0
            if(this.getWeight != other.getWeight){
                result = this.getWeight>other.getWeight?1:-1
            }
            else{
                var a = this.smallest(this.#root);
                var b = other.smallest(other.getRoot);
                if(a != b){
                    result = a>b?1:-1
                }
            }

        }else{
            throw new Error("Invalid Parameter Type")
        }
        return result
    }
    
}
module.exports = HuffmanTree;