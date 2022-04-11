"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
// galio components
const Block_1 = require("./Block");
const Text_1 = require("./atomic/ions/Text");
const Icon_1 = require("./atomic/ions/Icon");
const theme_1 = require("./theme");
const DefaultNavBarProps = {
    back: false,
    transparent: false,
    // title: null,
    // titleStyle: null,
    // left: null,
    // leftStyle: null,
    // leftIconColor: null,
    onLeftPress: () => { },
    // leftHitSlop: null,
    // right: null,
    // rightStyle: null,
    // style: null,
    styles: {},
    theme: theme_1.default,
};
const { height } = react_native_1.Dimensions.get('screen');
function NavBar(props) {
    props = {
        ...DefaultNavBarProps,
        ...props
    };
    const { back, hideLeft, hideRight, left, leftStyle, leftIconColor, leftHitSlop, leftIconSize, leftIconName, leftIconFamily, onLeftPress, right, rightStyle, style, styles, transparent, theme, title, titleStyle, titleNumberOfLines, titleTextProps, } = props;
    function renderTitle() {
        if (typeof title === 'string') {
            return (<react_native_1.View style={styles.title}>
          <Text_1.default numberOfLines={titleNumberOfLines || 1} style={[styles.titleTextStyle, titleStyle]} {...titleTextProps}>{title}</Text_1.default>
        </react_native_1.View>);
        }
        if (!title)
            return null;
        return title;
    }
    function renderLeft() {
        if (!hideLeft) {
            if (leftIconName || (back && !left)) {
                return (<react_native_1.View style={[styles.left, leftStyle]}>
            <react_native_1.TouchableOpacity onPress={() => onLeftPress && onLeftPress()} hitSlop={leftHitSlop}>
              <Icon_1.default family={leftIconFamily || 'evilicons'} color={leftIconColor || theme.COLORS.ICON} size={leftIconSize || theme.SIZES.BASE * 1.0625} name={leftIconName || (back ? 'chevron-left' : 'navicon')}/>
            </react_native_1.TouchableOpacity>
          </react_native_1.View>);
            }
            return <react_native_1.View style={[styles.left, leftStyle]}>{left}</react_native_1.View>;
        }
        return <react_native_1.View style={[styles.left]}/>;
    }
    function renderRight() {
        const hasIcons = react_1.default.Children.count(right) > 1;
        const rightStyles = [styles.right, rightStyle];
        if (!hideRight) {
            return (<Block_1.default right row={hasIcons} style={rightStyles}>
          {right}
        </Block_1.default>);
        }
        return <react_native_1.View style={styles.right}/>;
    }
    const navStyles = [styles.navBar, transparent && styles.transparent, style];
    return (<Block_1.default style={navStyles}>
      {renderLeft()}
      {renderTitle()}
      {renderRight()}
    </Block_1.default>);
}
const styles = (theme) => react_native_1.StyleSheet.create({
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
exports.default = (0, theme_1.withGalio)(NavBar, styles);
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
//# sourceMappingURL=NavBar.js.map