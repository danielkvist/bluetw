const yargs = require('yargs');

const parseArgs = () => {
	const argv = yargs
		.option('message', {
			alias: 'm',
			type: 'string',
			default: '',
			description: 'tweet message',
		})
		.option('image', {
			alias: 'i',
			type: 'array',
			default: [],
			description: 'add image with an alt text',
		})
		.example(
			'bluetw -m "hello, world"',
			'publish a tweet with the text "hello, world"'
		)
		.example(
			'bluetw -m "hello, world" -i meme.png "a meme"',
			'publish a tweet with the text "hello, world" with an image with an alt text'
		)
		.help().argv;
	return argv;
};

module.exports = parseArgs;
