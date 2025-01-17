"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
// galio components
const Icon_1 = require("../ions/Icon");
const theme_1 = require("../../theme");
const ButtonDefaultProps = {
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
    styles: {},
    theme: theme_1.default,
};
const { width } = react_native_1.Dimensions.get('window');
function Button(props) {
    props = {
        ...ButtonDefaultProps,
        ...props,
    };
    const { color, children, capitalize, disabled, iconSize, icon, iconRight, iconFamily, iconColor, loading, loadingSize, loadingColor, lowercase, onlyIcon, opacity, round, style, size, shadowless, shadowColor, styles, theme, textStyle, uppercase, ...rest } = props;
    function renderContent() {
        const textStyles = [styles.customText, textStyle];
        // workaround for textTransform not supported on Expo SDK 29.0.0 or 30.0.0
        // More info: https://docs.expo.io/versions/latest/sdk/index.html#sdk-version
        // waiting for Expo SDK to support react-native 56.0.0
        let content = children;
        const isString = children && typeof children === 'string';
        if (uppercase && isString)
            content = children.toUpperCase();
        if (lowercase && isString)
            content = children.toLowerCase();
        if (capitalize && isString) {
            content = `${children.charAt(0).toUpperCase()}${children.slice(1)}`;
        }
        if (icon && !onlyIcon && !iconRight) {
            content = (<>
          <Icon_1.default name={icon} family={iconFamily} size={iconSize} color={iconColor || theme.COLORS.WHITE}/>{' '}
          <react_native_1.Text>{content}</react_native_1.Text>
        </>);
        }
        if (iconRight && !onlyIcon) {
            content = (<>
          <react_native_1.Text>{content}</react_native_1.Text>{' '}
          <Icon_1.default name={icon} family={iconFamily} size={iconSize} color={iconColor || theme.COLORS.WHITE}/>
        </>);
        }
        if (onlyIcon) {
            content = (<Icon_1.default name={icon} family={iconFamily} size={iconSize} color={iconColor || theme.COLORS.WHITE}/>);
        }
        else if (isString) {
            content = <react_native_1.Text style={textStyles}>{content}</react_native_1.Text>;
        }
        if (loading) {
            content = <react_native_1.ActivityIndicator size={loadingSize} color={loadingColor || theme.COLORS.WHITE}/>;
        }
        return content;
    }
    const colorStyle = styles[color];
    const buttonStyles = [
        styles.defaultButton,
        color && colorStyle,
        color && !colorStyle && { backgroundColor: color },
        color === 'transparent' || styles.androidShadow,
        color === 'transparent' && !shadowless && { borderWidth: 1, borderColor: theme.COLORS.WHITE },
        size === 'large'
            ? { width: width * 0.9 }
            : (size === "small" ? { width: width * 0.3 } : { width: width * 0.42 }),
        round && { borderRadius: theme.SIZES.BASE * 2 },
        onlyIcon && {
            width: iconSize * 2.75,
            height: iconSize * 2.75,
            borderWidth: 0,
            borderRadius: iconSize * 2,
        },
        !shadowless && styles.shadow,
        { shadowColor: shadowColor || theme.COLORS[color.toUpperCase()] },
        { zIndex: 2 },
        style,
    ];
    return (<react_native_1.TouchableOpacity disabled={disabled} activeOpacity={opacity} style={buttonStyles} {...rest}>
      {renderContent()}
    </react_native_1.TouchableOpacity>);
}
const styles = (theme) => react_native_1.StyleSheet.create({
    defaultButton: {
        borderRadius: 4,
        width: theme.SIZES.BUTTON_WIDTH,
        height: theme.SIZES.BUTTON_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
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
exports.default = (0, theme_1.withGalio)(Button, styles);
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
//# sourceMappingURL=Button.js.map