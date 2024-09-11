import { FC, HTMLAttributes, ReactNode } from 'react';
import { PropsWithChildren } from '../../../../shared';
type BlockButtonProps = {
    format: string;
    icon?: ReactNode;
} & HTMLAttributes<HTMLButtonElement>;
export declare const BlockButton: FC<PropsWithChildren<BlockButtonProps>>;
export {};
