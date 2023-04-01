console.log("Hello World!");
a = 69
console.log(a)
a = "ajlal"
console.log(a);
console.log(typeof a);
console.log("VAR LET and CONST");
var v = "alex";
{
    var v = "ajlal";
    console.log(v);
}
console.log(v);

console.log();

let l = "alex";
{
    let l = "ajlal";
    console.log(l);
}
console.log(l);

console.log();

const c = "alex"; //we can't change the value of constant
console.log(c);

// nn bb ss u - primitive in js
// object - non primitive 

// n = number
// n = null
// b = boolean
// b = BigInt
// s = symbol
// s = string
// u = undefined
// o = object

const ob = {
    ajlal: "abc",
    mohd: "xyz",
    45: "number",
    true: "boolean",
}

console.log(ob)
console.log(ob["ajlal"])