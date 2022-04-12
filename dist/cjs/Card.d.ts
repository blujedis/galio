import React from 'react';
import { ImageStyle, ViewStyle } from 'react-native';
import { BaseProps, ThemeType } from './types';
export declare type CardStyles = ReturnType<typeof styles>;
export interface CardProps extends BaseProps {
    card?: boolean;
    shadow?: boolean;
    borderless?: boolean;
    image?: string;
    imageBlockStyle?: string;
    imageStyle?: ImageStyle;
    avatar?: string;
    location?: string;
    locationColor?: boolean | string;
    title?: string;
    titleColor?: string;
    caption?: string;
    captionColor?: string;
    footerStyle?: ViewStyle;
}
declare const styles: (theme: ThemeType) => {
    card: {
        borderWidth: number;
        backgroundColor: string;
        width: number;
        marginVertical: number;
    };
    footer: {
        justifyContent: "flex-start";
        alignItems: "center";
        paddingHorizontal: number;
        paddingVertical: number;
        backgroundColor: string;
        zIndex: number;
    };
    avatar: {
        width: number;
        height: number;
        borderRadius: number;
    };
    title: {
        justifyContent: "center";
    };
    imageBlock: {
        borderWidth: number;
        overflow: "hidden";
    };
    image: {
        width: string;
        height: number;
    };
    round: {
        borderRadius: number;
    };
    rounded: {
        borderRadius: number;
    };
};
declare const _default: React.FC<React.PropsWithChildren<CardProps>>;
export default _default;
