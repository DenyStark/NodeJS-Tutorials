'use trict'

const fs = require('fs');

// * read --------------------------------------------------------

let fileText1 = fs.readFileSync('text1.txt', 'utf-8');
console.log("read complete");

// * write -------------------------------------------------------

let text2 = "world";
fs.writeFileSync('text2.txt', text2);

console.log("write complete");
deleteFile('text2.txt');

// * delete ------------------------------------------------------

function deleteFile(fileName) {
	fs.unlinkSync(fileName); 
	console.log(`file ${fileName} deleted`);
}

// * directory ---------------------------------------------------

fs.mkdirSync('new');
console.log("create directory complete");

fs.rmdirSync('new');
console.log("remove directory complete");

// *** rmdirSync work only for empty directory