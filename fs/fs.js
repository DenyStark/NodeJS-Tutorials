'use strict'

const fs = require('fs');

// * read --------------------------------------------------------

fs.readFile('text1.txt', 'utf-8', function(error, data) {
	console.log("read async complete");
});
console.log("start async");

// * write -------------------------------------------------------

let text3 = "world";
fs.writeFile('text3.txt', text3, function(error, data) {
	console.log("write async complete");
	deleteFileAsync('text3.txt');
});

// * delete ------------------------------------------------------

function deleteFileAsync(fileName) {
	fs.unlink(fileName, function() {
		console.log(`file ${fileName} async deleted`);
	});
}

// * directory ---------------------------------------------------

fs.mkdir('new', function() {
	console.log("create directory async complete");
	fs.rmdir('new', function() {
		console.log("remove directory async complete");
	});
});

// *** rmdir work only for empty directory 