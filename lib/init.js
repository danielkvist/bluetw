const clear = require('clear');
const twit = require('twit');

const pkg = require('../package.json');
const config = require('./config');
const inquirer = require('./inquirer');
const chalk = require('./chalk');
const parseArgs = require('./args');

const init = async () => {
	clear();
	const args = await parseArgs();

	if (!(args.tweet || args.t)) chalk.welcome(pkg.name);
	const auth = await config.credentials();

	const client = new twit({
		...auth,
		timeout_ms: 60 * 1000,
		strictSSL: true,
	});

	let tweet;
	if (args.tweet || args.t) {
		tweet = args.tweet;
	} else {
		const { tweet: msg } = await inquirer.askTweet();
		tweet = msg;
	}

	if (tweet.length > 280) {
		chalk.err('tweet is too long!');
		return;
	}

	client.post('statuses/update', { status: tweet }, (err, data, _response) => {
		if (err) {
			chalk.err(err.message);
			return;
		}

		chalk.success(data.id_str);
	});
};

module.exports = init;
