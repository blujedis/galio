import React, { ReactNode } from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import Icon, { IconProps } from './atomic/ions/Icon';
import { BaseProps, ThemeType } from './types';
export declare type AccordianStyles = ReturnType<typeof styles>;
export declare type AccordianActionHandler = (item?: AccordianItem, index?: number) => void;
export declare type AccordianItem = {
    title: string;
    content: ReactNode;
    icon: IconProps;
} & Record<string, unknown>;
export interface AccordianHeaderProps {
    expanded: boolean;
    expandedIcon: IconProps;
    chapterIcon: IconProps;
    headerStyle: ViewStyle;
    title: ReactNode;
    icon: typeof Icon;
}
export interface AccordianItemsProps {
    expanded: boolean;
    expandedIcon: IconProps;
    headerStyle: ViewStyle;
    contentStyle: TextStyle;
    animationStyle: ViewStyle;
    icon: typeof Icon;
    index: number;
    item: AccordianItem;
    onAccordionOpen: AccordianActionHandler;
    onAccordionClose: AccordianActionHandler;
    setSelected: (index: number) => void;
    styles: AccordianStyles;
}
export interface AccordianProps extends BaseProps {
    dataArray: AccordianItem[];
    icon: typeof Icon;
    expandedIcon: IconProps;
    headerStyle: ViewStyle;
    contentStyle: TextStyle;
    listStyle: ViewStyle;
    animationStyle: ViewStyle;
    opened: boolean;
    onAccordionOpen: AccordianActionHandler;
    onAccordionClose: AccordianActionHandler;
}
declare const styles: (theme: ThemeType) => {
    container: {
        flex: number;
        width: number;
        borderRadius: number;
        padding: number;
        shadowColor: string;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
        backgroundColor: string;
    };
    header: {
        padding: number;
    };
    content: {
        padding: number;
    };
};
declare const _default: React.FC<AccordianProps>;
export default _default;
