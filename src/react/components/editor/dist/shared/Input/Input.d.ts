import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';
type InputProps = {
    className?: string;
    inputClassName?: string;
    placeholder?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export declare const Input: FC<InputProps>;
export {};
