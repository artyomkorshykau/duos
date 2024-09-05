import { FC } from 'react';
import { Descendant } from 'slate';
import { EditorContextValue } from '../../model';
type DuosEditorProps = {
    onValueChange?: (value: Descendant[]) => void;
    initialValue?: Descendant[];
    className?: string;
} & EditorContextValue;
export declare const DuosEditor: FC<DuosEditorProps>;
export {};
