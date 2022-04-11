import React from 'react';
import { BaseProps, ThemeType } from './types';
export declare type BlockStyles = ReturnType<typeof styles>;
export interface BlockProps extends BaseProps {
    bottom?: boolean;
    card?: boolean;
    center?: boolean;
    flex?: boolean | number;
    fluid?: boolean;
    height?: number;
    left?: boolean;
    middle?: boolean;
    right?: boolean;
    row?: boolean;
    safe?: boolean;
    shadow?: boolean;
    shadowColor?: boolean;
    space?: 'between' | 'around' | 'evenly';
    top?: boolean;
    width?: number;
}
declare const styles: (theme: ThemeType) => {
    block: {
        flexDirection: "column";
    };
    row: {
        flexDirection: "row";
    };
    middle: {
        alignItems: "center";
        justifyContent: "center";
    };
    center: {
        alignItems: "center";
        alignSelf: "center";
    };
    left: {
        alignItems: "flex-start";
    };
    right: {
        alignItems: "flex-end";
    };
    top: {
        alignItems: "flex-start";
        alignSelf: "flex-start";
    };
    bottom: {
        alignItems: "flex-end";
        alignSelf: "flex-end";
    };
    card: {
        borderRadius: number;
        borderWidth: number;
        borderColor: string;
    };
    shadow: {
        shadowColor: string;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
        elevation: number;
    };
    fluid: {
        width: string;
    };
};
declare const _default: React.ForwardRefExoticComponent<Pick<React.PropsWithChildren<BlockProps>, keyof BlockProps> & React.RefAttributes<typeof React.Component | React.FC<React.PropsWithChildren<BlockProps>> | React.ForwardRefExoticComponent<React.PropsWithChildren<BlockProps>>>>;
export default _default;
