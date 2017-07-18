/**
 * Created by pater92 on 07/02/17.
 */
var fs = require("fs");
fs.readFile('input.txt', function (err,data) {
    if (err) return console.error(err);
    console.log(data.toString());
});
console.log("Program Ended");