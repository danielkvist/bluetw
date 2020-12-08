const Configstore = require('configstore');
const clear = require('clear');

const pkg = require('../package.json');
const inquirer = require('./inquirer');
const chalk = require('./chalk');

const conf = new Configstore(pkg.name);

const credentials = async () => {
	let auth = {
		consumer_key: '',
		consumer_secret: '',
		access_token: '',
		access_token_secret: '',
	};

	// Check if user has already enter the information needed
	if (
		conf.has('consumer_key') &&
		conf.has('consumer_secret') &&
		conf.has('access_token') &&
		conf.has('access_token_secret')
	) {
		auth = { ...conf.all };
	} else {
		chalk.welcome(pkg.name);
		const credentials = await inquirer.askCreds();

		// Load credentials received by the user
		auth = { ...credentials };

		// Save credentials
		conf.set({ ...auth });
		clear();
	}

	return auth;
};

const reset = () => {
	conf.delete('consumer_key');
	conf.delete('consumer_secret');
	conf.delete('access_token');
	conf.delete('access_token_secret');
};

module.exports = {
	credentials,
	reset,
};
