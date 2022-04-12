import React from 'react';
import { ViewStyle } from 'react-native';
import { BaseProps, ThemeType } from './types';
export declare type SliderStyles = ReturnType<typeof styles>;
export interface SliderProps extends BaseProps {
    activeColor?: string;
    value?: number;
    disabled?: boolean;
    minimumValue?: number;
    maximumValue?: number;
    trackStyle?: ViewStyle;
    thumbStyle?: ViewStyle;
    step?: number;
    onSlidingComplete?: () => void;
    onSlidingStart?: () => void;
    onValueChange?: () => void;
}
export interface SliderSize {
    width: number;
    height: number;
}
export interface SliderState {
    containerSize: SliderSize;
    trackSize: SliderSize;
    thumbSize: SliderSize;
    measured: boolean;
}
declare const styles: (theme: ThemeType) => {
    container: {
        height: number;
        justifyContent: "center";
    };
    track: {
        height: number;
        width: string;
        borderRadius: number;
        position: "absolute";
        backgroundColor: string;
    };
    thumb: {
        width: number;
        height: number;
        borderRadius: number;
        borderWidth: number;
        borderColor: string;
        backgroundColor: string;
    };
    disabled: {
        backgroundColor: string;
    };
};
declare const _default: React.FC<SliderProps>;
export default _default;
