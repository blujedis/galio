import { PropsWithChildren } from 'react';

export type BaseProps = Record<string, any>;
export type BaseColorType = string;
export type ButtonColorType = string;
export interface BaseInternalProps<S extends Record<string, any> = Record<string, any>> {
  theme: ThemeType;
  styles: S;
}
export type InternalProps<P extends Record<string, any>, S extends Record<string, any> = Record<string, any>> = Required<PropsWithChildren<P & BaseInternalProps<S>>>;

export interface ThemeType {
  SIZES?: {
    BASE?: number;
    FONT?: number;
    ICON?: number;
    OPACITY?: number;
    BORDER_RADIUS?: number;
    BORDER_WIDTH?: number;
    BUTTON_WIDTH?: number;
    BUTTON_HEIGHT?: number;
    BUTTON_SHADOW_RADIUS?: number;
    BLOCK_SHADOW_OPACITY?: number;
    BLOCK_SHADOW_RADIUS?: number;
    ANDROID_ELEVATION?: number;
    CARD_BORDER_RADIUS?: number;
    CARD_BORDER_WIDTH?: number;
    CARD_WIDTH?: number;
    CARD_MARGIN_VERTICAL?: number;
    CARD_FOOTER_HORIZONTAL?: number;
    CARD_FOOTER_VERTICAL?: number;
    CARD_AVATAR_WIDTH?: number;
    CARD_AVATAR_HEIGHT?: number;
    CARD_AVATAR_RADIUS?: number;
    CARD_IMAGE_HEIGHT?: number;
    CARD_ROUND?: number;
    CARD_ROUNDED?: number;
    INPUT_BORDER_RADIUS?: number;
    INPUT_BORDER_WIDTH?: number;
    INPUT_HEIGHT?: number;
    INPUT_HORIZONTAL?: number;
    INPUT_TEXT?: number;
    INPUT_LABEL_TEXT?: number;
    INPUT_LABEL_BOTTOM?: number;
    INPUT_HELP_TEXT?: number;
    INPUT_ROUNDED?: number;
    NAVBAR_HEIGHT?: number;
    NAVBAR_VERTICAL?: number;
    NAVBAR_TITLE_FLEX?: number;
    NAVBAR_TITLE_HEIGHT?: number;
    NAVBAR_TITLE_TEXT?: number;
    NAVBAR_LEFT_FLEX?: number;
    NAVBAR_LEFT_HEIGHT?: number;
    NAVBAR_LEFT_MARGIN?: number;
    NAVBAR_RIGHT_FLEX?: number;
    NAVBAR_RIGHT_HEIGHT?: number;
    NAVBAR_RIGHT_MARGIN?: number;
    [key: string]: number;
  };
  COLORS?: {
    BODY?: string;
    FACEBOOK?: string;
    TWITTER?: string;
    DRIBBBLE?: string;
    THEME?: string;
    PRIMARY?: string;
    INFO?: string;
    ERROR?: string;
    WARNING?: string;
    INPUT?: string;
    PLACEHOLDER?: string;
    NAVBAR?: string;
    BLOCK?: string;
    ICON?: string;
    WHITE?: string;
    BLACK?: string;
    GREY?: string;
    MUTED?: string;
    TRANSPARENT?: string;
    NEUTRAL?: string;
    [key: string]: string;
  };
}