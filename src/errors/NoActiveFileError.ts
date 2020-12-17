export default class NoActiveFileError extends Error {
	constructor() {
		super('There is no active file.');
	}
}
