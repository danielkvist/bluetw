const chalk = require('chalk');
const figlet = require('figlet');

const welcome = (text) => {
	console.log(
		chalk.blueBright(figlet.textSync(`~${text}~`, { horizontalLayout: 'full' }))
	);

	console.log(
		chalk.white(
			'The CLI that allows you to tweet without leaving the terminal!'
		)
	);

	console.log('');
};

const success = (msg) => {
	console.log(' ');
	console.log(chalk.green(`✔ success: ${msg}`));
	console.log(' ');
};

const err = (errType, msg) => {
	console.log(' ');
	console.log(chalk.red(`❌ ${errType}: ${msg}`));
	console.log(' ');
};

module.exports = {
	welcome,
	success,
	err,
};
