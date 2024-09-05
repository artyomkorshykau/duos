import { CSSProperties } from 'react';
import { Node } from 'slate';
import { RenderElementProps } from 'slate-react';
import { PropsWithChildren } from '../../../../shared';
type ImageProps = {
    style?: CSSProperties;
    element: Node;
} & RenderElementProps['attributes'];
declare const Image: import('react').ForwardRefExoticComponent<Omit<PropsWithChildren<ImageProps>, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export { Image };
