"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
// Galio components
const Text_1 = require("./atomic/ions/Text");
const theme_1 = require("./theme");
const { height } = react_native_1.Dimensions.get('screen');
class Toast extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            isShow: this.props.isShow,
            fadeAnim: new react_native_1.Animated.Value(0),
        };
        this.setVisibility = (isShow) => this.setState({ isShow });
        this.getTopPosition = () => {
            const { positionIndicator, positionOffset } = this.props;
            if (positionIndicator === 'top') {
                return positionOffset;
            }
            if (positionIndicator === 'bottom') {
                return height - positionOffset;
            }
            return height / 2;
        };
        this.renderContent = () => {
            const { children, textStyle, styles } = this.props;
            const textStyles = [styles.text, textStyle];
            if (typeof children === 'string') {
                return <Text_1.default style={textStyles}>{children}</Text_1.default>;
            }
            return children;
        };
    }
    componentDidUpdate(prevProps) {
        const { isShow, fadeInDuration, fadeOutDuration, useNativeDriver } = this.props;
        const { isShow: prevIsShow } = prevProps;
        const { fadeAnim } = this.state;
        if (!prevIsShow && isShow) {
            this.setVisibility(true);
            this.animation = react_native_1.Animated.timing(fadeAnim, {
                toValue: 1,
                duration: fadeInDuration,
                useNativeDriver,
            });
            this.animation.start();
        }
        if (prevIsShow && !isShow) {
            this.animation = react_native_1.Animated.timing(fadeAnim, {
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
        return isShow ? (<react_native_1.Animated.View style={toastStyles} {...rest}>
        {this.renderContent()}
      </react_native_1.Animated.View>) : null;
    }
}
Toast.defaultProps = {
    positionIndicator: 'top',
    positionOffset: 120,
    fadeInDuration: 300,
    fadeOutDuration: 300,
    color: 'primary',
    round: false,
    // style: null,
    // textStyle: null,
    styles: {},
    theme: theme_1.default,
    useNativeDriver: true
};
const styles = (theme) => react_native_1.StyleSheet.create({
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
exports.default = (0, theme_1.withGalio)(Toast, styles);
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
//# sourceMappingURL=Toast.js.map