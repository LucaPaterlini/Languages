/**
 * Created by pater92 on 02/03/17.
 */

// const buf1 = Buffer.alloc(10);
// console.log(buf1);

//const buf = Buffer.alloc(11, 'abcdefghijklmnop=','base64');
//console.log(buf);

//const buf = Buffer.allocUnsafe(10);
//console.log(buf);
//buf.fill(0);
//console.log(buf);

// Need to keep around a few small chunks of memory
/*const store = [];

socket.on('readable', () => {
    const data = socket.read();

    // Allocate for retained data
    const sb = Buffer.allocUnsafeSlow(10);

    // Copy the data into the new allocation
    data.copy(sb, 0, 0, 10);

    store.push(sb);
});*/
/*
const str = '\u00bd + \u00bc = \u00be'


console.log(`${str}: ${str.length} characters, ` +
    `${Buffer.byteLength(str,'utf8')} bytes`);
*/
/*
const buf1 = Buffer.from('1234');
const buf2 = Buffer.from('0123');
const arr = [buf1,buf2];

console.log(arr.sort(Buffer.compare));*/
/*
const buf1 = Buffer.alloc(10);
const buf2 = Buffer.alloc(14);
const buf3 =  Buffer.alloc(18);
const totalLength = buf1.length + buf2.length + buf3.length;

console.log(totalLength);

const bufA = Buffer.concat([buf1,buf2,buf3], totalLength);
console.log(bufA);
console.log(bufA.length);
*/









