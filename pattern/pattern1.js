

const prompt = require('prompt-sync')({sigint: true});
let row = parseInt(prompt("Enter number of rows: "));
for(let i = 1; i<=row; i++){
    for(let j = 1; j<=i; j++){
        console.log("*", );
    }
    console.log("\n");
}