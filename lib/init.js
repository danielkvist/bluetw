const fs = require('fs');
const clear = require('clear');

const { AuthError, PostError, MediaError } = require('./err');
const chalk = require('./chalk');
const config = require('./config');
const inquirer = require('./inquirer');
const parseArgs = require('./args');
const pkg = require('../package.json');
const twit = require('./twit');

const useFlags = async (auth, args) => {
	const { m: msg, i: img } = args;

	if (img[0] !== '' && img.length < 2) {
		throw new PostError(`image "${img[0]}" needs an alt text`);
	}

	if (!img[0]) {
		if (msg.trim().length < 0) {
			throw new PostError('tweet message cannot be empty');
		}

		if (msg.length > 280) {
			throw new PostError('tweet message exceeds the 280 characters');
		}

		await twit.post(auth, msg);
		chalk.success('tweet published!');
		return;
	}

	const [imgPath, alt] = img;

	if (!fs.existsSync(imgPath)) {
		throw new MediaError(`file "${imgPath}" not found`);
	}

	await twit.postWithImage(auth, msg, imgPath, alt);
	chalk.success('tweet with media published!');
};

const useInquirer = async (auth) => {
	clear();
	chalk.welcome(pkg.name);

	const { msg } = await inquirer.askMsg();
	const { img } = await inquirer.askImg();

	if (!img) {
		await twit.post(auth, msg);
		chalk.success('tweet published!');
		return;
	}

	const { alt } = await inquirer.askImgAlt();
	await twit.postWithImage(auth, msg, img, alt);
	chalk.success('tweet with media published!');
};

const init = async () => {
	const args = parseArgs();
	const auth = await config.credentials();

	try {
		if (args.m) {
			await useFlags(auth, args);
			return;
		}

		await useInquirer(auth);
	} catch (err) {
		if (err instanceof AuthError) {
			chalk.err('auth', err.message);
			return;
		}

		if (err instanceof PostError) {
			chalk.err('post', err.message);
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
