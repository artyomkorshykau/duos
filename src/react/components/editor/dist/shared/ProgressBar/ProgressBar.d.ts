import { FC, ReactNode } from 'react';
type ProgressBarProps = {
    max: number;
    current: number;
    className?: string;
    trackDotElement?: ReactNode;
};
export declare const ProgressBar: FC<ProgressBarProps>;
export {};
