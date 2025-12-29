const vscode = require('vscode');

// The following will hang the test.
require('./sub.js');

/**
 * @param {import('vscode').ExtensionContext} context 
 */
exports.activate = function (context) {
	console.log('Congratulations, your extension "helloworld-sample" is now active!');
	const disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World!');
	});
	context.subscriptions.push(disposable);
}
