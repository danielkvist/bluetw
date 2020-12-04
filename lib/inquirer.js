const fs = require('fs');
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

const askMsg = () => {
	const questions = [
		{
			name: 'msg',
			type: 'input',
			message: "🐦 What's happening?",
			validate: function (value) {
				if (value.trim().length) {
					return true;
				} else if (value.length > 280) {
					return 'Sorry but your message exceeds the 280 characters!';
				} else {
					return 'Oops, looks like you forgot to write something!';
				}
			},
		},
	];

	return inquirer.prompt(questions);
};

const askImg = () => {
	const questions = [
		{
			name: 'img',
			type: 'input',
			message: '📸 Do you want to add an image? (optional)',
			validate: function (value) {
				if (!value) return true;

				if (fs.existsSync(value)) {
					return true;
				} else {
					return "Ouch, looks like that file doesn't exist!";
				}
			},
		},
	];

	return inquirer.prompt(questions);
};

const askImgAlt = () => {
	const questions = [
		{
			name: 'alt',
			type: 'input',
			message: "👀 What's in your image?",
			validate: function (value) {
				if (value.trim().length) {
					return true;
				} else {
					return 'Sorry but the alt text cannot be empty!';
				}
			},
		},
	];

	return inquirer.prompt(questions);
};

module.exports = {
	askCreds,
	askMsg,
	askImg,
	askImgAlt,
};
