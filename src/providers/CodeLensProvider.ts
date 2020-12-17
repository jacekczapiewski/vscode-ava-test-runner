import * as vscode from 'vscode';
import { window } from 'vscode';
import {
	CodeLensTitle, Command, EXTENSION_NAME, TEST_FIND_REGEX
} from '../constants';

export default class CodelensProvider implements vscode.CodeLensProvider {
	// eslint-disable-next-line class-methods-use-this
	public provideCodeLenses(
		document: vscode.TextDocument
	): vscode.CodeLens[] | Thenable<vscode.CodeLens[]> {
		try {
			const codeLenses: vscode.CodeLens[] = [];
			const text = document.getText();
			let matches = TEST_FIND_REGEX.exec(text);

			while (matches !== null) {
				const line = document.lineAt(document.positionAt(matches.index).line);
				const indexOf = line.text.indexOf(matches[0]);
				const position = new vscode.Position(line.lineNumber, indexOf);
				const range = document.getWordRangeAtPosition(
					position,
					new RegExp(TEST_FIND_REGEX)
				);
				if (range) {
					const test = matches[1].replace(/\\'/g, "'");
					const runCommand = {
						title: CodeLensTitle.RUN,
						command: `${EXTENSION_NAME}.${Command.RUN_SINGLE_TEST}`,
						arguments: [test]
					};
					const debugCommand = {
						title: CodeLensTitle.DEBUG,
						command: `${EXTENSION_NAME}.${Command.DEBUG_SINGLE_TEST}`,
						arguments: [test]
					};
					codeLenses.push(new vscode.CodeLens(range, runCommand));
					codeLenses.push(new vscode.CodeLens(range, debugCommand));
				}

				matches = TEST_FIND_REGEX.exec(text);
			}
			return codeLenses;
		} catch (e) {
			window.showErrorMessage(e.message);
		}

		return [];
	}
}
