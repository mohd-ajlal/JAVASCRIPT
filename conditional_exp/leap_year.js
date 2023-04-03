const prompt = require('prompt-sync')({sigint: true});
let year = parseInt(prompt("Enter a year: "));
if(year%4 == 0){
    if(year%100 == 0){
        if(year%400 == 0){
            console.log("Leap year");
        }
        else{
            console.log("Not a leap year");
        }

    }
    else{
        console.log("Leap year");
    }
}
else{
    console.log("Not a leap year");
}