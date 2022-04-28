
const HuffmanEncoder = require("./HuffmanEncoder")
const readline = require('readline')

const rl =
 readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let userInput = "";

// question user to enter name
rl.question("Enter File Name:\n", function (string) {
  userInput = string;

 
    var encoder = new HuffmanEncoder(userInput)
    encoder.encode()

  // close input stream
  rl.close();
});

