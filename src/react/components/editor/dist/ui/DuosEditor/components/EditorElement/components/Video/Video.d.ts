import { CSSProperties } from 'react';
import { Node } from 'slate';
import { RenderElementProps } from 'slate-react';
import { PropsWithChildren } from '../../../../../../shared';
type VideoProps = {
    style?: CSSProperties;
    element: Node;
} & RenderElementProps['attributes'];
declare const Video: import('react').ForwardRefExoticComponent<Omit<PropsWithChildren<VideoProps>, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export { Video };
