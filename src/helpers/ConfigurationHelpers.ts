import { workspace } from 'vscode';

interface IExtensionConfiguration {
	directoryReplaceFrom?: string,
	directoryReplaceTo?: string;
	extensionReplaceFrom?: string;
	extensionReplaceTo?: string;
}

// eslint-disable-next-line import/prefer-default-export
export function getExtensionConfiguration(): IExtensionConfiguration {
	const avaConfiguration = workspace.getConfiguration('ava');

	const directoryReplaceFrom: string | undefined = avaConfiguration.get('directoryReplaceFrom');
	const directoryReplaceTo: string | undefined = avaConfiguration.get('directoryReplaceTo');
	const extensionReplaceFrom: string | undefined = avaConfiguration.get('extensionReplaceFrom');
	const extensionReplaceTo: string | undefined = avaConfiguration.get('extensionReplaceTo');

	return {
		directoryReplaceFrom,
		directoryReplaceTo,
		extensionReplaceFrom,
		extensionReplaceTo
	};
}
