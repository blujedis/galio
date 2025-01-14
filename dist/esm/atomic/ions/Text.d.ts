import React from 'react';
import { BaseProps } from '../../types';
export interface TextProps extends BaseProps {
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h5?: boolean;
    p?: boolean;
    size?: number;
    color?: string;
    muted?: boolean;
    bold?: boolean;
    italic?: boolean;
}
declare const _default: React.FC<React.PropsWithChildren<TextProps>>;
export default _default;
