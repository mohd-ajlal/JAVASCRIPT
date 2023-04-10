function factorial(num){
    sum =1;
    for(let i = 1; i<=num; i++){
        sum *= i;
    }
    return sum;
}

const prompt = require('prompt-sync')({sigint: true});
let num = parseInt(prompt("Enter a number: "));
let out = factorial(num);
console.log(out);

