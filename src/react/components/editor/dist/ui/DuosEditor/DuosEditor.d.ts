import { default as React } from 'react';
import { Descendant } from 'slate';
import { EditorContextValue } from '../../model';
import { Option } from '../../shared/Select';
import { TagDTO } from '../DuosEditorInputTags/TagDTO';
type DuosEditorProps<SelectOptionValue> = {
    initialValue?: Descendant[];
    onValueChange?: (value: Descendant[]) => void;
    image: File | string | null;
    onChangeImage: (image: File) => void;
    removeImage: () => void;
    selectOptions: Option<SelectOptionValue>[];
    onChangeSelectOptions: (selectOptions: SelectOptionValue) => void;
    selectPlaceholder: string;
    availableTags: TagDTO[];
    onChangeTagInput: (tags: TagDTO[]) => void;
    defaultTagInputValues?: TagDTO[];
    className?: string;
} & EditorContextValue;
export declare function DuosEditor<SelectOptionValue>({ initialValue, onValueChange, className, image, removeImage, onChangeImage, uploadFile, selectOptions, availableTags, onChangeSelectOptions, onChangeTagInput, selectPlaceholder, defaultTagInputValues, }: DuosEditorProps<SelectOptionValue>): React.JSX.Element;
export {};
