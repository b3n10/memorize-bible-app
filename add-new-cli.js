const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout, null);
const obj = {};
const category = [
	"Book",
	"Chapter",
	"Verse",
	"Translation",
	"Text"
];

let i = 0;
const getInput = function() {
	rl.question(category[i] + ": ", (answer) => {
		obj[category[i]] = answer;
		i++;
		if (i === 5) {
			console.log(obj);
			return rl.close();
		}
		getInput();
	});
};

getInput();
/*
 * helpful article about looping through readline
 * https://jttan.com/2016/06/node-js-basic-command-line-interactive-loop/
 */

