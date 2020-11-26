const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const welcomeMsg = () => {
	console.log(
		chalk.blueBright(
			figlet.textSync('Blu Twitter~', { horizontalLayout: 'full' })
		)
	);

	console.log(
		chalk.white(
			'    The CLI that allows you to tweet without leaving the terminal!'
		)
	);
};

const init = () => {
	clear();
	welcomeMsg();
};

init();
