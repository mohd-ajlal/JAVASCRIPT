function prime(num){
    let sum = 0;
    for(let i = 1; i <= num; i++){
        if(num % i == 0){
            sum += 1;
        }
    }
    if(sum == 2){
        return "prime"
    }
    else{
        return "not prime"
    }
}
const prompt = require('prompt-sync')({sigint: true});
let num = parseInt(prompt("Enter a number: "));
let prime_num = prime(num);
console.log(prime_num)