class Error {
	constructor(message) {
		this.message = message;
		this.name = 'Error';
	}
}

class AuthError extends Error {
	constructor(message) {
		super(message);
		this.name = 'AuthError';
	}
}

class MediaError extends Error {
	constructor(message) {
		super(message);
		this.name = 'MediaError';
	}
}

class PostError extends Error {
	constructor(message) {
		super(message);
		this.name = 'PostError';
	}
}

module.exports = {
	Error,
	AuthError,
	MediaError,
	PostError,
};
