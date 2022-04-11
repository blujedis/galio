import React, { ReactNode } from 'react';
import { ViewStyle } from 'react-native';
import { BaseProps, ThemeType } from './types';
export declare type NavBarStyles = ReturnType<typeof styles>;
export interface NavBarProps extends BaseProps {
    back?: boolean;
    hideLeft?: boolean;
    hideRight?: boolean;
    left?: ReactNode;
    leftIconColor?: string;
    leftIconFamily?: string;
    leftIconName?: string;
    leftIconSize?: number;
    leftStyle?: ViewStyle;
    onLeftPress?: () => void;
    right?: ReactNode;
    rightStyle?: ViewStyle;
    title?: ReactNode;
    titleNumberOfLines?: number;
    titleStyle?: ViewStyle;
    transparent?: boolean;
}
declare const styles: (theme: ThemeType) => {
    navBar: {
        width: string;
        height: number;
        flexDirection: "row";
        alignItems: "center";
        justifyContent: "space-evenly";
        backgroundColor: string;
        paddingVertical: number;
    };
    title: {
        flex: number;
        height: number;
        alignItems: "center";
        justifyContent: "center";
    };
    titleTextStyle: {
        fontWeight: "400";
        fontSize: number;
        color: string;
    };
    left: {
        flex: number;
        height: number;
        justifyContent: "center";
        marginLeft: number;
    };
    right: {
        flex: number;
        height: number;
        alignItems: "center";
        justifyContent: "center";
        marginRight: number;
    };
    transparent: {
        backgroundColor: string;
        borderColor: string;
        borderWidth: number;
    };
};
declare const _default: React.ForwardRefExoticComponent<Pick<NavBarProps, keyof NavBarProps> & React.RefAttributes<typeof React.Component | React.FC<NavBarProps> | React.ForwardRefExoticComponent<NavBarProps>>>;
export default _default;
