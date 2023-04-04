function table(num){
    for(let i = 1; i<=10; i++){
        console.log(`${num} x ${i} = ${num*i}`);
    }
}

const prompt = require('prompt-sync')({sigint: true});
let num = parseInt(prompt("Enter a number: "));
table(num);