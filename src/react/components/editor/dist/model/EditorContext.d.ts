import { FC } from 'react';
import { Descendant } from 'slate';
import { PropsWithChildren } from '../shared';
export type EditorContextValue = {
    uploadFile: (file: File) => Promise<string>;
    save: (value: Descendant[]) => void;
};
export declare const useEditorContext: () => EditorContextValue;
type EditorContextProviderProps = {
    value: EditorContextValue;
};
export declare const EditorContextProvider: FC<PropsWithChildren<EditorContextProviderProps>>;
export {};
