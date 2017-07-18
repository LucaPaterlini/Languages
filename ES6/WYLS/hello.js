// type conversion accident
//case 1: let i=1;i=i+"";console.log(i,i+1,i-1)
// case2:let j="1";j++;let k="1";k+=1;console.log(j,k)
// case3: console.log([1,5,20,10].sort())
// sol case3:console.log([1,5,20,10].sort((a,b)=>a-b));

// type system
// float representations for numbers
/*let x=1;
console.log(typeof NaN === "number", NaN != NaN, NaN !== NaN,
    x !== x, isNaN(x));*/

// BAD FEATURES

// This as a local object reference in a method
/*let object = {a:1};
object.property = function foo() {return this;} ;// This is the object that the function (method) is being attached to};
console.log(object.property());*/

// This as a global object
/*let funcvar = function foo(){ return this;};
console.log(funcvar()); //Wat*/

// DON'T USE THIS
// undefined return if u go to the next line
/*function hello() {return 1}
console.log(hello());*/
// Implied globals
/*let foo = 1;
function bar() {foo = 5} bar();
console.log(foo);*/
// problem with the strings arrays and string keys
/*let n = 0;
  for (let i in [3, 'hello world', false, 1.5]) {
    i = parseInt(i); // output is wrong without this cumbersome line
    console.log(i + n);
  }*/

// MISSING FEATURES
// no const for objects
let a = x => x*x;
console.log(a(2),e );








