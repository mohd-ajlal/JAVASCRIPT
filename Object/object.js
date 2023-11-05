// singleton     
// object.create()

// object literals

const mySym = Symbol('key1');

const jsUser = {
    name : "Mohd Ajlal",
    role : "Admin",
    email : "abc@gmail.com",
    age : 18,
    [mySym] : "secret",
    login : false,
    lastlogin : ["Date", "Time", "Location"]
}

console.log(jsUser.name);
console.log(jsUser["age"]);
console.log(jsUser[mySym]);
console.log(jsUser.lastlogin[0]);

jsUser.email = "ajlal00786@gmail.com"
// Object.freeze(jsUser);

jsUser.greeting = function(){
    console.log("Hello");
}

console.log(jsUser.greeting());