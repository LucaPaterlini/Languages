/**
 * Created by pater92 on 01/03/17.
 */

const assert = require("assert");
/*assert(true);assert(1);
assert(false, 'it\'s false');*/

/*assert(Error('a'));
assert.deepEqual(Error('a'),Error('b'));*/

/*const  obj1 = {a:{b:1}};
const  obj2 = {a:{b:2}};
const  obj3 = {a:{b:1}};

const obj4 = Object.create(obj1);/*
assert.deepEqual(obj1, obj1);
//assert.deepEqual(obj1, obj2);
assert.deepEqual(obj1, obj3);
assert.deepEqual(obj1,obj4);*/

/*assert.deepEqual({a:1},{a:'1'})
assert.deepStrictEqual({a:1},{a:'1'});*/

/*assert.doesNotThrow(
    () => {
        throw new TypeError('Wrong value');
    },
    SyntaxError
);*/
/*
assert.doesNotThrow(
    () =>{
        throw new TypeError('Wrong value');
    },
    TypeError, 'Whoops'
);*/
/*
assert.equal(1,1);
assert.equal(1,'1');
//assert.equal(1,2);
assert.equal({ a:{b:1}},{a:{b:1}})*/

//assert.fail(1,2,undefined,'>');
//assert.fail(1,2,'whoops','>');
//assert.ifError(0);
/*assert.ifError(1);*/
//assert.ifError('error');
//assert.ifError(new Error());
//assert.notDeepEqual(obj1, obj1);
//assert.notDeepEqual(obj1, obj2);
//assert.notDeepEqual(obj1, obj3);
//assert.notDeepEqual(obj1, obj4);


//assert.notDeepEqual({a:1},{a:'1'});
//assert.notDeepStrictEqual({a:1},{a:'1'});

assert.notEqual(1,2);
assert.strictEqual(1,1);
assert.notEqual(1,'a');
assert.throws(() => { throw new Error("Wrong value");}, Error );


assert.throws( () => {
    throw new Error("Wrong value");},
    /value/
);

assert.throws(()=>{throw new Error("Wrong value");},
    function (err) {
        if ( (err instanceof Error ) && /value/.test(err)){return true;}
    },
    'unexpected error'
);

assert.throws(()=>{throw new Error("Wrong value");},
    function (err) {
        if ( (err instanceof Error ) && /value/.test(err)){return true;}
    },
    'unexpected error'
);
