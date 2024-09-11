import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import { PropsWithChildren } from '../types';
type ButtonProps = {
    color?: 'blue' | 'red' | 'blueGradient';
    className?: string;
    isLoading?: boolean;
    spinnerSize?: number;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export declare const Button: FC<PropsWithChildren<ButtonProps>>;
export {};
