const fs = require('fs');

const { AuthError, PostError, MediaError } = require('./err');
const chalk = require('./chalk');
const config = require('./config');
const parseArgs = require('./args');
const twit = require('./twit');

const tweet = async (auth, args) => {
	const { m: msg, i: img } = args;

	if (!msg.trim().length) {
		throw new PostError('message cannot be empty');
	} else if (msg.trim().length > 280) {
		throw new PostError('tweet message exceeds the 280 characters');
	}

	if (!img.length) {
		await twit.post(auth, msg.trim());
		chalk.success('tweet published!');
		return;
	}

	if (fs.existsSync(img[0])) {
		chalk.success(`file ${img[0]} exist`);
	} else {
		throw new MediaError(`file "${img[0]}" not found`);
	}

	const [path, alt] = img;
	if (!alt.trim().length) {
		throw new MediaError('image alt text cannot be empty');
	}

	await twit.postWithImage(auth, msg, path, alt);
	chalk.success('tweet with media published!');
};

const init = async () => {
	const args = parseArgs();
	const auth = await config.credentials();

	try {
		await tweet(auth, args);
	} catch (err) {
		if (err instanceof AuthError) {
			chalk.err('auth', err.message);
			return;
		}

		if (err instanceof PostError) {
			chalk.err('tweet', err.message);
			return;
		}

		if (err instanceof MediaError) {
			chalk.err('media', err.message);
			return;
		}

		chalk.err('unknown', err);
		return;
	}
};

module.exports = init;
