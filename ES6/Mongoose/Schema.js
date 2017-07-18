// var mongoose  = require('mongoose');
// mongoose.Promise = Promise;
// var Schema  = mongoose.Schema;


// var blogSchema = new Schema({
//     title: String,
//     author: String,
//     body: String,
//     comments: [{body: String, date: Date}],
//     date: {type: Date, default: Date.now},
//     hidden: Boolean,
//     meta:{
//         votes: Number,
//         favs: Number,
//     }
// });

// var animalSchema = new Schema({name: String, type: String});
// animalSchema.methods.findSimilarTypes = function (cb) {
//     return this.model('Animal').find({type: this.type}, cb);
// };

// var Blog = mongoose.model('Blog',blogSchema);
// var Animal = mongoose.model('Animal',animalSchema);
// var dog = new Animal({type:'dog'});
//
// dog.findSimilarTypes(function (err,dogs) {
//     console.log(dogs);
// });

// Statics

// animalSchema.statics.findByName = function (name, cb) {
//     return this.find({name: new RegExp(name,'i')}, cb);
// };
//
// var Animal = mongoose.model('Animal', animalSchema);
// Animal.findByName('fido',function (err, animals) {
//     console.log(animals);
// });

// Query Helpers

// animalSchema.query.byName = function (name) {
//     return this.find({ name: new RegExp(name,'i')});
// };
//
// var Animal = mongoose.model('Animal', animalSchema);
// Animal.find().byName('fido').exec(function (err, animals) {
//     console.log(animals);
// });
//

// Indexes

//
// var mongoose  = require('mongoose');
// mongoose.Promise = Promise;
// mongoose.connect('mongodb://localhost/test');
// var Schema  = mongoose.Schema;
//
// var animalSchema = new Schema({
//     name : String,
//     type: String,
//     tags: {type: [String], index: true}
// }, {autoIndex:false});
//
//
// animalSchema.index({ _id: 1}, {sparse:true});
// var Animal = mongoose.model('Animal',animalSchema);
//
// Animal.on('index', function (error) {console.log(error.message);});
//
// mongoose.connection.close()

//Virtuals
//
// var mongoose  = require('mongoose');
// var Schema = mongoose.Schema;
// var personSchema = new Schema({
//     name: {
//         first: String,
//         last: String
//     }
// });

// personSchema.virtual('fullName').get(function () {
//     return this.name.first + ' ' + this.name.last;
// });
// 2 chance

// personSchema.virtual('fullName').
//     get(function () {return this.name.first + ' ' + this.name.last;}).
//     set(function (v) {
//         this.name.first = v.substr(0, v.indexOf(' '));
//         this.name.last = v.substr(v.indexOf(' ')+1);
// });
//
//
// var Person = mongoose.model('Person',personSchema);
//
// var ax1 = new Person({
//     name: {first: 'Ax1', last:'Rose'}
// });
//
// ax1.fullName ='Luca Paterlini';
//
// console.log(ax1.name.first);


///// ----------- OPTIONS ---------------

// deault behavior
// var mongoose  = require('mongoose');
// var Schema = mongoose.Schema;

// var schema = new Schema({ name: String});
// var Page = mongoose.model('Page', schema);
// var p = new Page({name: 'mongodb.org'});
// console.log(p);

//// ------ disable id

// var schema = new Schema({ name: String},{id:false});
// var Page = mongoose.model('Page', schema);
// var p = new Page({name: 'mongodb.org'});
// console.log(p.id)

// ------- disable  _id

// var childSchema = new Schema({name: String}, { _id: false});
// var parentSchema = new Schema({children: [childSchema]});
//
// var Model = mongoose.model('Model', parentSchema);
//
// Model.create({ children: [{ name: 'Luke'}]}, function (error,doc) {
//     // doc.children[0]._id will be undefined
// });

// Minimaza, if it not set to false it will not save alle the empty fields

// var mongoose  = require('mongoose');
// var Schema = mongoose.Schema;
//
// var schema = new Schema({name:String, inventory:{}});
// var Character = mongoose.model('Character', schema);
//
// var frodo = new Character({name: 'Frodo', inventory:{ ringOfPower: 1}});
// Character.findOne({name:'Frodo'}, function (err, character) {
//     console.log(character);
// });
//
// var sam = new Character({ name: 'Sam', inventory:{}});
// Character.findOne({name: 'Same'}, function (err, character) {
//     console.log(character);
// });
//
// var mongoose  = require('mongoose');
// var Schema = mongoose.Schema;
//
// var uri = "http://www.google.com"
// var options = { replset: {strategy: 'ping'}};
// mongoose.connect(uri, options);
//
// var schema = new Schema({name: String},{read: ['nearest',{disk: 'ssd'}]});
// mongoose.model('JellyBean',schema);

// Option: strict

// var mongoose  = require('mongoose');
// mongoose.connect('mongodb://localhost/thingtest');
// var Schema = mongoose.Schema;
//
// var thingSchema = new Schema({name:String});
// var Thing = mongoose.model('Thing',thingSchema);
// var thing = new Thing({iAmNotInTheSchema:true});
// thing.save()
//
// var Thing = mongoose.model('Thing');
// var thing = n
//
//
//
// mongoose.connection.close()

// Option : toJSON
// var mongoose  = require('mongoose');
// //mongoose.connect('mongodb://localhost/thingtest');
// var Schema = mongoose.Schema;
//
//
// var schema = new Schema({ name: String});
// schema.path('name').get(function (v) {
//     return v + ' is my name';
// });
//
// schema.set('toJSON', {getters: true, virtuals: false});
// var M = mongoose.model('Person',schema);
// var m = new M({name: 'Max Headroom'});
// console.log(m.toObject());
// console.log(m.toJSON());
//
// console.log(JSON.stringify(m));
//

// Option: typeKey

//var schema = new Schema({ loc:{ type: String, coordinates: [Number]}});

// var schema = new Schema({
//     loc: { type: String, coordinates: [Number]},
//     name: {$type: String}
// }, {typeKey: '$type'}); //  A '$type' key means this object is a type declaration


// option: validateBeforreSave

// var schema = new Schema({name:String});
// schema.set('validateBeforeSave', false);
// schema.path('name').validate(function (value) {
//     return v != null;
// });
//
// var M = mongoose.model('Person', schema);
// var m = new M({ name: null});
// m.validate(function (err) {
//     console.log(err);
// });
// m.save();

// Option: versionKey

// var mongoose  = require('mongoose');
// //mongoose.connect('mongodb://localhost/thingtest');
// var Schema = mongoose.Schema;
//
// var schema = new Schema({ name: 'string'},{versionKey:'_somethingElse'});
// // var Thing = mongoose.model('Thing',schema);
// // var thing = new Thing({name: 'mongoose v3'});
// // thing.save();
//
//
// // customized version key
// new Schema({name: 'string'}, {versionKey: '_somethingElse'});
// var Thing = mongoose.model('Thing', schema);
// var thing = new Thing({name: 'mongoose v3'});
// thing.save();

// option : skipVersioning

// var mongoose  = require('mongoose');
// //mongoose.connect('mongodb://localhost/thingtest');
// var Schema = mongoose.Schema;
//
// var schema = new Schema({ name: 'string'},{versionKey:'_somethingElse'});
// new Schema({name:'string'}, {versionKey: false });
// var Thing = mongoose.model('Thing',schema);
// var thing = new Thing({name: 'no versioning please'});
// thing.save();

// Option: useNestedStrict

//
// var mongoose  = require('mongoose');
// var Schema = mongoose.Schema;
//
// var childSchema = new Schema({}, {strict: false});
// var parentSchema =  new Schema({ child: childSchema},{strict:'throw'});
// var Parent = mongoose.model('Parent',parentSchema);
// Parent.update({}, {'child.name':'Luke Skywalker'}, function (error) {
//
// });
//
// var update ={'child.name': 'Luke Skywalker'};
// var opts ={strict: false};
// Parent.update({}, update, opts, function (error) {
//
// })


