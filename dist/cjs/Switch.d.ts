import React from 'react';
import { SwitchProps as RNSwitchProps } from 'react-native';
import { BaseColorType, BaseProps } from './types';
export interface SwitchProps extends RNSwitchProps, BaseProps {
    color?: BaseColorType;
    disabled?: boolean;
    initialValue?: boolean;
    trackColor?: {
        false: string;
        true: string;
    };
    ios_backgroundColor?: string;
    onChange?: () => void;
}
declare const _default: React.FC<SwitchProps>;
export default _default;
