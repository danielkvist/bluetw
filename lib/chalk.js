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
	console.log(chalk.green(`✔ success: ${msg}`));
};

const err = (errType, msg) => {
	console.log(chalk.red(`❌ ${errType}: ${msg}`));
};

module.exports = {
	welcome,
	success,
	err,
};
