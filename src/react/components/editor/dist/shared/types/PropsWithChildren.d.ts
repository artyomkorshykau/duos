import { ReactNode } from 'react';
export type PropsWithChildren<Props = any> = Props & {
    children?: ReactNode;
};
