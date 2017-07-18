/**
 * Created by pater92 on 24/04/17.
 */

// Struct kind way
/*var person = {
    firstname:"Tom",
    lastname:"Hanks",
    func: function sayHello() {return "Hello!!"},
};

console.log(person.firstname)
console.log(person.lastname)
console.log(person.func())*/

// brackets
/*
var foo = 'bar'
var baz = {foo}
console.log(baz.foo)*/

//This is a dictionary and they are lieing about this
/*
var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1987;

console.log(myCar["make"])
console.log(myCar["model"])
console.log(myCar["year"])*/

// classes using functions in square brackets or . notation
// is the same thing
/*
function Car() {
    this.make = "Ford"
    this.model = "F123"
}


var obj = new Car()
obj.extra = "fun"
console.log(obj.make)
console.log(obj.model)
console.log(obj)
*/
// The most likely to the standard class
/*
var roles = {
    type: "Admin",
    displayType : function () {
        console.log(this.type);
    }
}

var super_role = Object.create(roles);
super_role.displayType();

var guest_role = Object.create(roles)
guest_role.type = "Guest";
guest_role.displayType();
*/
/*
"use strict"
var det = {name:"Tom",ID:"E1001"};
var copy = Object.assign({},det);
console.log(copy);
for (let val in copy){
    console.log(copy[val])
}*/
// pay attention that assign is only coping a pointer
/*
var o1 = { a: 10};
var obj = Object.assign(o1);
obj.a++
console.log("Value of 'a' in the  Merged object after increment ")
console.log(obj.a)
console.log("value of 'a' in the Original Object after increment ")
console.log(o1.a)
*/
/*
var myobj = new Object;
myobj.a = 5;
myobj.b = 12;
delete myobj.a;
console.log("a" in myobj)
*/
/*var val1 = {name: "Tom"};
var val2 = {name: "Tom"};
console.log(val1==val2);
console.log(val1===val2);
*/

var emp = { name: 'John',Id: 3}
var {name, Id} = emp
console.log(name)
console.log(Id)




























































































