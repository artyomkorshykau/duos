import { FC, ReactNode } from 'react';
import { PropsWithChildren } from '../types';
type ModalProps = {
    title?: ReactNode;
    footer?: ReactNode;
    contentClassName?: string;
};
export declare const Modal: FC<PropsWithChildren<ModalProps>>;
export {};
