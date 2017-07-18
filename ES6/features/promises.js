/*function msgAfterTimeout (msg, who, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout)
    })
}
msgAfterTimeout("", "Foo", 100).then((msg) =>
    msgAfterTimeout(msg, "Bar", 200)
).then((msg) => {
    console.log(`done after 300ms:${msg}`)
})*/

let c ={val:0};

function fetchPromised(timeout, onData, onError) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve((c.val++).toString()), timeout)
    })
}
Promise.all([
    fetchPromised("500"),
    fetchPromised("500"),
    fetchPromised("500"),
]).then((data) => {
    let [ foo, bar, baz] = data;
    console.log(`success: foo=${foo} bar=${bar} baz=${baz}`)
}, (err) => { console.log(`error: ${err}`)
});

