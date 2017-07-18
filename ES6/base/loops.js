/**
 * Created by pater92 on 23/04/17.
 */
/*
"use strict"
for(let temp, i = 0, j = 1; j<30; temp = i, i = j,
    j = i +temp )console.log(j);*/
/*
var obj = {a:1,b:2,c:3};
for (var prop in obj){
    console.log(obj[prop])
}*/
/*
var num = 5;
var factorial = 1;
while (num >= 1){
    factorial = factorial * num;
    num--;
}
console.log("The factorial is "+factorial);
*/
/*
var i = 1;
while(i<=10){
    if (i%5==0){
        console.log("The firt multiple of 5 between 1 and 10 is : "+i)
        break
    }
    i++
}
*/
/*
var num = 0
var count = 0;

for (num = 0;num<=20;num++){
    if(num % 2 == 0){
        continue
    }
    count++
}

console.log(" The count of odd values between 0 and 20 is: "+count)
*/
/*
outerloop:
for (var i=0;i<5;i++){
    console.log("Outerloop: "+i);
    innerloop:

    for (var j = 0; j<5;j++){
        if(j>3 ) break;
        if(i == 2) break innerloop;

        if(i==4) break outerloop;
        console.log("Innerloop: " + j);
    }
}
*/
outerloop: // This is the label name
for (var i = 0; i < 3; i++){
    console.log("Outerloop: " + i);

    for (var j=0;j<5;j++){
        if(j == 3){
            continue outerloop;
        }
        console.log("Innerloop: " + j);
    }
}






























