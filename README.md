# NodeJS-Tutorials
NodeJS "Hello world"



### Table of Contents  

* [File Path](#file-path)
* [ES6](#es6)
* [Events](#events)
* [File System](#file-system)
	* [Async](#async)
	* [Sync](#sync)
	* [Stream](#stream)
* [Modules](#modules)

<br />




## File Path

**Directory**

```
console.log(__dirname)
```

**Filename**

```
console.log(__filename)
```

<br />



## ES6

```
let number = 6;
console.log(`number is ${number}`);
```

<br />



## Events

**events**

```
const events = require('events');

let myEmit = new events.EventEmitter();

myEmit.on('someEvent1', function(text) {
	console.log(`someEvent: ${text}`);
});

myEmit.emit('someEvent1', "hello world");
```

**util**

```
const util = require('util');

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
```

<br />



## File System

### Async

```
const fs = require('fs');
```

**Read**

```
fs.readFile('text1.txt', 'utf-8', function(error, data) {
	console.log("read async complete");
});
```

**Write**

```
let text3 = "world";
fs.writeFile('text3.txt', text3, function(error, data) {
	console.log("write async complete");
});
```

**Delete**

```
fs.unlink(fileName, function() {
	console.log(`file ${fileName} async deleted`);
});
```

**Directory**

```
fs.mkdir('new', function() {
	console.log("create directory async complete");
});

fs.rmdir('new', function() {
	console.log("remove directory async complete");
});
```
**rmdir** *work only for empty directory*

### Sync

```
const fs = require('fs');
```

**Read**

```
let fileText1 = fs.readFileSync('text1.txt', 'utf-8');
console.log("read complete");
```

**Write**

```
let text2 = "world";
fs.writeFileSync('text2.txt', text2);
```

**Delete**

```
fs.unlinkSync(fileName); 
console.log(`file ${fileName} deleted`);
```

**Directory**

```
fs.mkdirSync('new');
console.log("create directory complete");

fs.rmdirSync('new');
console.log("remove directory complete");
```
**rmdirSync** *work only for empty directory*

### Stream

```
const fs = require('fs');

let readStream      = fs.createReadStream(__dirname + '/tx.txt', 'utf8');
let writeStream     = fs.createWriteStream(__dirname + '/txNew.txt');
let writeStreamPipe = fs.createWriteStream(__dirname + '/txNewPipe.txt');

readStream.on('data', function(chunk) {
	console.log(`Write ${chunk.length} symbols`);
	writeStream.write(chunk);
});

readStream.pipe(writeStreamPipe);
```

<br />



## Modules

```
module.exports.print = (text) => {
	console.log(text);
};
```

**or**

```
let printText = function (text) {
	return `text: ${text}`;
};

let world = "world";

module.exports = {
	printText: printText,
	world: world
};
```
