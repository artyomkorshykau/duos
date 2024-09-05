import { Editor as SlateEditor } from 'slate';
import { HEXColor } from '../shared';
export declare class SlateUtils {
    static LIST_TYPES: string[];
    static TEXT_ALIGN_TYPES: string[];
    static DEFAULT_COLOR_TEXT: string;
    static isMarkActive: (editor: SlateEditor, format: string) => boolean;
    static toggleMark: (editor: SlateEditor, format: string) => void;
    static toggleBlock: (editor: SlateEditor, format: string) => void;
    static isBlockActive: (editor: SlateEditor, format: string, blockType?: string) => boolean;
    static changeColor: (editor: SlateEditor, color: HEXColor) => void;
    static getColor: (editor: SlateEditor) => HEXColor;
    static insertImage: (editor: SlateEditor, url: string) => void;
    static insertVideo: (editor: SlateEditor, url: string) => void;
}
