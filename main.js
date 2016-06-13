var fs = require('fs');
// data = fs.readFileSync('input.txt');
// console.log(data.toString());
fs.readFile('input.txt',function (err,data) {
  if(err) return console.error(err);
  console.log(data.toString());
});
console.log('Program ended');


var events = require('events');

eventEmitter = new events.EventEmitter();

var startedHandler = function started() {
  // body...
  console.log('program started');
}

eventEmitter.on('started',startedHandler);

var eventHandler = function connected() {
  console.log('connection connected');
  eventEmitter.emit('started');
}

eventEmitter.on('connection',eventHandler);

eventEmitter.emit('connection');


