// Task 1

let str = 'Ajlal'; // "Hello"

let greet = `Hello ${str}!`; // "Hello Ajlal!"
document.write(greet);

// Task 2

let str1 = "Mohd\nAjlal";
console.log(str1);

// Task 3

let str2 = "\\";
console.log(str2);

// Task 4

let str3 = 'I\'m Ajlal'; // "I'm Ajlal"  \' = ' and \" = "
console.log(str3);

// task 5 - find the length of string

let str4 = prompt("Enter string: ");
document.write(`The length of ${str4} is `+str4.length); // 5

// task 6 - Position of a character in a string

let str5 = "Hello World!"
let char = prompt(`Enter character to find in ${str5}: `);
let pos = str5.indexOf(char);
if(pos == -1){
    document.write(`Character ${char} not found in ${str5}`);
}
else{
    document.write(`Character ${char} found at position ${pos} in ${str5}`);
}

// task 7 - input index and return character at that index

let str6 = "Hello World!";
let index = prompt(`Enter index to find character in ${str6}: `);
if(index < 0 || index > str6.length){
    document.write(`Index ${index} is out of range`);
}
else{
    document.write(`Character at index ${index} in ${str6} is ${str6[index]}`);
} 

// Task 7

let str8 = "Mohd";
let str9 = "Ajlal";
console.log(str8 + str9); // "MohdAjlal"
console.log(str8 + " " + str9); // "Mohd Ajlal"
console.log(str8.concat(str9)); // "MohdAjlal"
console.log(str8.concat(" ", str9)); // "Mohd Ajlal"
console.log(str8.concat("  "," ", str9)); // "Mohd Ajlal"

// task 8 - compare 2 string

let str10 = "Hello";
let str11 = "hello";
console.log(str10 == str11); // "Hello" == "World" -> false

// task 9 - compare using if else

let str12 = "Mohd";
if("Mohd" == str12){
    document.write("Strings are equal");
}else{
    document.write("Strings are not equal");
}

// task 10 - concat

let str13 = "hello";
let str14 = "world";
let str15 = "New World"

console.log(str13.concat(" ", str14.concat(" ", str15))); // "hello world New World"

console.log(str13.concat(" ", str14, " ", str15)); // "hello world New World"

// task 11 - uppercase and lowercase

let str16 = "Hello World";
console.log(str16.toUpperCase()); // "HELLO WORLD"
console.log(str16.toLowerCase()); // "hello world"

// task 12 - slice

let str17 = "Hello World";
console.log(str17.slice(0, 5)); // "Hello"

// task 13 - substring

let str18 = "This is a JavaScript course";
console.log(str18.substring(0, 4)); // "This"

// task 14 - substr

let str20 = "This is a JavaScript course";
let str19 = str20.substr(10, 19);
console.log(str19); // "JavaScript course"

// task 15 - replace

let str21 = "This is a JavaScript course";
let str22 = str21.replace("JavaScript", "Python");
console.log(str22); // "This is a Python course"

// task 16 - indexOf

let str23 = "This is a JavaScript course and it is very easy";
console.log(str23.indexOf("is")); // 2
console.log(str23.indexOf("is", 7)); // 35

// task 17 - lastIndexOf

let str24 = "This is a JavaScript course and it is very easy";
console.log(str24.lastIndexOf("is")); // 35
console.log(str24.lastIndexOf("iss")); //-1

// task 18 - remove spaces => trim, trimStart, trimEnd

let str25 = "   Hello World   ";
console.log(str25.trim()); // "Hello World"
console.log(str25.trimStart()); // "Hello World   "
console.log(str25.trimEnd()); // "   Hello World"


// task 19 - return

let str26 = "Hello World";
console.log(str26.includes('Hello')); // true
