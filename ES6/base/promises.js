// function notifyAll(fnSms,fnEmail){
//     console.log('starting notification process');
//     fnSms();
//     fnEmail();
// }
// notifyAll(function () {
//     console.log("Sms send ..");
// },function () {
//     console.log("email send .. ");
// });
// console.log("End of script");

// function  notifyAll(fnSms,fnEmail){
//     setTimeout(function () {
//         console.log('starting notification process');
//         fnSms();
//         fnEmail();
//     },2000)
//     }
//
//     notifyAll(function () {
//         console.log("Sms send ..");
//     },
//     function () {
//         console.log("email send ..");
//     });
//     console.log("End of script");

// Scary Moment

// setTimeout(function () {console.log("one");
//     setTimeout(function () {console.log("two");
//         setTimeout(function () {console.log("three")}, 1000);
//     }, 1000)
// }, 1000)

// Async suggestions with error checking
function getSum(n1, n2) {
    var isAnyNegative = (n1,n2) => n1 < 0 || n2 < 0
    var promise = new Promise(function(resolve, reject) {
        if (isAnyNegative()) reject(Error("Negatives not supported"));
        resolve(n1 + n2);
    });
    return promise;
}
getSum(5, 6).then(function(result) {
    console.log(result);return getSum(10, 20);
    },
    function(error) {console.log(error);})
    .then(function(result) {console.log(result);return getSum(30, 40);},
        function(error) {console.log(error);})
    .then(function(result) {console.log(result);},
        function(error) {console.log(error);});
console.log("End of script ");