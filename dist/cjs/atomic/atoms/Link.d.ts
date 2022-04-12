import React from 'react';
import { BaseProps } from '../../types';
export interface LinkProps extends BaseProps {
    onPress?: () => void;
}
declare const _default: React.FC<React.PropsWithChildren<LinkProps>>;
export default _default;
