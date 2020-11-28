const inquirer = require('inquirer');

const askTwitterCreds = () => {
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

const askTweet = () => {
	const err = 'Oops, looks like you forgot to write something!';

	const questions = [
		{
			name: 'tweet',
			type: 'input',
			message: "🐦 What's happening?:",
			validate: function (value) {
				if (value.length) {
					return true;
				} else {
					return err;
				}
			},
		},
	];

	return inquirer.prompt(questions);
};

module.exports = {
	askTwitterCreds,
	askTweet,
};
