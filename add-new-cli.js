const readline = require('readline');
const jsonfile = require('jsonfile')

const rl = readline.createInterface(process.stdin, process.stdout, null);
const file = 'data.json';
const obj = {};
const arr = [];
const category = [
	"Book",
	"Chapter",
	"Verse",
	"Translation",
	"Text"
];

const file_arr = jsonfile.readFileSync(file);

let x = 0;
while (x < file_arr.length) {
	arr.push(file_arr[x]);
	x++;
}

let i = 0;
const getInput = function() {
	rl.question(category[i] + ": ", (answer) => {
		obj[category[i]] = answer;
		i++;
		if (i === 5) {
			arr.push(obj);
			console.log(arr);
			return rl.close();
		}
		getInput();
	});
};

getInput();
/*
 * helpful article about looping through readline
 * https://jttan.com/2016/06/node-js-basic-command-line-interactive-loop/

 jsonfile.writeFile(file, obj, function (err) {
 console.error(err)
 })
*/
