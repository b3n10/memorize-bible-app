const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const obj = {};
const req_array = [
	"Book",
	"Chapter",
	"Verse",
	"Translation",
	"Text"
];

req_array.forEach(arr => {
	console.log(arr);
});

/*
rl.question(req_array[0] + ": ", (answer) => {
	obj[req_array[0]] = answer;
	console.log(obj);
	rl.close();
});
*/
