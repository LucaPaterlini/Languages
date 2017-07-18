/**
 * Created by pater92 on 03/07/17.
 */
// CONSTANTS
// const PI = 3.141593;console.log(PI)

// SCOPING
/*
for (let i = 0; i < a.length; i++) {let x = a[i]}
for (let i = 0; i < b.length; i++) {let y = b[i]}

let callbacks = [];
for (let i = 0; i <= 2; i++) {callbacks[i] = function () { return i * 2 }}
console.log(callbacks[0]() === 0);
console.log(callbacks[1]() === 2);
console.log(callbacks[1]() === 2);
*/

/*
{
    function foo() { return 1 }
    console.log(foo() === 1 );
    {
        function foo() { return 2}
        console.log(foo() === 2)
    }
    console.log(foo() === 1);
}*/
// Arrow functions
/*let evens=[2,4,6,8];
let odds = evens.map(v => v + 1);
let pairs = evens.map(v => ({even: v, odd:v+1}));
let nums = evens.map((v, i) => v + i);
console.log(odds,pairs,nums)*/
/*nums = [2,4,6,8,5,10]; fives = [];
nums.forEach(v => {if (v % 5 === 0) fives.push(v)});
console.log(fives);*/
/*
class hi {
    constructor(){this.nums = [1,2,3,4,5,10]}
    hello(){
        let fives = [];
        this.nums.forEach((v) => {if (v % 5 == 0) fives.push(v)});
        return fives
    }
}
item = new hi();
console.log(item.hello());*/
// EXTEND PARAMETER HANDLING
/*function f(x, y = 7, z = 42) {return x +y +z }
console.log(f(1)==50);*/
/*function f (x,y , ...a) {return (x + y) * a.length}
if (f(1,2,"hello",true,7) === 9){ console.log("nice")}*/
/*const assert = require("assert");
let param = ["hello",true,7];
let other = [1,2,...param];
function f(x,y, ...a) { return ( x +y)* a.length}
let str = "foo";
let chars = [ ...str];
assert.deepEqual(f(1,2,...param), 9);*/
// TEMPLATE LITERALS
/*let customer = {name:"Foo"};
let card = {amount: 7,  product: "Bar", unitprice: 42};
let message = `Hello.${customer.name}, want to buy ${card.amount} ${card.product}`+
    `for a total of ${card.amount * card.unitprice} bucks?`;
console.log(message)*/
/*
function quux(strings, ...values) {
    console.log(strings[0] === "foo\n",
    strings[1] === "bar",
    strings.raw[0] === "foo\\n",
    strings.raw[1] === "bar",
    values[0] === 42)
}
quux `foo\n${42}bar`;
console.log(String.raw `foo\n${42}bar` === "foo\\n42bar");
*/
// EXTENDED LITERALS support binary and octal
/*console.log(0b111110111 === 503);
console.log(0o767 === 503);*/
/*console.log(
    "𠮷".length === 2,
    "𠮷".match(/./u)[0].length === 2,
    "𠮷" === "\uD842\uDFB7",
    "𠮷" === "\u{20BB7}",
    "𠮷".codePointAt(0) == 0x20BB7)
for (let codepoint of "𠮷") console.log(codepoint)*/
//Regular Expression Sticky Matching
// let parser = (input,match) => {
//     for (let pos =0; lastPos = input.length; pos <lastPos){
//         for (let i = 0; i<match.length;i++){
//             match[i].pattern.lastIndex = pos;
//             let found;
//             if ((found = match[i].pattern.exec(input)) !== null){
//                 match[i].action(found);
//                 pos = match[i].pattern.lastIndex;
//                 break
//             }
//         }
//     }
// };
//
// let report = (match) => {console.log(JSON.stringify(match))};
// parser("Foo 1 Bar 7 Baz 42", [
//     {pattern: /^Foo\s+(\d+)/y, action: (match)=> report(match)},
//     {pattern: /^Bar\s+(\d+)/y, action: (match)=> report(match)},
//     {pattern: /^Baz\s+(\d+)/y, action: (match)=> report(match)},
//     {pattern: /^\s*/y, action: (match)=>{}}
// ]);

//ENCHANCED OBJECT PROPERTIES
/*let x=2;y=3;
let obj = {x,y};
console.log(obj.x,obj.y);*/
/*function quux() {return 1}
let obj = {foo: "bar", ["baz" + quux()]: 42};
console.log(obj.baz1);*/

// DESTRUCTURING ASSIGNEMENT
/*let list =[1,2,3];
let [a, ,b] = list;
[b,a] = [a,b];console.log(a,b)*/
/*let obj ={op:1,lhs:2,rhs:3};
let {op, lhs, rhs} = obj;
console.log(op,lhs,rhs);*/

/*let obj ={op:1,lhs:{op:2},rhs:3};
let {op:a,lhs:{op: b},rhs:c} = obj;
console.log(a,b,c);*/

/*let obj = {a:1};
let list = [1];
let {a,b = 2} = obj;
let [x,y =2] = list;
console.log(a,b,x,y);*/
/*function f([ name, val]) { console.log(name,val)}
function g({name: n, val: v}) { console.log(n,v)}
function h ({name, val}) { console.log(name,val)}
f(["bar",42]);g({name: "foo", val: 7});h({name: "bar", val: 42});*/
/*
let list = [7,42];
let [a=1, b=2,c=3,d] = list
console.log(a,b,c,d)*/

// SYMBOL TYPE
/*
console.log(Symbol("foo") != Symbol("foo"));
const foo = Symbol();const bar = Symbol();
console.log(typeof foo === "symbol",typeof bar === "symbol");
let obj = {};obj[foo] = "foo";obj[bar] = "bar";
console.log(JSON.stringify(obj));
console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));*/

// ITERATOR
/*let fibonacci = {
    [Symbol.iterator](){
        let pre = 0, cur = 1;
        return {next(){[pre,ur] = [cur, pre + cur];return {done: false, value:cur}}}
    }
};
for (let n of fibonacci) { if (n>1000)break; console.log(n)}*/
// Numerical int limit
//console.log(Math.pow(2,1023));

// GENERATOR
/*let fibonacci = {
    *[Symbol.iterator](){
        let pre = 0, cur = 1
        for (; ;) {[pre, cur] = [cur, pre + cur];yield cur}
    }
}

for (let n of fibonacci){ if (n>1000)break;console.log(n)}
*/
/*
function *range(start,end, step) {
    while (start <end){yield start;start += step}
}
let r=[];
for (let i of range(0,10,2)){ r.push(i)}
console.log(r.join())*/
/*
let fibonacci = function* (numbers) {
    let pre = 0, cur = 1
    while (numbers-- >0){
        [pre, cur] = [ cur, pre + cur];yield cur
    }
}

//for (let n of fibonacci(1000)) console.log(n)
let numbers = [ ...fibonacci(1000)];
let [ n1, n2, n3, ...others] = fibonacci(1000);
console.log(others.slice(0,3));
*/
// generic asynchronous control-flow driver ??
/*
function async(proc, ...params) {
    let iterator = proc(...params);
    return new Promise((resolve,reject) => {
        let loop = (value) => {
            let result;
            try {result = iterator.next(value)}
            catch (err) {reject(err)}
            if (result.done) resolve(result.value);
            else if (typeof result.value === "object"
                && typeof result.value.then === "function")
                result.value.then((value) => {loop(value)}, (err) => {reject(err)});
            else loop(result.value)
        };
        loop()
    })
}

function makeAsync(text, after) {
    return new Promise((resolve, reject) => {setTimeout(() => resolve(text), after)})
}

async(function* (greeting) {
    let foo = yield makeAsync("foo", 600);
    let bar = yield makeAsync("bar", 300);
    let baz = yield makeAsync("baz", 100);
    return `${greeting} ${foo} ${bar} ${baz}`},"Hello").then((msg)=>{
    console.log("RESULT:",msg)
});*/

// generator Methods
// class test {
//     *range(start, end, step) {while (start < end) {yield start;start += step}}
//     constructor(){}
// }
//
// let obj = new test();
// for (let i of obj.range(0, 10, 2)) {
//     console.log(i) // 0, 2, 4, 6, 8
// }

// MAP SET WEAKMAP/WEAKSET
/* set
const assert = require('assert');
let s = new Set();s.add("hello").add("goodbye").add("hello");
assert.deepEqual(s.size, 2);
assert.deepEqual(s.has("hello"),true);
for (let key of s.values()) console.log(key)*/
// map
/*const assert = require("assert")
let m = new Map();
let s = Symbol();
m.set("hello",42);
m.set(s,34);
assert.deepEqual(m.get(s),34);
assert.deepEqual(m.size, 2);
for (let [ key, val ] of m.entries())console.log(key.toString() + " = " + val)
*/
// weak link
/*let isMakerd = new WeakSet();
let attachedDAta = new WeakMap();

class Node {
    constructor (id)    { this.id = id }
    mark        ()      { isMakerd.add(this)}
    unmark      ()      { isMakerd.delete(this)}
    marked      ()      { return isMakerd.has(this)}
    set data    (data)  { attachedDAta.set(this, data)}
    get data    ()      { return attachedDAta.get(this)}
}

let foo = new Node("foo");

console.log(JSON.stringify(foo) === '{"id":"foo"}');
foo.mark();
foo.data = "bar";
console.log(foo.data === "bar");
console.log(JSON.stringify(foo) === '{"id":"foo"}');

console.log(isMakerd.has(foo) === true);
console.log(attachedDAta.has(foo) === true);
foo = null;
console.log(attachedDAta.has(foo) === false);
console.log(isMakerd.has(foo) === false);*/

// TYPED ARRAYS
/*
class Example {
    constructor (buffer = new ArrayBuffer(24)){
        this.buffer = buffer
    }
    set buffer (buffer) {
        this._buffer = buffer;
        this._id = new Uint32Array (this._buffer, 0,1);
        this._username = new Uint8Array (this._buffer, 4,16);
        this._amountDue = new Float32Array(this._buffer, 20, 1);
    }
    get buffer ()  { return this._buffer}
    set id(v)      { this._id[0] = v}
    get id()       { return this._id[0]}
    set username(v){ this._username[0] = v}
    get username() { return this._username[0]}
    set amountDue(v){ this._amountDue[0] = v}
    get amountDue() { return this._amountDue[0]}
}

let example = new Example();
example.id = 7;
example.username = "John Doe";
example.amountDue = 42.0;
console.log(example);
*/
// NEW BUILD IN METHODS
/*let dst = {quux: 0};
let src1 = {foo: 1, bar: 2};
let src2 = {foo: 3, baz: 4};
Object.assign(dst, src1, src2);
console.log(dst);*/
//console.log([1,3,4,2].find(x=> x>0));//find first value
//console.log([1,3,4,2].findIndex(x => x > 3));//find first index

// string repeating
//console.log("foo".repeat(3));

// string search
/*console.log("hello".startsWith("ello",1));
console.log("hello".endsWith("hell",4)); // trikky postioning
console.log("hello".includes("ell"));
console.log("hello".includes("ell",1));
console.log("hello".includes("ell",2));*/
// number typecheck
//console.log(Number.isNaN(42));console.log(Number.isNaN(NaN));
// isInfinite
//console.log(Number.isFinite(Infinity));

// number safety check Not soooo goood
//console.log(0.1 + 0.2 - 0.3);
//console.log(Math.abs((0.1+0.2) -0.3)< Number.EPSILON);

// truncate
/*console.log(Math.trunc(42.7));
console.log(Math.trunc(0.1));
console.log(Math.trunc(-0.1)); //bleah */
/*
console.log(Math.sign(7),Math.sign(0),Math.sign(-0),Math.sign(-7),
    Math.sign(NaN));*/

// META PROGRAMMING
// proxying
/*let target = {foo : "Welcome, foo"};
let proxy = new Proxy(target,{
    get (receiver, name) {
        return name in receiver ? receiver[name]: `Hello, ${name}`
    }
});
console.log(proxy.foo === "Welcome, foo");
console.log(proxy.world === "Hello, world");*/
/*
let obj = { a:1};
Object.defineProperty(obj, "b", {value: 2});
obj[Symbol("c")] = 3;
console.log(Reflect.ownKeys(obj));*/

// Internationalization
/*let list =[ "ä", "a", "z" ];
let l10nDE = new Intl.Collator("de");
let l10nSV = new Intl.Collator("sv");

l10nDE.compare("ä", "z");
l10nSV.compare("ä", "z");
console.log(list.sort(l10nDE.compare));
console.log(list.sort(l10nSV.compare));*/

// Number Formatting
/*?? mumble mumble
let l10nEN = new Intl.NumberFormat("en-US")
let l10nDE = new Intl.NumberFormat("de-DE")
console.log(l10nEN.format(1234567.89) === "1,234,567.89",
l10nDE.format(1234567.89) === "1.234.567,89")*/
// currency format
/*let l10nUSD = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
let l10nGBP = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" })
let l10nEUR = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" })
console.log(
l10nUSD.format(100200300.40) === "$100,200,300.40",
l10nGBP.format(100200300.40) === "£100,200,300.40",
l10nEUR.format(100200300.40) === "100.200.300,40 €"?
    l10nEUR.format(100200300.40) === "100.200.300,40 €":
    l10nEUR.format(100200300.40) );
*/
let l10nEN = new Intl.DateTimeFormat("en-US");
let l10nDE = new Intl.DateTimeFormat("de-DE");

console.log(
l10nEN.format(new Date("2015-01-02")) === "1/2/2015",
l10nDE.format(new Date("2015-01-02")) )



































