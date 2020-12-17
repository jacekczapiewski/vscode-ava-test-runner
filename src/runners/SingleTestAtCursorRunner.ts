import { Position, window } from 'vscode';
import { TEST_FIND_REGEX } from '../constants';
import singleTestRunner from './SingleTestRunner';

export default function singleTestAtCursorRunner() {
	const activeEditor = window.activeTextEditor;
	const selectionStartLine = activeEditor!.selection.start.line;
	const { document } = activeEditor!;
	const text = document.getText();

	let matchedLine;
	let matchedTest;
	let matches = TEST_FIND_REGEX.exec(text);

	while (matches !== null) {
		const line = document.lineAt(document.positionAt(matches.index).line);
		const indexOf = line.text.indexOf(matches[0]);
		const position = new Position(line.lineNumber, indexOf);
		const range = document.getWordRangeAtPosition(
			position,
			TEST_FIND_REGEX
		);

		if (range) {
			if (matchedLine && line.lineNumber > selectionStartLine && matchedTest) {
				singleTestRunner(matchedTest);
				return;
			}

			matchedLine = line.lineNumber;
			matchedTest = matches[1].replace(/\\'/g, "'");
		}

		matches = TEST_FIND_REGEX.exec(text);
	}

	window.showErrorMessage('Test at cursor wasn\'t found.');
}
