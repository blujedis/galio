import React, { ReactNode } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, ViewStyle } from 'react-native';

// galio components
import Block from './Block';
import Text from './atomic/ions/Text';
import Icon from './atomic/ions/Icon';
import GalioTheme, { withGalio } from './theme';
import { BaseProps, InternalProps, ThemeType } from './types';

export type NavBarStyles = ReturnType<typeof styles>;

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


const DefaultNavBarProps: NavBarProps = {
  back: false,
  transparent: false,
  // title: null,
  // titleStyle: null,
  // left: null,
  // leftStyle: null,
  // leftIconColor: null,
  onLeftPress: () => {},
  // leftHitSlop: null,
  // right: null,
  // rightStyle: null,
  // style: null,
  styles: {},
  theme: GalioTheme,
};

const { height } = Dimensions.get('screen');

function NavBar(props: NavBarProps) {

  props = {
    ...DefaultNavBarProps,
    ...props
  };

  const {
    back,
    hideLeft,
    hideRight,
    left,
    leftStyle,
    leftIconColor,
    leftHitSlop,
    leftIconSize,
    leftIconName,
    leftIconFamily,
    onLeftPress,
    right,
    rightStyle,
    style,
    styles,
    transparent,
    theme,
    title,
    titleStyle,
    titleNumberOfLines,
    titleTextProps,
  } = props as Omit<InternalProps<NavBarProps, NavBarStyles>, 'children'>;

  function renderTitle() {
    if (typeof title === 'string') {
      return (
        <View style={styles.title}>
          <Text numberOfLines={titleNumberOfLines || 1} style={[styles.titleTextStyle, titleStyle]} {...titleTextProps}>{title}</Text>
        </View>
      );
    }

    if (!title) return null;

    return title;
  }

  function renderLeft() {
    if (!hideLeft) {
      if (leftIconName || (back && !left)) {
        return (
          <View style={[styles.left, leftStyle]}>
            <TouchableOpacity onPress={() => onLeftPress && onLeftPress()} hitSlop={leftHitSlop}>
              <Icon
                family={leftIconFamily || 'evilicons'}
                color={leftIconColor || theme.COLORS.ICON}
                size={leftIconSize || theme.SIZES.BASE * 1.0625}
                name={leftIconName || (back ? 'chevron-left' : 'navicon')}
              />
            </TouchableOpacity>
          </View>
        );
      }
      return <View style={[styles.left, leftStyle]}>{left}</View>;
    }
    return <View style={[styles.left]} />;
  }

  function renderRight() {
    const hasIcons = React.Children.count(right) > 1;
    const rightStyles = [styles.right, rightStyle];
    if (!hideRight) {
      return (
        <Block right row={hasIcons} style={rightStyles}>
          {right}
        </Block>
      );
    }
    return <View style={styles.right} />;
  }

  const navStyles = [styles.navBar, transparent && styles.transparent, style];

  return (
    <Block style={navStyles}>
      {renderLeft()}
      {renderTitle()}
      {renderRight()}
    </Block>
  );
}


const styles = (theme: ThemeType) =>
  StyleSheet.create({
    navBar: {
      width: 'auto',
      height: theme.SIZES.BASE * 4.125,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      backgroundColor: theme.COLORS.WHITE,
      paddingVertical: theme.SIZES.BASE,
    },
    title: {
      flex: 2,
      height: height * 0.07,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleTextStyle: {
      fontWeight: '400',
      fontSize: theme.SIZES.FONT * 0.875,
      color: theme.COLORS.BLACK,
    },
    left: {
      flex: 0.5,
      height: height * 0.07,
      justifyContent: 'center',
      marginLeft: theme.SIZES.BASE,
    },
    right: {
      flex: 0.5,
      height: height * 0.07,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: theme.SIZES.BASE,
    },
    transparent: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      borderWidth: 0,
    },
  });

export default withGalio(NavBar, styles);


// NavBar.defaultProps = {
//   back: false,
//   transparent: false,
//   title: null,
//   titleStyle: null,
//   left: null,
//   leftStyle: null,
//   leftIconColor: null,
//   onLeftPress: () => {},
//   leftHitSlop: null,
//   right: null,
//   rightStyle: null,
//   style: null,
//   styles: {},
//   theme: GalioTheme,
// };

// NavBar.propTypes = {
//   back: PropTypes.bool,
//   transparent: PropTypes.bool,
//   title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
//   titleStyle: PropTypes.any,
//   left: PropTypes.node,
//   leftStyle: PropTypes.any,
//   leftIconColor: PropTypes.string,
//   onLeftPress: PropTypes.func,
//   leftHitSlop: PropTypes.any,
//   right: PropTypes.node,
//   rightStyle: PropTypes.any,
//   style: PropTypes.any,
//   styles: PropTypes.any,
//   theme: PropTypes.any,
//   leftIconName: PropTypes.string,
//   leftIconFamily: PropTypes.string,
//   hideLeft: PropTypes.bool,
//   hideRight: PropTypes.bool,
// };