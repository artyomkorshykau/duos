import { FC } from 'react';
import { TagDTO } from './TagDTO';
type DuosEditorInputTagsProps = {
    allTags: TagDTO[];
    onChange?: (tags: TagDTO[]) => void;
    defaultSelectedTags?: TagDTO[];
    error?: string;
};
export declare const DuosEditorInputTags: FC<DuosEditorInputTagsProps>;
export {};
