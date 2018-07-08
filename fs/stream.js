'use strict'

const fs = require('fs');

let readStream = fs.createReadStream(__dirname + '/tx.txt', 'utf8');
let writeStream = fs.createWriteStream(__dirname + '/txNew.txt');
let writeStreamPipe = fs.createWriteStream(__dirname + '/txNewPipe.txt');

readStream.on('data', function(chunk) {
	console.log(`Write ${chunk.length} symbols`);

	writeStream.write(chunk);
});

// * pipe ---------------------------------------------------------------

readStream.pipe(writeStreamPipe);