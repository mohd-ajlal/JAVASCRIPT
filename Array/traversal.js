// Traversal ion array
// Navigate through an array

// if we want to get single data at a time and also if we want to change the data.
// if we want to check the length of data

let data = ['ajlal', 'mohd', 'manas', 'shubham'];
console.log(data[0]);

// length
console.log(data.length);

// for loop
console.log();
console.log("for loop");
console.log();

for(let i = 0; i < data.length; i++){
    console.log(data[i]);
}

// for in loop
console.log();
console.log("for in loop");
console.log();

for(let i in data){
    console.log(i);
}
console.log();
console.log("for of loop");
console.log();
// for of loop

for(let i of data){
    console.log(i);
}

// forEach loop
console.log();
console.log("forEach loop");
console.log();

data.forEach(function(element, index, array){
    // console.log(element, index, array);
   console.log(element); 
});

// fat arrow function
console.log();
console.log("fat arrow function");
console.log();

data.forEach((element, index, array) => {
    console.log(element);
});