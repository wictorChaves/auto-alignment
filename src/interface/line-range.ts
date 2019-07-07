import { LineInfo } from "./line-info";

export interface LineRange {
    anchor: number;
    infos : LineInfo[];
}