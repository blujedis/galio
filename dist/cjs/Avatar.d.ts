import React from 'react';
import { ImageProps, ImageStyle, ViewStyle, TextStyle } from 'react-native';
import { BaseProps, ThemeType } from './types';
export declare type AvatarStyles = ReturnType<typeof styles>;
export interface AvatarProps extends BaseProps {
    source?: ImageProps['source'];
    size?: number;
    label?: string;
    labelColor?: string;
    backgroundColor?: string;
    labelStyle?: TextStyle;
    imageProps?: ImageProps;
    imageStyle?: ImageStyle;
    containerStyle?: ViewStyle;
}
declare const styles: (theme: ThemeType) => {
    labelContainerWithInset: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    labelText: {
        color: string;
        backgroundColor: string;
    };
};
declare const _default: React.ForwardRefExoticComponent<Pick<React.PropsWithChildren<AvatarProps>, keyof AvatarProps> & React.RefAttributes<typeof React.Component | React.FC<React.PropsWithChildren<AvatarProps>> | React.ForwardRefExoticComponent<React.PropsWithChildren<AvatarProps>>>>;
export default _default;
