// Searching and filter in array

// if we want to search the data in array
// Array.prototype.indexof()
// Returns the first least(index) of an element within the array equal to an element or -1 if none is found.
// It search the element from the first index to last index.

let array1 = ["ajlal", "mohd", "manas", "shubham"];

console.log(array1.indexOf("ajlal"));

// Array.prototype.lastIndexOf()
// Returns the first greatest(index) of an element within the array equal to an element or -1 if none is found.
// It search the element from the last index to first index.

let array2 = ["ajlal", "mohd", "manas", "shubham", "ajlal"];
console.log(array2.lastIndexOf("ajlal"));

// Array.prototype.includes()
// Returns true if an element within the array equal to an element or false if none is found.

console.log(array2.includes("ajlal"));

// Array.prototype.find()
// Returns the value of the first element in the provided array that satisfies the provided testing function. Otherwise undefined is returned.

let array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array3.find((element) => element > 5));

// Array.prototype.findIndex()
// Returns the index of the first element in the provided array that satisfies the provided testing function. Otherwise -1 is returned.

console.log(array3.findIndex((element) => element > 5));

// Array.prototype.filter()
// Creates a new array with all elements that pass the test implemented by the provided function.

console.log(array3.filter((element) => element > 5));

// Array.prototype.every()
// Returns true if every element in this array satisfies the provided testing function.

console.log(array3.every((element) => element > 5));

// Array.prototype.some()
// Returns true if at least one element in this array satisfies the provided testing function.

console.log(array3.some((element) => element > 5));

// Array.prototype.reduce()
// Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.

console.log(array3.reduce((accumulator, currentValue) => accumulator + currentValue));

// Array.prototype.reduceRight()
// Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.

console.log(array3.reduceRight((accumulator, currentValue) => accumulator + currentValue));

// Array.prototype.map()
// Creates a new array with the results of calling a provided function on every element in this array.

console.log(array3.map((element) => element * 2));
console.log(array3);

// Array.prototype.flat()
// Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

let array4 = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
console.log(array4.flat(2));

// Array.prototype.flatMap()
// First maps each element using a mapping function, then flattens the result into a new array. It is identical to a map followed by a flat of depth 1, but flatMap is often quite useful, as merging both into one method is slightly more efficient.

console.log(array4.flatMap((element) => element * 2));
console.log(array4);

// Array.prototype.sort()
// Sorts the elements of an array in place and returns the array. The sort is not necessarily stable. The default sort order is according to string Unicode code points.

// push

let array5 = [1, 2, 3, 4, 5];
console.log(array5.push(6));
console.log(array5);

// pop

console.log(array5.pop());
console.log(array5);

// shift

console.log(array5.shift());
console.log(array5);

// unshift

console.log(array5.unshift(1));
console.log(array5);

// slice and splice

// slice

console.log(array5.slice(1, 3));
console.log(array5);

// splice

console.log(array5.splice(1, 3, 2, 3, 4));
console.log(array5);

