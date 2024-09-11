import { FC } from 'react';
import { TagDTO } from './TagDTO';
type DuosEditorInputTagsProps = {
    allTags: TagDTO[];
    onChange?: (tags: TagDTO[]) => void;
};
export declare const DuosEditorInputTags: FC<DuosEditorInputTagsProps>;
export {};
