import * as vscode   from 'vscode';
import { TokenType } from '../enum/token-type';
import { Token }     from './token';

export interface LineInfo {
    line          : vscode.TextLine;
    sgfntTokenType: TokenType;
    sgfntTokens   : TokenType[];
    tokens        : Token[];
}