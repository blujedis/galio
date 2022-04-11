import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import { BaseProps, ThemeType } from './types';
export declare type RadioStyles = ReturnType<typeof styles>;
export interface RadioProps extends BaseProps {
    color?: string;
    containerStyle?: ViewStyle;
    radioOuterStyle?: ViewStyle;
    radioInnerStyle?: ViewStyle;
    flexDirection?: ViewStyle['flexDirection'];
    initialValue?: boolean;
    label?: string;
    labelStyle?: TextStyle;
    onChange?: () => void;
    value?: boolean;
}
declare const styles: (theme: ThemeType) => {
    container: {
        flexDirection: "row";
        alignItems: "center";
        justifyContent: "flex-start";
    };
    radioOuterStyles: {
        height: number;
        width: number;
        borderRadius: number;
        borderWidth: number;
        alignItems: "center";
        justifyContent: "center";
    };
    radioInnerStyles: {
        height: number;
        width: number;
        borderRadius: number;
    };
    disabledRadioOuter: {
        borderColor: string;
    };
    disabledRadioInner: {
        backgroundColor: string;
    };
    textStyles: {
        color: string;
    };
    disabledLabel: {
        color: string;
        opacity: number;
    };
};
declare const _default: React.ForwardRefExoticComponent<Pick<RadioProps, keyof RadioProps> & React.RefAttributes<typeof React.Component | React.FC<RadioProps> | React.ForwardRefExoticComponent<RadioProps>>>;
export default _default;
