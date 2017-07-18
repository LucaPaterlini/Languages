let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
mongoose.Promise = Promise;
let Cat = require('mongoose').model('Cat').schema;

let kitty = new Cat({ name: 'Zildjian' });

kitty.save(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('meow');
    }
});
mongoose.connection.close();