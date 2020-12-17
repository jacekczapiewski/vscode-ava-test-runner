import { debug, window } from 'vscode';
import { getActiveTestFilePath, getModuleBaseDir } from '../helpers/PathsHelpers';

export default function singleTestDebugRunner(test: string) {
	try {
		const activeFilePath = getActiveTestFilePath();
		const moduleBaseDir = getModuleBaseDir();

		debug.startDebugging(undefined, {
			type: 'node',
			request: 'launch',
			name: 'Debug AVA test',
			cwd: moduleBaseDir,
			runtimeExecutable: 'npm',
			runtimeArgs: [
				'test',
				activeFilePath,
				'--',
				`-m='${test}'`,
			],
			outputCapture: 'std',
			skipFiles: ['<node_internals>/**/*.js'],
		});
	} catch (e) {
		window.showErrorMessage(e.message);
	}
}
