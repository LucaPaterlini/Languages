var re = new RegExp(/abc/g);
var str = "Ciabce"
console.log(re.flags)
console.log(re.exec(str))
console.log(re.test(str))
console.log(str.match(re))
console.log(str.search(re))
console.log(str.split('a'))