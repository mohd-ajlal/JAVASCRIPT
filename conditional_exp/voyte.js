const prompt = require('prompt-sync')({sigint: true});
let age = parseInt(prompt("Enter your age: "));
console.log(age>=18 ? "You are eligible to vote" : "You are not eligible to vote");