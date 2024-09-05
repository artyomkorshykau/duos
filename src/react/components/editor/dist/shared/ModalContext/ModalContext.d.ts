import { FC, ReactNode } from 'react';
import { PropsWithChildren } from '../types';
type ModalContent = (() => ReactNode) | null;
type ModalContextType = {
    open: (content: ModalContent) => void;
    close: () => void;
    content?: ModalContent;
};
export declare const useModalContext: () => ModalContextType;
export declare const ModalContextProvider: FC<PropsWithChildren>;
export {};
