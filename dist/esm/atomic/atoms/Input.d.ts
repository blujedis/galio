import React from 'react';
import { TextInputProps } from 'react-native';
import { IconFamilyType } from '../../helpers/getIconType';
import { BaseProps } from '../../types';
export interface InputProps extends Omit<TextInputProps, 'style' | 'keyboardType' | 'secureTextEntry' | 'placeholderTextColor' | 'underlineColorAndroid'>, BaseProps {
    type?: TextInputProps['keyboardType'];
    password?: boolean;
    label?: string;
    bgColor?: string;
    rounded?: boolean;
    borderless?: boolean;
    viewPass?: boolean;
    icon?: string;
    iconColor?: string;
    family?: IconFamilyType;
    color?: string;
    help?: string;
    left?: boolean;
    right?: boolean;
    topHelp?: boolean;
    bottomHelp?: boolean;
    iconSize?: number;
}
declare const _default: React.FC<React.PropsWithChildren<InputProps>>;
export default _default;
