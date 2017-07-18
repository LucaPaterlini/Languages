let mongoose  = require('mongoose');
mongoose.Promise = Promise;
// let schema = new mongoose.Schema({name:'string',size:'string'});
// let Tank = mongoose.model('Tank',schema);

let yourSchema = new mongoose.Schema({});
// let Tank = mongoose.model('Tank',yourSchema);
//
// let small = new Tank({size: 'small'});
// small.save(function (err) {
//     if (err) return handleError(err);
// });
//
// Tank.create({size:'small'}, function (err,small) {
//     if (err) return handleError(err);
// });
//
// var connection = mongoose.createConnection('mongodb://localhost:27017/test');
// var Tank = connection.model('Tank', yourSchema);

//Tank.find({ size: 'small' }).where('createdDate').gt(oneYearAgo).exec(callback);

Tank.remove({ size: 'large' }, function (err) {
    if (err) return handleError(err);
    // removed!
});
