'use strict';
import * as vscode from 'vscode';
import StartUp     from './start-up';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(vscode.commands.registerTextEditorCommand("wictor.autoalignment", (editor) => new StartUp(editor)));
}
export function deactivate() { }
