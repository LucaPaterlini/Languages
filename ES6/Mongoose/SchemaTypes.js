/**
 * Created by pater92 on 16/05/17.
 */
// var mongoose  = require('mongoose');
// mongoose.Promise = Promise;
// var Schema  = mongoose.Schema;

// var schema = new Schema({
//     name: String,
//     binary : Buffer,
//     living: Boolean,
//     updated: {type: Date, default: Date.now},
//     age:     {type:Number, min:10, max: 165},
//     mixed: Schema.Types.Mixed,
//     _someId: Schema.Types.ObjectId,
//     array: [],
//     ofString: [String],
//     ofNumber: [Number],
//     ofDates: [Date],
//     ofBuffer: [Buffer],
//     ofBoolean: [Boolean],
//     ofMixed: [Schema.Types.Mixed],
//     ofObjectId: [Schema.Types.Mixed],
//     nested: {
//         stuff: {type: String, lowercase:true, trim: true}
//     }
// });
//
//
// // example use
//
// var Thing = mongoose.model('Thing',schema);
//
// var m = new Thing;
// m.name = 'Statue of Liberty';
// m.age = 125;
// m.updated = new Date;
// m.binary = new Buffer(0);
// m.living = false;
// m.mixed = {any:{thing: 'i want'}};
// m.markModified('mixed');
// m._someId = new mongoose.Types.ObjectId;
// m.array.push(1);
// m.ofString.push("strings!");
// m.ofNumber.unshift(1,2,3,4);
// m.ofDates.addToSet(new Date);
// m.ofBuffer.pop();
// m.ofMixed = [1,[],'three',{four: 5 }];
// m.nested.stuff = 'good';
// m.save();

// var mongoose  = require('mongoose');
// mongoose.Promise = Promise;
// var Schema  = mongoose.Schema;
//
//
// var numberSchema = new Schema({
//     integerOnly:{
//         type: Number,
//         get: v => Math.round(v),
//         set: v => Math.round(v)
//     }
// });
//
// var Number_l = mongoose.model('Number',numberSchema);
// var doc =  new Number_l();
// doc.integerOnly = 2.001;
// console.log(doc.integerOnly)


// Dates -----

// var mongoose  = require('mongoose');
// mongoose.Promise = Promise;
// var Schema  = mongoose.Schema;
//
//
// let Assignment = mongoose.model('Assignment',{dueDate: Date});
// Assignment.findOne(function (err,doc) {
//     doc.dueDate.setMonth(3);
//     doc.save();
//     doc.markModified('dueDate');
//     doc.save();
// });
