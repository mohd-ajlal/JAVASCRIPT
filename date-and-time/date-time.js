// Date

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toJSON());
console.log(typeof myDate)

let newDate = new Date(2023, 0, 23)
console.log(newDate);
console.log(newDate.toDateString());

let newDate2 = new Date(2023, 0, 23, 5, 3)
console.log(newDate2);
console.log(newDate2.toLocaleString());

let newDate3 = new Date("2023-01-01 00:00:00")
console.log(newDate3);
console.log(newDate.toLocaleString());

let newDate4 = new Date("01-01-2023")
console.log(newDate4);
console.log(newDate4.toLocaleString());

// 