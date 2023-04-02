// odd-even

const prompt = require('prompt-sync')({sigint: true});
let num = parseInt(prompt("Enter a number: "));
if(num%2==0){
    console.log("Even");
}
else{
    console.log("Odd");
}