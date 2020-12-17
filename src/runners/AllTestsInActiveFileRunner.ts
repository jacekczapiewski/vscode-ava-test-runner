import { window } from 'vscode';
import { getActiveTestFilePath, getModuleBaseDir } from '../helpers/PathsHelpers';
import { getTerminal } from '../helpers/TerminalHelpers';

export default function allTestsInActiveFileRunner() {
	try {
		const filePath = getActiveTestFilePath();
		const moduleBaseDir = getModuleBaseDir();
		const terminal = getTerminal();

		terminal.sendText(
			`cd ${moduleBaseDir} && npm test ${filePath}`,
		);
	} catch (e) {
		window.showErrorMessage(e.message);
	}
}
