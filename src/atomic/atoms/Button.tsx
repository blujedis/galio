import React, { PropsWithChildren } from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, TouchableOpacity, Text, TouchableOpacityProps, ViewStyle } from 'react-native';

// galio components
import Icon from '../ions/Icon';
import GalioTheme, { withGalio } from '../../theme';
import { BaseInternalProps, BaseProps, InternalProps, ThemeType } from '../../types';

type ButtonStyles = ReturnType<typeof styles>;
type Size = 'small' | 'large';

export interface ButtonProps extends TouchableOpacityProps, BaseProps {
  capitalize?: boolean;
  color?: keyof ButtonStyles; //  ButtonColorType;
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

const ButtonDefaultProps: ButtonProps = {
  color: 'primary',
  size: 'default',
  disabled: false,
  uppercase: false,
  lowercase: false,
  capitalize: false,
  shadowless: false,
  shadowColor: false,
  onlyIcon: false,
  loading: false,
  loadingSize: 'small',
  opacity: 0.8,
  icon: false,
  iconRight: false,
  iconFamily: false,
  iconSize: 16,
  styles: {} as unknown as ButtonStyles,
  theme: GalioTheme,
};

const { width } = Dimensions.get('window');

function Button(props: PropsWithChildren<ButtonProps>) {
  props = {
    ...ButtonDefaultProps,
    ...props,
  };

  const {
    color,
    children,
    capitalize,
    disabled,
    iconSize,
    icon,
    iconRight,
    iconFamily,
    iconColor,
    loading,
    loadingSize,
    loadingColor,
    lowercase,
    onlyIcon,
    opacity,
    round,
    style,
    size,
    shadowless,
    shadowColor,
    styles,
    theme,
    textStyle,
    uppercase,
    ...rest
  } = props as InternalProps<ButtonProps, ButtonStyles>;

  function renderContent() {
    const textStyles = [styles.customText, textStyle];

    // workaround for textTransform not supported on Expo SDK 29.0.0 or 30.0.0
    // More info: https://docs.expo.io/versions/latest/sdk/index.html#sdk-version
    // waiting for Expo SDK to support react-native 56.0.0

    let content = children;
    const isString = children && typeof children === 'string';

    if (uppercase && isString) content = children.toUpperCase();
    if (lowercase && isString) content = children.toLowerCase();
    if (capitalize && isString) {
      content = `${children.charAt(0).toUpperCase()}${children.slice(1)}`;
    }

    if (icon && !onlyIcon && !iconRight) {
      content = (
        <>
          <Icon
            name={icon}
            family={iconFamily}
            size={iconSize}
            color={iconColor || theme.COLORS.WHITE}
          />{' '}
          <Text>{content}</Text>
        </>
      );
    }
    if (iconRight && !onlyIcon) {
      content = (
        <>
          <Text>{content}</Text>{' '}
          <Icon
            name={icon}
            family={iconFamily}
            size={iconSize}
            color={iconColor || theme.COLORS.WHITE}
          />
        </>
      );
    }

    if (onlyIcon) {
      content = (
        <Icon
          name={icon}
          family={iconFamily}
          size={iconSize}
          color={iconColor || theme.COLORS.WHITE}
        />
      );
    } else if (isString) {
      content = <Text style={textStyles}>{content}</Text>;
    }

    if (loading) {
      content = <ActivityIndicator size={loadingSize} color={loadingColor || theme.COLORS.WHITE} />;
    }

    return content;
  }

  const colorStyle = styles[color];

  const buttonStyles = [
    styles.defaultButton,
    color && colorStyle,
    color && !colorStyle && { backgroundColor: color }, // color set & no styles for that color
    color === 'transparent' || styles.androidShadow,
    color === 'transparent' && !shadowless && { borderWidth: 1, borderColor: theme.COLORS.WHITE },
    size === 'large'
      ? { width: width * 0.9 }
      : (size === "small" ? { width: width * 0.3 }: { width: width * 0.42 }),
    round && { borderRadius: theme.SIZES.BASE * 2 },

    onlyIcon && {
      width: iconSize * 2.75,
      height: iconSize * 2.75,
      borderWidth: 0,
      borderRadius: iconSize * 2,
    },
    !shadowless && styles.shadow,
    { shadowColor: shadowColor || (theme.COLORS as any)[(color as string).toUpperCase()] },
    { zIndex: 2 },
    style,
  ] as ViewStyle[];

  return (
    <TouchableOpacity disabled={disabled} activeOpacity={opacity} style={buttonStyles} {...rest}>
      {renderContent()}
    </TouchableOpacity>
  );
}

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    defaultButton: {
      borderRadius: 4,
      width: theme.SIZES.BUTTON_WIDTH,
      height: theme.SIZES.BUTTON_HEIGHT,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 8
    },
    shadow: {
      shadowColor: theme.COLORS.BLOCK,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: theme.SIZES.OPACITY,
      shadowRadius: theme.SIZES.BUTTON_SHADOW_RADIUS,
    },
    customText: {
      fontSize: theme.SIZES.FONT,
      color: theme.COLORS.WHITE,
    },
    theme: {
      backgroundColor: theme.COLORS.THEME,
    },
    primary: {
      backgroundColor: theme.COLORS.PRIMARY,
    },
    info: {
      backgroundColor: theme.COLORS.INFO,
    },
    danger: {
      backgroundColor: theme.COLORS.DANGER,
    },
    warning: {
      backgroundColor: theme.COLORS.WARNING,
    },
    success: {
      backgroundColor: theme.COLORS.SUCCESS,
    },
    white: {
      backgroundColor: theme.COLORS.WHITE,
    },
    black: {
      backgroundColor: theme.COLORS.BLACK,
    },
    secondary: {
      backgroundColor: theme.COLORS.SECONDARY,
    },
    grey: {
      backgroundColor: theme.COLORS.GREY,
    },
    transparent: {
      backgroundColor: theme.COLORS.TRANSPARENT,
    },
    androidShadow: {
      elevation: theme.SIZES.ANDROID_ELEVATION,
    },
  });

export default withGalio(Button, styles);

// Button.defaultProps = {
//   color: 'primary',
//   size: 'default',
//   disabled: false,
//   uppercase: false,
//   lowercase: false,
//   capitalize: false,
//   shadowless: false,
//   shadowColor: false,
//   onlyIcon: false,
//   loading: false,
//   loadingSize: 'small',
//   opacity: .8,
//   icon: false,
//   iconRight: false,
//   iconFamily: false,
//   iconSize: 16,
//   iconColor: null,
//   styles: {},
//   theme: GalioTheme,
// };


// Button.propTypes = {
//   ...TouchableOpacity.propTypes,
//   color: PropTypes.oneOfType([
//     PropTypes.oneOf([
//       'theme', 'primary', 'info', 'danger', 'warning', 'success', 'black', 'grey', 'secondary', 'transparent', 'white', 
//     ]),
//     PropTypes.string,
//   ]),
//   size: PropTypes.oneOfType([PropTypes.oneOf(['large', 'default', 'small']), PropTypes.number]),
//   iconColor: PropTypes.string,
//   disabled: PropTypes.bool,
//   uppercase: PropTypes.bool,
//   lowercase: PropTypes.bool,
//   capitalize: PropTypes.bool,
//   loading: PropTypes.bool,
//   loadingSize: PropTypes.oneOf(['small', 'default', 'large']),
//   opacity: PropTypes.number,
//   shadowless: PropTypes.bool,
//   shadowColor: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
//   onlyIcon: PropTypes.bool,
//   icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
//   iconRight: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
//   iconFamily: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
//   iconSize: PropTypes.number,
//   styles: PropTypes.any,
//   theme: PropTypes.any,
// };