const obj = new Object();
obj.id = 65;
obj.name = "Ajlal";
obj.email = "ajlal@gmail.com";
console.log(obj);

// object in object

const obj1 = {
    id : 65,
    name : "Ajlal",
    email : "ajlal@gmail.com",
    address : {
        city : "Delhi",
        state : "Delhi",
        country : "India"
    }
}
console.log(obj1);

// assign object

const obj2 = Object.assign({}, obj1);
console.log(obj2);


// object destructuring

const {id, name, email, address} = obj1;
console.log(id, name, email, address);

// ... 

const obj3 = {
    ...obj1
}
console.log(obj3);
