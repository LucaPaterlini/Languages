// let mongoose  = require('mongoose');
// mongoose.Promise = Promise;
// var Schema = mongoose.Schema;
//
// let childSchema = new Schema({name:'string'});
// let parentSchema = new Schema({
//     children: [childSchema],
//     child: childSchema
// });
//
// let Parent = mongoose.model('Parent',parentSchema);
// // let parent = new Parent({children:[{name:'Matt'},{name:'Sarah'}]});
// parent.children[0].name = 'Matthew';
//
// parent.save();
//

// let mongoose  = require('mongoose');
// mongoose.Promise = Promise;
// mongoose.connect('mongodb://localhost/test');
//
// let Schema = mongoose.Schema;
//
// let childSchema = new Schema({name:'string'});
// let parentSchema = new Schema({children: [childSchema], child: childSchema});
// let Parent = mongoose.model('Parent',parentSchema);
//
// childSchema.pre('save',function (next) {
//     if ('invalid'==this.name){
//         return next(new Error('#sadpanda'));
//     }
//     next();
// });
//
// let parent = new Parent({children: [{name: 'invalid'}]});
// parent.save(function (err) {
//     console.log(err.message)
// });
//
// mongoose.connection.close();

// let mongoose  = require('mongoose');
// mongoose.Promise = Promise;
//
// let childSchema = new mongoose.Schema({name:'string'});
// childSchema.pre('validate',function (next) {
//     console.log('2');
//     next();
// });
//
// childSchema.pre('save',function (next) {
//     console.log('3');
//     next();
// });
//
// let parentSchema = new mongoose.Schema({
//     child: childSchema,
// });
//
// parentSchema.pre('validate',function (next) {
//     console.log('1');
//     next();
// });
//
// parentSchema.pre('save',function (next) {
//     console.log('4');
//     next();
// });
//
// let parent = mongoose.model('parent',parentSchema);
// let newParent = new parent({child:"luca"})
// newParent.save();

// Add sub-doc arrays
// let mongoose  = require('mongoose');
// let Schema = mongoose.Schema;
// mongoose.Promise = Promise;
// let childSchema = new Schema({name:'string'});
// let parentSchema = new Schema({children: [childSchema], child: childSchema});
//
//
// let Parent = mongoose.model('Parent',parentSchema);
// let parent = new Parent;
//
// parent.children.push({ name: 'Liesl' });
// var subdoc = parent.children[0];
// console.log(subdoc);
// console.log(subdoc.isNew);
//
// parent.save(function (err) {
//     if(err) return handleError(err);
//     console.log('Success!')
// });
