import { FC, HTMLAttributes } from 'react';
import { PropsWithChildren } from '../types';
type HeadingSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingProps = {
    size?: HeadingSize;
    className?: string;
} & HTMLAttributes<HTMLHeadingElement>;
export declare const Heading: FC<PropsWithChildren<HeadingProps>>;
export {};
