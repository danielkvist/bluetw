class Error {
	constructor(message) {
		this.message = message;
		this.name = 'Error';
		this.originalErr = null;
	}
}

class AuthError extends Error {
	constructor(message, err = null) {
		super(message);
		this.name = 'AuthError';
		this.originalErr = err;
	}
}

class MediaError extends Error {
	constructor(message, err = null) {
		super(message);
		this.name = 'MediaError';
		this.originalErr = err;
	}
}

class PostError extends Error {
	constructor(message, err = null) {
		super(message);
		this.name = 'PostError';
		this.originalErr = err;
	}
}

module.exports = {
	Error,
	AuthError,
	MediaError,
	PostError,
};
