const fetch = require("fetch-base64");

const readChunk = require('read-chunk');
const fileType = require('file-type');
const buffer = readChunk.sync('input.mp4', 0, 4100);

console.log(fileType(buffer).mime);

//
// fetch.remote('http://domain.com/to/image.jpg').then((data) => {
//     // data[1] contains base64-encoded jpg with MimeType
// }).catch((reason) => {});
//
// fecth.auto('/remote/or/local/path/image.gif').then((data) => {
//
// }).catch((reason) => {});