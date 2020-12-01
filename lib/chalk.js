const chalk = require('chalk');
const figlet = require('figlet');

const welcome = (text) => {
	console.log(
		chalk.blueBright(figlet.textSync(`${text}~`, { horizontalLayout: 'full' }))
	);

	console.log(
		chalk.white(
			'    The CLI that allows you to tweet without leaving the terminal!'
		)
	);

	console.log('');
};

const success = (id) => {
	console.log(chalk.green(`✔ tweet ${id} successfully published!`));
	console.log(' ');
};

const err = (msg) => {
	console.log(chalk.red(`❌ error: ${msg}`));
	console.log(' ');
};

module.exports = {
	welcome,
	success,
	err,
};
