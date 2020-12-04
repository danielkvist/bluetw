const yargs = require('yargs');

const parseArgs = () => {
	const argv = yargs
		.option('message', {
			alias: 'm',
			type: 'string',
			default: '',
			description: 'Tweet message',
		})
		.option('image', {
			alias: 'i',
			type: 'array',
			default: '',
			description: 'Add image with an alt text',
		})
		.help().argv;
	return argv;
};

module.exports = parseArgs;
