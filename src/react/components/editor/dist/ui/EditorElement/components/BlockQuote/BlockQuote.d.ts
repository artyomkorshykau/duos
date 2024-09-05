import { default as React, CSSProperties } from 'react';
import { RenderElementProps } from 'slate-react';
import { PropsWithChildren } from '../../../../shared';
type BlockQuoteProps = {
    style?: CSSProperties;
} & RenderElementProps['attributes'];
declare const BlockQuote: React.ForwardRefExoticComponent<Omit<PropsWithChildren<BlockQuoteProps>, "ref"> & React.RefAttributes<HTMLQuoteElement>>;
export { BlockQuote };
