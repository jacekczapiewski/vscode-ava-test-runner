export const AVA_TEST_RUNNER_TERMINAL_NAME = 'AVA test runner';

export const EXTENSION_NAME = 'ava-test-runner';

export enum Command {
	RUN_ALL_TESTS_IN_ACTIVE_FILE = 'RUN_ALL_TESTS_IN_ACTIVE_FILE',
	RUN_SINGLE_TEST = 'RUN_SINGLE_TEST',
	RUN_SINGLE_TEST_AT_CURSOR = 'RUN_SINGLE_TEST_AT_CURSOR',
	DEBUG_SINGLE_TEST = 'DEBUG_SINGLE_TEST',
}

export const TEST_FIND_REGEX = new RegExp(/test\(\s*'(.+)'/g);
