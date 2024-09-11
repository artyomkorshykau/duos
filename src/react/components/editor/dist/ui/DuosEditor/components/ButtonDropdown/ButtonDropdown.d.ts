import { FC, ReactNode } from 'react';
import { PropsWithChildren } from '../../../../shared';
type ButtonDropdownProps = {
    content: ReactNode;
    dropdownTitle: string;
};
export declare const ButtonDropdown: FC<PropsWithChildren<ButtonDropdownProps>>;
export {};
