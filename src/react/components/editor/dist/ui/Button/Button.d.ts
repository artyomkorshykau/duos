import { FC, HTMLAttributes } from 'react';
import { PropsWithChildren } from '../../shared';
type ButtonProps = {
    format?: string;
} & HTMLAttributes<HTMLButtonElement>;
export declare const Button: FC<PropsWithChildren<ButtonProps>>;
export {};
