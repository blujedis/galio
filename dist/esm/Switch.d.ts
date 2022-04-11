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
declare const _default: React.ForwardRefExoticComponent<Pick<SwitchProps, keyof SwitchProps> & React.RefAttributes<typeof React.Component | React.FC<SwitchProps> | React.ForwardRefExoticComponent<SwitchProps>>>;
export default _default;
