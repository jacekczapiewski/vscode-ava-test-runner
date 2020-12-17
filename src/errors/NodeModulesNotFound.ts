export default class NodeModulesNotFound extends Error {
	constructor() {
		super('node_modules directory relative to file not found.');
	}
}
