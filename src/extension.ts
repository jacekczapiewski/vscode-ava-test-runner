import * as vscode from 'vscode';
import CodelensProvider from './providers/CodeLensProvider';
import singleTestDebugRunner from './runners/SingleTestDebugRunner';
import allTestsInActiveFileRunner from './runners/AllTestsInActiveFileRunner';
import singleTestRunner from './runners/SingleTestRunner';
import { Command, EXTENSION_NAME } from './constants';
import singleTestAtCursorRunner from './runners/SingleTestAtCursorRunner';

export function activate(context: vscode.ExtensionContext) {
	const runAllTestsInActiveFileCommand = vscode.commands.registerCommand(
		`${EXTENSION_NAME}.${Command.RUN_ALL_TESTS_IN_ACTIVE_FILE}`,
		async () => {
			allTestsInActiveFileRunner();
		},
	);

	const runSingleTestCommand = vscode.commands.registerCommand(
		`${EXTENSION_NAME}.${Command.RUN_SINGLE_TEST}`,
		async (test) => {
			singleTestRunner(test);
		},
	);

	const runSingleTestAtCursor = vscode.commands.registerCommand(
		`${EXTENSION_NAME}.${Command.RUN_SINGLE_TEST_AT_CURSOR}`,
		async () => {
			singleTestAtCursorRunner();
		},
	);

	const debugSingleTest = vscode.commands.registerCommand(
		`${EXTENSION_NAME}.${Command.DEBUG_SINGLE_TEST}`,
		async (test) => {
			singleTestDebugRunner(test);
		},
	);

	context.subscriptions.push(runAllTestsInActiveFileCommand);
	context.subscriptions.push(runSingleTestCommand);
	context.subscriptions.push(runSingleTestAtCursor);
	context.subscriptions.push(debugSingleTest);

	vscode.languages.registerCodeLensProvider(
		'typescript',
		new CodelensProvider(),
	);
}

export function deactivate() {}
