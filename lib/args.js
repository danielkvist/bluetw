const yargs = require('yargs');

const parseArgs = () => {
	const argv = yargs
		.option('tweet', {
			alias: 't',
			type: 'string',
			default: '',
			description: 'Your tweet',
		})
		.alias('h', 'help').argv;
	return argv;
};

module.exports = parseArgs;
