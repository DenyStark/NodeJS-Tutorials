'use strict'

const events	= require('events');
const util		= require('util');

// * emit ----------------------------------------------------------

let myEmit = new events.EventEmitter();

myEmit.on('someEvent1', function(text) {
	console.log(`someEvent: ${text}`);
});

myEmit.emit('someEvent1', "hello world");

// * util ----------------------------------------------------------

let Objects = function(type) {
	this.type = type;
};

util.inherits(Objects, events.EventEmitter);

let obj1 = new Objects('number');
let obj2 = new Objects('text');
let obj3 = new Objects('binary');

let objects = [obj1, obj2, obj3];
objects.forEach(function(obj) {
	obj.on('someEvent2', function(value) {
		console.log(`type(${obj.type}): ${value}`);
	});
});

obj1.emit('someEvent2', 15);
obj2.emit('someEvent2', "hello world");
obj3.emit('someEvent2', 0b101001);