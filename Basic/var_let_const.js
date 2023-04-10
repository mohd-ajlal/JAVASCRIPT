console.log("var, let and const")
var a = 45
var b = "ajlal"
var c = true
var d = null
var e = undefined
const author = "Mohd Ajlal"
//let author = "abc" : Throws an error because constant can't be changed 
//author = "abc" : Throws an error because constant can't be changed

{
    var b = "mohd"
    console.log(b)
}
console.log(b)

let b2 = "ajlal"
// let b2 = "ajlal" // we can't redeclare let variable
// b = "ajlal" // we can change value of variable
{
    let b2 = "mohd"
    console.log(b2)
}
console.log(b2)

// we can't use let and var with same name


// var => function scope
// let => block scope
// const => block scope