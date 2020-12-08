const fs = require('fs');
const twit = require('twit');

const { AuthError, PostError } = require('./err');

const newClient = async (auth) => {
	const client = new twit({
		...auth,
		timeout_ms: 60 * 1000,
		strictSSL: true,
	});

	await client
		.get('account/verify_credentials', { skip_status: true })
		.catch((err) => {
			throw new AuthError(
				'something went wrong while verifying auth credentials, please verify your tokens!',
				err
			);
		});

	return client;
};

const post = async (auth, msg) => {
	const client = await newClient(auth);

	client.post('statuses/update', { status: msg }).catch((err) => {
		throw new PostError('something went wrong while tweeting!', err);
	});
};

// TODO: Use promise-based API
const postWithImage = async (auth, msg, imgPath, altText) => {
	const client = await newClient(auth);
	const b64content = fs.readFileSync(imgPath, { encoding: 'base64' });

	client.post(
		'media/upload',
		{ media_data: b64content },
		(err, data, _response) => {
			const mediaIdStr = data.media_id_string;
			const meta_params = { media_id: mediaIdStr, alt_text: { text: altText } };

			if (err) {
				throw new PostError('something went wrong while pushing image!');
			}

			client.post(
				'media/metadata/create',
				meta_params,
				(err, _data, _response) => {
					if (err) {
						throw new PostError(
							'something went wrong while creating media!',
							err
						);
					}

					const params = {
						status: msg,
						media_ids: [mediaIdStr],
					};

					client.post('statuses/update', params, (err, _data, _response) => {
						if (err) {
							throw new PostError('something went wrong while tweeting!', err);
						}
					});
				}
			);
		}
	);
};

module.exports = {
	post,
	postWithImage,
};
