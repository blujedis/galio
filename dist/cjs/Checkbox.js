"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable object-curly-newline */
const react_1 = require("react");
const react_native_1 = require("react-native");
// galio dependency
const Icon_1 = require("./atomic/ions/Icon");
const Text_1 = require("./atomic/ions/Text");
const theme_1 = require("./theme");
const DefaultCheckboxProps = {
    // checkboxStyle: null,
    color: 'theme',
    disabled: false,
    flexDirection: 'row',
    iconColor: '#fff',
    iconName: 'check',
    iconSize: 15,
    iconFamily: 'font-awesome',
    // image: null,
    // imageStyle: null,
    initialValue: false,
    // label: null,
    // labelStyle: null,
    onChange: () => { },
    styles: {},
    theme: theme_1.default,
};
function Checkbox(props) {
    props = {
        ...DefaultCheckboxProps,
        ...props
    };
    const { checkboxStyle, color, disabled, flexDirection, image, imageStyle, iconColor, iconFamily, iconName, iconSize, initialValue, label, labelStyle, onChange, style, styles, theme, } = props;
    const [checked, setChecked] = react_1.default.useState(initialValue);
    // adding the necessary margins depending on the flexDirection
    function spaceAround(direction) {
        switch (direction) {
            case 'row-reverse':
                return { marginRight: 10 };
            case 'column':
                return { marginTop: 10 };
            case 'column-reverse':
                return { marginBottom: 10 };
            default:
                return { marginLeft: 10 };
        }
    }
    // rendering the image/text for the checkbox
    function renderLabel() {
        const labelStyles = [
            styles.textStyles,
            disabled && styles.disabledLabel,
            labelStyle,
            flexDirection && spaceAround(flexDirection),
        ];
        const imageStyles = [styles.imgStyles, imageStyle, flexDirection && spaceAround(flexDirection)];
        if (image && !label) {
            return <react_native_1.Image style={imageStyles} source={{ uri: image }}/>;
        }
        if (!image && label)
            return <Text_1.default style={labelStyles}>{label}</Text_1.default>;
        // if (!label && !image) return null;
        return null;
    }
    // adding the check icon
    function renderChecked() {
        if (checked) {
            return <Icon_1.default name={iconName} family={iconFamily} color={iconColor} size={iconSize}/>;
        }
        return null;
    }
    // onPress function that changes the component's state and callbacks the onChange prop
    function _onPress() {
        const current = !checked;
        onChange(current);
        setChecked(current);
    }
    const colorStyle = theme.COLORS[color.toUpperCase()]; // this sets the correct color for the theme file
    const checkBoxContainerStyle = [styles.container, flexDirection && { flexDirection }, style];
    const checkedInnerStyles = [
        styles.checked,
        color && { backgroundColor: colorStyle, borderColor: colorStyle },
        color && !colorStyle && { backgroundColor: color, borderColor: color },
    ];
    const checkBoxViewStyles = [
        styles.checkBoxView,
        styles.uncheckedBoxView,
        color && { borderColor: colorStyle },
        color && !colorStyle && { borderColor: color },
        checked && checkedInnerStyles,
        disabled && styles.disabled,
        checkboxStyle,
    ];
    return (<react_native_1.TouchableOpacity onPress={() => _onPress()} style={checkBoxContainerStyle} activeOpacity={0.8} disabled={disabled}>
      <react_native_1.View style={checkBoxViewStyles}>{renderChecked()}</react_native_1.View>
      {renderLabel()}
    </react_native_1.TouchableOpacity>);
}
const styles = (theme) => react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    checkBoxView: {
        width: theme.SIZES.CHECKBOX_WIDTH,
        height: theme.SIZES.CHECKBOX_HEIGHT,
        borderWidth: theme.SIZES.BORDER_WIDTH,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: theme.SIZES.BORDER_RADIUS,
    },
    uncheckedBoxView: {
        backgroundColor: theme.COLORS.TRANSPARENT,
        borderColor: theme.COLORS.GREY,
    },
    checked: {
        backgroundColor: theme.COLORS.THEME,
        borderColor: theme.COLORS.THEME,
    },
    disabled: {
        borderColor: theme.COLORS.MUTED,
    },
    textStyles: {
        color: theme.COLORS.BLACK,
    },
    disabledLabel: {
        color: theme.COLORS.MUTED,
        opacity: theme.SIZES.OPACITY,
    },
    imgStyles: {
        width: 200,
        height: 200,
    },
});
exports.default = (0, theme_1.withGalio)(Checkbox, styles);
// Checkbox.defaultProps = {
//   checkboxStyle: null,
//   color: 'theme',
//   disabled: false,
//   flexDirection: 'row',
//   iconColor: '#fff',
//   iconName: 'check',
//   iconSize: 15,
//   iconFamily: 'FontAwesome',
//   image: null,
//   imageStyle: null,
//   initialValue: false,
//   label: null,
//   labelStyle: null,
//   onChange: () => {},
//   styles: {},
//   theme: GalioTheme,
// };
// Checkbox.propTypes = {
//   checkboxStyle: PropTypes.any,
//   color: PropTypes.oneOfType([
//     PropTypes.oneOf(['primary', 'theme', 'error', 'warning', 'success', 'transparent', 'info']),
//     PropTypes.string,
//   ]),
//   disabled: PropTypes.bool,
//   flexDirection: PropTypes.oneOfType([
//     PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
//     PropTypes.string,
//   ]),
//   iconColor: PropTypes.string,
//   iconName: PropTypes.string,
//   iconSize: PropTypes.number,
//   iconFamily: PropTypes.string,
//   image: PropTypes.string,
//   imageStyle: PropTypes.any, // style the image
//   initialValue: PropTypes.bool,
//   label: PropTypes.string.isRequired,
//   labelStyle: PropTypes.any, // style the text
//   onChange: PropTypes.func,
//   styles: PropTypes.any, // style the whole View element,
//   theme: PropTypes.any,
// };
//# sourceMappingURL=Checkbox.js.map