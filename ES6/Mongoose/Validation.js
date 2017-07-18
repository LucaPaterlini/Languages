let mongoose  = require('mongoose');
let assert = require('assert');
mongoose.Promise = Promise;
let Schema = mongoose.Schema;
//
//
// let schema = new Schema({
//     name: {
//         type: String,
//         required: true
//     }
// });
// let Cat = mongoose.model('Cat', schema);
//
// // This cat has no name :(
// let cat = new Cat();
// cat.save(function(error) {
//     assert.equal(error.errors['name'].message,
//         'Path `name` is required.');
//
//     error = cat.validateSync();
//     assert.equal(error.errors['name'].message,
//         'Path `name` is required.');
// });


// let breakfastSchema = new Schema({
//     eggs: {
//         type: Number,
//         min: [6, 'Too few eggs'],
//         max: 12
//     },
//     bacon: {
//         type: Number,
//         required: [true, 'Why no bacon?']
//     },
//     drink: {
//         type: String,
//         enum: ['Coffee', 'Tea'],
//         required: function() {
//             return this.bacon > 3;
//         }
//     }
// });
// let Breakfast = mongoose.model('Breakfast', breakfastSchema);
//
// let badBreakfast = new Breakfast({
//     eggs: 2,
//     bacon: 0,
//     drink: 'Milk'
// });
// let error = badBreakfast.validateSync();
// assert.equal(error.errors['eggs'].message,
//     'Too few eggs');
// assert.ok(!error.errors['bacon']);
// assert.equal(error.errors['drink'].message,
//     '`Milk` is not a valid enum value for path `drink`.');
//
// badBreakfast.bacon = 5;
// badBreakfast.drink = null;
//
// error = badBreakfast.validateSync();
// assert.equal(error.errors['drink'].message, 'Path `drink` is required.');
//
// badBreakfast.bacon = null;
// error = badBreakfast.validateSync();
// assert.equal(error.errors['bacon'].message, 'Why no bacon?');

// THE UNIQUE OPTION IS NOT A VALIDATOR

// let uniqueUsernameSchema = new Schema({
//     username:{
//         type: String,
//         unique: true
//     }
// });
//
// let U1 = mongoose.model('U1', uniqueUsernameSchema);
// let U2 = mongoose.model('U2', uniqueUsernameSchema);
//
// let dup = [{ username: 'Val'}, {username:'Val'}];
// U1.create(dup, function (error) {
//
// });
//
// U2.on('index',function (error) {
//     assert.ifError(error);
//     U2.create(dup, function (error) {
//         assert.ok(error);
//         assert.ok(!error.errors);
//         assert.ok(error.message.indexOf('duplicate key error')!== -1);
//     });
// });
//

// Custom validators

// let userSchema = new Schema({
//     phone: {
//         type: String,
//         validate:{
//             validator: function (v) {
//                 return /\d{3}-\d{3}-\d{4}/.test(v);
//             },
//             message: '{VALUE} is not a valid phone number!'
//             },
//             required: [true, 'User phone number required']
//             }
//     });
//
// let User = mongoose.model('user',userSchema);
// let user = new User();
// let error;
//
// user.phone = '555.0123';
// error = user.validateSync();
// assert.equal(error.errors['phone'].message,
//     '555.0123 is not a valid phone number!');
//
//
// user.phone = '';
// error = user.validateSync();
// assert.equal(error.errors['phone'].message,
//     'User phone number required');
//
// user.phone = '201-555-0123';
//
// error = user.validateSync();
// assert.equal(error, null)



/// ASYNC CUSTOM VALIDATORS

// let userSchema = new Schema({
//     phone:{
//         type: String,
//         validate: {
//             isAsync: true,
//             validator: function (v, cb) {
//                 setTimeout(function () {
//                     cb(/\d{3}-\d{3}-\d{4}/.test(v));
//                 },5);
//             },
//             message: '{VALUE} is not a valid phone number!'
//         },
//         required:[true,'User phone number requred']
//     },
//     name:{
//         type: String,
//         validate: function (v) {
//             return new Promise(function (resolve,reject) {
//                 setTimeout(function () {
//                     resolve(false);
//                 },5)
//             });
//         }
//     }
// });
//
// let User = mongoose.model('User',userSchema);
// let user = new User();
// var error;
//
// user.phone = '555.0123';
// user.name = 'test';
// user.validate(function (error) {
//     assert.ok(error);
//     assert.equal(error.errors['phone'].message,
//         '555.0123 is not a valid phone number!');
//     assert.equal(error.errors['name'].message,
//         'Validator failed for path `name` with value `test`');
// });

//// ---------------Validation Errors ---------


// let toySchema = new Schema({
//     color: String,
//     name: String
// });
//
// let Toy = mongoose.model('Toy',toySchema);
//
// let validator = function (value) {
//     return /blue|green|white|red|orange|periwinkle/i.test(value);
// };
// Toy.schema.path('color').validate(validator,
// 'Color `{VALUE}` not valid','Invalid color');
//
// let toy = new Toy({color:'grease'});
//
// toy.save(function (err) {
//     assert.equal(err.errors.color.message,'Color `grease` not valid')
//     assert.equal(err.errors.color.kind,'Invalid color');
//     assert.equal(err.errors.color.path,'color');
//     assert.equal(err.errors.color.value,'grease');
//     assert.equal(err.name,'ValidationError');
// });
//

/// Required Validators on Nasted Objects

// let personSchema = new Schema({
//     name: {
//         first: String,
//         last: String
//     }
// });
//
// assert.throws(function () {
//     personSchema.path('name').required(true);
// },/Cannot.*'required'/);
//
// let nameSchema = new Schema({
//     first: String,
//     last: String
// });
//
//
// personSchema = new Schema({
//     name:{
//         type: nameSchema,
//         required: true
//     }
// });
//
// let Person = mongoose.model('Person',personSchema);
// let person = new Person();
// let error = person.validateSync();
// console.log(error.errors['name']);
// assert.ok(error.errors['name']);


// Update Validators

// let toySchema = new Schema({
//     color: String,
//     name: String
// });
//
// let Toy = mongoose.model('Toys',toySchema);
// Toy.schema.path('color').validate(function (value) {
//     return /blue|green|white|red|orange|periwinkle/i.test(value);
// }, 'Invalid color');
//
// let opts = { runValidators:true};
// Toy.update({}, {color: 'bacon'}, opts,function (err) {
//     assert.equal(err.errors.color.message,'Invalid color')
// });
//


//Update Validators and


// let toySchema = new Schema({
//     color: String,
//     name: String
// });
// toySchema.path('color').validate(function (value) {
//     if (this.name.toLowerCase().idexOf('red') !== -1){
//         return value !=='red';
//     }
//     return true;
// });
//
// let Toy = mongoose.model('ActionFigure',toySchema);
// let toy = new Toy({color:'red', name:'Red Power Ranger'});
// let error = toy.validateSync();
// assert.ok(error.errors['color']);
//
//
// let opts = { runValidators: true };
// let update = {color:'red',name:'Red Power Ranger'};
// Toy.update({}, update, opts,function (error) {
//     assert.ok(error);
// });


// Update Validator Paths

// let kittenSchema = new Schema({
//     name: {type:String,required:true},
//     age:Number
// });
//
// let Kitten = mongoose.model('Kitten',kittenSchema);
// let update = {color:'blue'};
// let opts = {runValidators:true};
// Kitten.update({}, update, opts, function (err) {
//
// });
//
// let unset = {$unset: {name:1}};
// Kitten.update({},unset, opts, function (err) {
//     assert.ok(err);
//     assert.ok(err.errors['name']);
// });

/// Upadate Validators Only Run On Specified Paths

// let testSchema = new Schema({
//     number: {type: Number, max:0},
// });
//
// let Test = mongoose.model('Test',testSchema);
// let update = {$inc:{number:1}};
// let opts = {runValidators:true};
// Test.update({},update,opts,function (error) {
//
// });


// On $push and $addToSet

// var testSchema = new Schema({
//     numbers: [{ type: Number, max: 0 }],
//     docs: [{
//         name: { type: String, required: true }
//     }]
// });
//
// var Test = db.model('TestPush', testSchema);
//
// var update = {
//     $push: {
//         numbers: 1,
//         docs: { name: null }
//     }
// };
// var opts = { runValidators: true };
// Test.update({}, update, opts, function(error) {
//     assert.ok(error.errors['numbers']);
//     assert.ok(error.errors['docs']);
// });
//