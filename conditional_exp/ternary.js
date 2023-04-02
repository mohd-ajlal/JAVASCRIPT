// Ternary operator: Evaluates a condition and execute a block of code based on that condition
// Syntax: condition ? exprIfTrue : exprIfFalse

const prompt = require('prompt-sync')({sigint: true});
let num = parseInt(prompt("Enter a number: "));
let result = num%2==0 ? "Even" : "Odd";
console.log(result);