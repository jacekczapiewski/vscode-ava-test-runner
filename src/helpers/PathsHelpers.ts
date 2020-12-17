import { window } from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import NoActiveFileError from '../errors/NoActiveFileError';
import NodeModulesNotFound from '../errors/NodeModulesNotFound';

export function getActiveFilePath() {
	const activeEditor = window.activeTextEditor;

	if (activeEditor) {
		return activeEditor.document.uri.path;
	}

	throw new NoActiveFileError();
}

export function getActiveTestFilePath() {
	const activeFilePath = getActiveFilePath();

	const filePath = activeFilePath
		.replace(/\/tests/, '/dist-tests')
		.replace('.ts', '.js');

	return filePath;
}

export function getModuleBaseDir(): string {
	const activeFilePath = getActiveFilePath();
	let parentPath = activeFilePath.split(path.sep).slice(0, -1).join(path.sep);

	while (parentPath.length) {
		const avaModulePathToCheck = path.join(parentPath, 'node_modules/ava');

		if (fs.existsSync(avaModulePathToCheck)) {
			return parentPath;
		}

		parentPath = parentPath.split(path.sep).slice(0, -1).join(path.sep);
	}

	throw new NodeModulesNotFound();
}
