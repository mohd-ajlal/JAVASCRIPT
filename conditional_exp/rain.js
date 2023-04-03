const prompt = require('prompt-sync')({sigint: true});
let rain = prompt("Is it raining? (yes/no) or (y/n): ");
if(rain == "yes" || rain == "y" || rain == "Yes" || rain == "Y"){
    console.log("Take an umbrella");
}
else{
    console.log("Enjoy the sun");
}