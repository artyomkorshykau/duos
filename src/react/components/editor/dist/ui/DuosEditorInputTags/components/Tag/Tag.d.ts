import { FC } from 'react';
import { TagDTO } from '../../TagDTO';
type TagProps = {
    tagItem: TagDTO;
    remove: () => void;
    className?: string;
};
export declare const Tag: FC<TagProps>;
export {};
