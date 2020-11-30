const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const Configstore = require('configstore');
const twit = require('twit');

const pkg = require('./package.json');
const inquirer = require('./lib/inquirer');

const conf = new Configstore(pkg.name);

const welcomeMsg = () => {
	console.log(
		chalk.blueBright(
			figlet.textSync('Blu Twitter~', { horizontalLayout: 'full' })
		)
	);

	console.log(
		chalk.white(
			'    The CLI that allows you to tweet without leaving the terminal!'
		)
	);

	console.log('');
};

const successfulTweet = (id) => {
	console.log(chalk.green(`✔ tweet ${id} successfully published!`));
	console.log(' ');
};

const errReporter = (msg) => {
	console.log(chalk.red(`❌ error: ${msg}`));
	console.log(' ');
};

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

const init = async () => {
	clear();
	welcomeMsg();
	const auth = await credentials();

	const client = new twit({
		...auth,
		timeout_ms: 60 * 1000,
		strictSSL: true,
	});

	const { tweet } = await inquirer.askTweet();
	if (tweet.length > 280) {
		errReporter('tweet is too long!');
		return;
	}

	client.post('statuses/update', { status: tweet }, (err, data, _response) => {
		if (err) {
			errReporter(err.message);
			return;
		}

		successfulTweet(data.id_str);
	});
};

init();
