
'use strict';

const Dictionary = require('./Dictionary.js')
const intHash= require('./intHash.js')
const stringHash= require('./stringHash.js')
const fs = require('fs')
const KVP = require('./KVP.js')
const HuffmanTree  = require('./HuffmanTree.js')
     // CLASS: Huffman Encder
     //
     // Author: NOEL OMEIZA, 7873571
     //
     // REMARKS: Implement Huffman Encoding
     //          on the string obtined from a text file
     //
     //-----------------------------------------

class HuffmanEncoder{
    #filename
    #maxSize
    #outName
    constructor(str){
        //initiialize file
        this.#filename = str
        this.#maxSize = 64
        this.#outName = str +".huff"
    }
         //------------------------------------------------------
     // encode
     //
     // PURPOSE:    Reads the file passed to the constructor
     //             performs huffman encoding on its contents
     //             and writes the results to [filename].huff
     //-----------------------------------------------------
    encode(){
        const buffer = fs.readFileSync(this.#filename)
        const str = buffer.toString()
        
    const size = str.length
    const dict = new Dictionary(this.#maxSize)
    const uniqueStr = [...new Set(str)]
    var mySet = new Set()
        for (var char in uniqueStr){
            var i = 0
            var count = 0;
            while( i < str.length){
                if (str.charAt(i) == uniqueStr[char]){
                    count++
                }
                i++;
            }
            
            var weight = count/size
            
            var a = new stringHash(uniqueStr[char])
            dict.put(a,weight)
            

        }

        for (char in uniqueStr){
            var c = new stringHash(uniqueStr[char])
            var w = dict.get(c)

            var newNode = new HuffmanTree(uniqueStr[char],w)
            
            mySet.add(newNode)
            

        }
        var arr = Array.from(mySet)
        arr.sort(function(a,b){return  a.compareTo(b)})

        while(arr.length>1){
            arr[1] = arr[1].combine(arr[0])
            arr.splice(0,1)
            arr.sort(function(a,b){return  a.compareTo(b)})
        }
        var T = arr[0]
        var result = " "
        for (char in uniqueStr){
            result +=T.traverse(uniqueStr[char])+" "
            

        }
        result+="\n"
        const writeBuffer = fs.writeFileSync(this.#outName,result)
        

    }

}
module.exports = HuffmanEncoder;


