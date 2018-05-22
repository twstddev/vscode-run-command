'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    const configuration = vscode.workspace.getConfiguration();
    const mappings = configuration.get('vscode.run.commands.mappings', []);

    mappings.forEach((mapping: any) => {
        const handler = vscode.commands.registerCommand(mapping.from, () => {
            vscode.commands.executeCommand(mapping.to, mapping.args);

            return Promise.resolve();
        });

        context.subscriptions.push(handler);
    });
}

// this method is called when your extension is deactivated
export function deactivate() {
}