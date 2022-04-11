import React from 'react';
import { BaseProps } from '../../types';
export interface LinkProps extends BaseProps {
    onPress?: () => void;
}
declare const _default: React.ForwardRefExoticComponent<Pick<React.PropsWithChildren<LinkProps>, keyof LinkProps> & React.RefAttributes<typeof React.Component | React.FC<React.PropsWithChildren<LinkProps>> | React.ForwardRefExoticComponent<React.PropsWithChildren<LinkProps>>>>;
export default _default;
