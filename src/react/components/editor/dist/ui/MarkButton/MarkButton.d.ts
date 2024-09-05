import { FC, HTMLAttributes, ReactNode } from 'react';
type MarkButtonProps = {
    format: string;
    children?: ReactNode;
} & HTMLAttributes<HTMLButtonElement>;
export declare const MarkButton: FC<MarkButtonProps>;
export {};
