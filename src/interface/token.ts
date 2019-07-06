import { TokenType } from "../enum/token-type";

export interface Token {
    type: TokenType;
    text: string;
}