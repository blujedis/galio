import React from 'react';
import { ViewStyle, ImageStyle, TextStyle } from 'react-native';
import { BaseProps, ThemeType } from './types';
import { IconFamilyType } from './helpers/getIconType';
export declare type CheckboxStyles = ReturnType<typeof styles>;
export interface CheckBoxProps extends BaseProps {
    checkboxStyle?: ViewStyle;
    disabled?: boolean;
    flexDirection?: ViewStyle['flexDirection'];
    iconName?: string;
    iconSize?: number;
    iconFamily?: IconFamilyType | 'Galio';
    image?: string;
    imageStyle?: ImageStyle;
    initialValue?: boolean;
    label?: string;
    labelStyle?: TextStyle;
    onChange?: (current?: boolean) => void;
}
declare const styles: (theme: ThemeType) => {
    container: {
        flexDirection: "row";
        alignItems: "center";
        justifyContent: "flex-start";
    };
    checkBoxView: {
        width: number;
        height: number;
        borderWidth: number;
        alignItems: "center";
        justifyContent: "center";
        borderRadius: number;
    };
    uncheckedBoxView: {
        backgroundColor: string;
        borderColor: string;
    };
    checked: {
        backgroundColor: string;
        borderColor: string;
    };
    disabled: {
        borderColor: string;
    };
    textStyles: {
        color: string;
    };
    disabledLabel: {
        color: string;
        opacity: number;
    };
    imgStyles: {
        width: number;
        height: number;
    };
};
declare const _default: React.ForwardRefExoticComponent<Pick<React.PropsWithChildren<CheckBoxProps>, keyof CheckBoxProps> & React.RefAttributes<typeof React.Component | React.FC<React.PropsWithChildren<CheckBoxProps>> | React.ForwardRefExoticComponent<React.PropsWithChildren<CheckBoxProps>>>>;
export default _default;
