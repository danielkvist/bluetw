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
			default: [],
			description: 'Add image with an alt text',
		})
		.example(
			'bluetw -m "hello, world" -i meme.png "a very good meme"',
			'Publish a tweet with the text "hello, world" and an image with an alt text'
		)
		.help().argv;
	return argv;
};

module.exports = parseArgs;
