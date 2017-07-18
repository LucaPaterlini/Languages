let mongoose  = require('mongoose');
mongoose.Promise = Promise;

let personSchema = new mongoose.Schema({
   name:{
       first:'string',
       last:'string'
   },
   occupation:'string'
});

let Person = mongoose.model('Person',personSchema);
// Person.findOne({'name.last':'Ghost'}, 'name occupation', function (err, person) {
//     if(err) return handleError(err);
//     console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation)
// });

Person.find({
    occupation: /host/,
    'name.last': 'Ghost',
    age: { $gt: 17, $lt: 66},
    likes: { $in: ['vaporizing','talking']}
}).limit(10).sort({occupation: -1}).
    exec();

// Using query builder
Person.
find({ occupation: /host/ }).
where('name.last').equals('Ghost').
where('age').gt(17).lt(66).
where('likes').in(['vaporizing', 'talking']).
limit(10).
sort('-occupation').
select('name occupation').
exec(callback);




