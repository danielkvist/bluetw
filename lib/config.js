const Configstore = require('configstore');

const pkg = require('../package.json');
const inquirer = require('./inquirer');

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
		const credentials = await inquirer.askTwitterCreds();

		// Load credentials received by the user
		auth = { ...credentials };

		// Save credentials
		conf.set({ ...auth });
	}

	return auth;
};

module.exports = {
	credentials,
};
