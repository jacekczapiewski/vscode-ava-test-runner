export class NoActiveFileError extends Error {
	constructor() {
		super('There is no active file.');
	}
}

export class NodeModulesNotFound extends Error {
	constructor() {
		super('node_modules directory relative to file not found.');
	}
}
