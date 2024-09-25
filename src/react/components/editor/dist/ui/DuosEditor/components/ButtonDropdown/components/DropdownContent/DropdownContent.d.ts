import { FC } from 'react';
import { PropsWithChildren } from '../../../../../../shared';
type DropdownContentProps = {
    title: string;
    closeTooltip: () => void;
};
export declare const DropdownContent: FC<PropsWithChildren<DropdownContentProps>>;
export {};
