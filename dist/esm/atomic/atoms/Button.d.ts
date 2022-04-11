import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { BaseProps, ThemeType } from '../../types';
declare type ButtonStyles = ReturnType<typeof styles>;
declare type Size = 'small' | 'large';
export interface ButtonProps extends TouchableOpacityProps, BaseProps {
    capitalize?: boolean;
    color?: keyof ButtonStyles;
    disabled?: boolean;
    icon?: string | boolean;
    iconColor?: boolean | string;
    iconFamily?: boolean | string;
    iconSize?: number;
    loading?: boolean;
    loadingSize?: Size;
    loadingColor?: string;
    lowercase?: boolean;
    onlyIcon?: boolean;
    opacity?: number;
    round?: boolean;
    shadowColor?: boolean | string;
    shadowless?: boolean;
    size?: Size | number | string;
    uppercase?: boolean;
}
declare const styles: (theme: ThemeType) => {
    defaultButton: {
        borderRadius: number;
        width: number;
        height: number;
        alignItems: "center";
        justifyContent: "center";
        margin: number;
    };
    shadow: {
        shadowColor: string;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
    };
    customText: {
        fontSize: number;
        color: string;
    };
    theme: {
        backgroundColor: string;
    };
    primary: {
        backgroundColor: string;
    };
    info: {
        backgroundColor: string;
    };
    danger: {
        backgroundColor: string;
    };
    warning: {
        backgroundColor: string;
    };
    success: {
        backgroundColor: string;
    };
    white: {
        backgroundColor: string;
    };
    black: {
        backgroundColor: string;
    };
    secondary: {
        backgroundColor: string;
    };
    grey: {
        backgroundColor: string;
    };
    transparent: {
        backgroundColor: string;
    };
    androidShadow: {
        elevation: number;
    };
};
declare const _default: React.ForwardRefExoticComponent<Pick<React.PropsWithChildren<ButtonProps>, keyof ButtonProps> & React.RefAttributes<typeof React.Component | React.FC<React.PropsWithChildren<ButtonProps>> | React.ForwardRefExoticComponent<React.PropsWithChildren<ButtonProps>>>>;
export default _default;
