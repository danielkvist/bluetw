const inquirer = require('inquirer');

const askCreds = () => {
	const questions = [
		{
			name: 'consumer_key',
			type: 'input',
			message: 'Enter your Twitter Consumer Key:',
			validate: function (value) {
				if (value.length) {
					return true;
				} else {
					return 'Please, enter a valid Consumer Key!';
				}
			},
		},
		{
			name: 'consumer_secret',
			type: 'input',
			message: 'Enter your Twitter Consumer Secret:',
			validate: function (value) {
				if (value.length) {
					return true;
				} else {
					return 'Please, enter a valid Consumer Secret!';
				}
			},
		},
		{
			name: 'access_token',
			type: 'input',
			message: 'Enter your Twitter Access Token:',
			validate: function (value) {
				if (value.length) {
					return true;
				} else {
					return 'Please, enter a valid Access Token!';
				}
			},
		},
		{
			name: 'access_token_secret',
			type: 'input',
			message: 'Enter your Twitter Access Token Secret:',
			validate: function (value) {
				if (value.length) {
					return true;
				} else {
					return 'Please, enter a valid Access Token Secret!';
				}
			},
		},
	];

	return inquirer.prompt(questions);
};

module.exports = {
	askCreds,
};
