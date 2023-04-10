// Fat Arrow Function
// ES6 introduced fat arrow function syntax, a shorter way to write function expressions.
// Fat arrow functions remove the function keyword and change the placement of the parentheses and curly brackets.
// Fat arrow functions also change the way this is bound.
//
// Fat Arrow Function Syntax
// Fat arrow functions are always anonymous.
// Fat arrow functions do not have their own this, arguments, super, or new.target.
// These functions also cannot be used as constructors and will throw an error when used with new.
// Fat arrow functions also cannot be used as generators.
// Fat arrow functions do not have a prototype property.
// Fat arrow functions cannot be used as object methods.

// const sum = () => {
//     let a = 5, b = 6;
//     let sum = a + b;
//     return `The sum of two numbers is ${sum}`;
// }

const sum = () => `The sum of two numbers is ${(a = 5)+(b = 6)}`;

console.log(sum());