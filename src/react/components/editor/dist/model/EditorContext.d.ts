import { FC } from 'react';
import { PropsWithChildren } from '../shared';
export type EditorContextValue = {
    uploadFile: (file: File) => Promise<string>;
};
export declare const useEditorContext: () => EditorContextValue;
type EditorContextProviderProps = {
    value: EditorContextValue;
};
export declare const EditorContextProvider: FC<PropsWithChildren<EditorContextProviderProps>>;
export {};
