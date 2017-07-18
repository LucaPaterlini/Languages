/**
 * Created by pater92 on 07/02/17.
 */
var events = require('events');
var eventEmitter = new events.EventEmitter();
var connectHandler = function connected() {
    console.log('connection successful.');
    eventEmitter.emit('data_received');
}
eventEmitter.on('connection',connectHandler);

eventEmitter.on('data_received',function () {
    console.log('data received successfully.');
});

eventEmitter.emit('connection');