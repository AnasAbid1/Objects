var itemsArray = [
    {name:"juice",price:"50", quantity:"3"},
    {name:"cookie",price:"30", quantity:"9"},
    {name:"shirt",price:"880", quantity:"1"},
    {name:"pen",price:"100", quantity:"2"}
];






var objTwo ={
    name:"Anas",
    email:"abid.anas3@gmail.com",
    password:123456,
    age:18,
    gender:"male",
    city:"karachi",
    country:"Pakistan",
}
var aGe = "age" in objTwo
console.log(aGe) 
var country = "country" in objTwo
console.log(country) 
var firstName = "firstName" in objTwo
console.log(firstName) 
var lastName =   "lastName" in objTwo
console.log(lastName) 

// Create a constructor function with some properties. Now
// create multiple records using the constructor.

function Person () {
    this.name = 'Anas',
    this.age = 18
    this.gender = "male"
}


var person = new Person();
console.log(person)