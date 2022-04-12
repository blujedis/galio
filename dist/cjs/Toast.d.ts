import React, { ReactNode } from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import { BaseColorType, BaseProps } from './types';
export interface ToastProps extends BaseProps {
    style?: ViewStyle;
    children?: ReactNode;
    isShow?: boolean;
    positionIndicator?: 'top' | 'center' | 'bottom';
    positionOffset?: number;
    fadeInDuration?: number;
    fadeOutDuration?: number;
    color?: BaseColorType;
    round?: boolean;
    textStyle?: TextStyle;
    useNativeDriver?: boolean;
}
declare const _default: React.FC<React.PropsWithChildren<ToastProps>>;
export default _default;
