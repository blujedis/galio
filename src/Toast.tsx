import React, { Component, PropsWithChildren, ReactNode } from 'react';
import { Dimensions, StyleSheet, Animated, ViewStyle, TextStyle } from 'react-native';

// Galio components
import Text from './atomic/ions/Text';
import GalioTheme, { withGalio } from './theme';
import { BaseColorType, BaseProps, ThemeType } from './types';

const { height } = Dimensions.get('screen');

export interface ToastProps extends BaseProps {
  style?: ViewStyle;
  children?: ReactNode;
  isShow?: boolean;
  positionIndicator?: 'top' | 'center' | 'bottom';
  positionOffset?: number;
  fadeInDuration?: number;
  fadeOutDuration?: number;
  color?: BaseColorType;
  round?: boolean;
  textStyle?: TextStyle;
  useNativeDriver?: boolean;
}

class Toast extends Component<ToastProps, { isShow: boolean; fadeAnim: Animated.Value }> {

  static defaultProps = {
    positionIndicator: 'top',
    positionOffset: 120,
    fadeInDuration: 300,
    fadeOutDuration: 300,
    color: 'primary',
    round: false,
    // style: null,
    // textStyle: null,
    styles: {},
    theme: GalioTheme,
    useNativeDriver: true
  };

  state = {
    isShow: this.props.isShow,
    fadeAnim: new Animated.Value(0),
  };

  animation: Animated.CompositeAnimation;
  visibilityTimeout: number;

  componentDidUpdate(prevProps: ToastProps) {

    const { isShow, fadeInDuration, fadeOutDuration, useNativeDriver } = this.props;
    const { isShow: prevIsShow } = prevProps;
    const { fadeAnim } = this.state;

    if (!prevIsShow && isShow) {
      this.setVisibility(true);

      this.animation = Animated.timing(fadeAnim, {
        toValue: 1,
        duration: fadeInDuration,
        useNativeDriver,
      });

      this.animation.start();

    }

    if (prevIsShow && !isShow) {

      this.animation = Animated.timing(fadeAnim, {
        toValue: 0,
        duration: fadeOutDuration,
        useNativeDriver,
      });

      this.animation.start();

      this.visibilityTimeout = setTimeout(() => {
        this.setVisibility(false);
      }, fadeOutDuration);
    }
  }

  componentWillUnmount() {
    if (this.visibilityTimeout) {
      clearTimeout(this.visibilityTimeout);
    }

    if (this.animation) {
      this.animation.stop();
    }
  }

  setVisibility = (isShow: boolean) => this.setState({ isShow });

  getTopPosition = () => {
    const { positionIndicator, positionOffset } = this.props;

    if (positionIndicator === 'top') {
      return positionOffset;
    }

    if (positionIndicator === 'bottom') {
      return height - positionOffset;
    }

    return height / 2;
  };

  renderContent = () => {

    const { children, textStyle, styles } = this.props;
    const textStyles = [styles.text, textStyle];

    if (typeof children === 'string') {
      return <Text style={textStyles}>{children}</Text>;
    }

    return children;
  };

  render() {

    const { theme, color, round, style, styles, ...rest } = this.props;
    const { isShow, fadeAnim } = this.state;
    const colorStyle = styles[`${color}Color`];
    const toastStyles = [
      styles.toast,
      color && colorStyle,
      color && !colorStyle && { backgroundColor: color },
      round && { borderRadius: theme.SIZES.BASE * 2 },
      {
        top: this.getTopPosition(),
        opacity: fadeAnim,
      },
      style,
    ];

    return isShow ? (
      <Animated.View style={toastStyles} {...rest}>
        {this.renderContent()}
      </Animated.View>
    ) : null;
  }

}

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    toast: {
      padding: theme.SIZES.BASE,
      position: 'absolute',
      left: 0,
      right: 0,
      zIndex: 9999,
    },
    text: {
      fontSize: theme.SIZES.FONT,
      color: theme.COLORS.WHITE,
    },
    primaryColor: {
      backgroundColor: theme.COLORS.PRIMARY,
    },
    themeColor: {
      backgroundColor: theme.COLORS.THEME,
    },
    infoColor: {
      backgroundColor: theme.COLORS.INFO,
    },
    errorColor: {
      backgroundColor: theme.COLORS.ERROR,
    },
    warningColor: {
      backgroundColor: theme.COLORS.WARNING,
    },
    successColor: {
      backgroundColor: theme.COLORS.SUCCESS,
    },
  });

export default withGalio((props: PropsWithChildren<ToastProps>) => {
  return <Toast { ...props} />;
}, styles);

  // static propTypes = {
  //   children: PropTypes.node.isRequired,
  //   isShow: PropTypes.bool.isRequired,
  //   positionIndicator: PropTypes.oneOf(['top', 'center', 'bottom']),
  //   positionOffset: PropTypes.number,
  //   fadeInDuration: PropTypes.number,
  //   fadeOutDuration: PropTypes.number,
  //   color: PropTypes.oneOfType([
  //     PropTypes.oneOf(['primary', 'theme', 'info', 'error', 'warning', 'success']),
  //     PropTypes.string,
  //   ]),
  //   round: PropTypes.bool,
  //   style: PropTypes.shape({
  //     style: PropTypes.any,
  //   }),
  //   textStyle: PropTypes.shape({
  //     style: PropTypes.any,
  //   }),
  //   styles: PropTypes.any,
  //   theme: PropTypes.any,
  //   useNativeDriver: PropTypes.bool
  // };