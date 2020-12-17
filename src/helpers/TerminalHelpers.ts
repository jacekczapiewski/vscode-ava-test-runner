import { window } from 'vscode';
import { AVA_TEST_RUNNER_TERMINAL_NAME } from '../constants';

// eslint-disable-next-line import/prefer-default-export
export function getTerminal() {
	const { terminals } = window;

	const terminal = terminals.find(
		({ name }) => name === AVA_TEST_RUNNER_TERMINAL_NAME,
	) ?? window.createTerminal(AVA_TEST_RUNNER_TERMINAL_NAME);

	terminal.show();

	return terminal;
}
