import { FC, HTMLAttributes } from 'react';
import { PropsWithChildren } from '../types';
type TextSize = 't1' | 't2' | 't3';
type TextProps = {
    size?: TextSize;
} & HTMLAttributes<HTMLParagraphElement>;
export declare const Text: FC<PropsWithChildren<TextProps>>;
export {};
