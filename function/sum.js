function sum(a, b){
    return a + b;
}

const prompt = require('prompt-sync')({sigint: true});
let a = parseInt(prompt("Enter a number: "));
let b = parseInt(prompt("Enter another number: "));
console.log(`The sum of ${a} and ${b} is ${sum(a, b)}`);