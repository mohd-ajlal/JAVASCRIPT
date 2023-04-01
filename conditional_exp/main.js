/*
Sometimes we mignt have to execute a block of code based on a condition.
In this case we can use conditional statements.
In JavaScript we have the following conditional statements:
1. if statement
2. if...else statement
3. if...else if...else statement
4. switch statement

*/ 

const prompt = require('prompt-sync')({sigint: true});
let age = parseInt(prompt("Enter your name: "));
if(age>=18){
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible to vote");
}