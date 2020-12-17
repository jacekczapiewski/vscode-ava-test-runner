import { window } from 'vscode';
import { getActiveTestFilePath, getModuleBaseDir } from '../helpers/PathsHelpers';
import { getTerminal } from '../helpers/TerminalHelpers';

export default function singleTestRunner(test: string) {
	try {
		const activeFilePath = getActiveTestFilePath();
		const moduleBaseDir = getModuleBaseDir();
		const terminal = getTerminal();

		terminal.sendText(
			`cd ${moduleBaseDir} && npm test ${activeFilePath} -- -m="${test}"`,
		);
	} catch (e) {
		window.showErrorMessage(e.message);
	}
}
