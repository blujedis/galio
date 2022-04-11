"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const Icon_1 = require("../ions/Icon");
const theme_1 = require("../../theme");
const DefaultInputProps = {
    type: 'default',
    password: false,
    // placeholderTextColor: null,
    // label: null,
    // help: null,
    rounded: false,
    left: true,
    right: false,
    viewPass: false,
    topHelp: true,
    bottomHelp: false,
    // style: null,
    // textInputStyle: null,
    borderless: false,
    // bgColor: null,
    // iconColor: null,
    // icon: null,
    // family: null,
    // color: null,
    // iconSize: null,
    // iconContent: null,
    // onRef: null,
    styles: {},
    theme: theme_1.default,
};
function Input(props) {
    props = {
        ...DefaultInputProps,
        ...props
    };
    const { style, textInputStyle, type, placeholderTextColor, label, labelStyles, color, help, helpStyles, bgColor, borderless, viewPass, rounded, icon, family, left, right, iconColor, topHelp, bottomHelp, theme, styles, iconSize, iconContent, password, onRef, error, ...rest } = props;
    const [isPassword, setIsPassword] = react_1.default.useState(false);
    react_1.default.useEffect(() => {
        setIsPassword(password);
    }, []);
    const inputViewStyles = [
        styles.inputStyle,
        styles.inputContainer,
        bgColor && { backgroundColor: bgColor },
        rounded && styles.rounded,
        borderless && styles.borderless,
        error && { borderColor: theme.COLORS.DANGER },
        style,
    ];
    const inputStyles = [
        styles.inputView,
        borderless && icon && styles.inputIcon,
        styles.inputText,
        color && { color },
        textInputStyle || {}
    ];
    const iconInstance = icon ? (<Icon_1.default name={icon} family={family} size={iconSize || theme.SIZES.BASE * 1.0625} style={{ marginRight: left && !right ? 4 : 0 }} color={(error && theme.COLORS.DANGER) || iconColor || placeholderTextColor || theme.COLORS.PLACEHOLDER}/>) : (iconContent);
    const viewPassElement = password && viewPass && (<react_native_1.TouchableOpacity style={{ marginLeft: 2 }} onPress={() => setIsPassword(!isPassword)}>
      <Icon_1.default size={iconSize || theme.SIZES.BASE * 1.0625} color={iconColor || theme.COLORS.BLACK} name="eye" family="entypo"/>
    </react_native_1.TouchableOpacity>);
    const labelContent = label?.length > 0 && <react_native_1.Text style={[styles.label, labelStyles || {}]}>{label}</react_native_1.Text>;
    const helpContent = help?.length > 0 && <react_native_1.Text style={[styles.helpText, helpStyles || {}]}>{help}</react_native_1.Text>;
    return (<react_native_1.View style={{
            marginVertical: theme.SIZES.BASE / 2,
            alignContent: 'center',
        }}>
      {labelContent}
      {topHelp && !bottomHelp && helpContent}
      <react_native_1.View style={inputViewStyles}>
        <>
          {left && !right && iconInstance}
          <react_native_1.TextInput ref={onRef} style={inputStyles} keyboardType={type} secureTextEntry={isPassword} placeholderTextColor={placeholderTextColor} underlineColorAndroid="transparent" {...rest}/>
          {right && iconInstance}
          {viewPassElement}
        </>
      </react_native_1.View>
      {bottomHelp && helpContent}
    </react_native_1.View>);
}
const styles = (theme) => react_native_1.StyleSheet.create({
    inputStyle: {
        backgroundColor: theme.COLORS.WHITE,
        borderRadius: theme.SIZES.INPUT_BORDER_RADIUS,
        borderWidth: theme.SIZES.INPUT_BORDER_WIDTH,
        borderColor: theme.COLORS.INPUT,
        height: theme.SIZES.INPUT_HEIGHT,
        paddingHorizontal: theme.SIZES.INPUT_HORIZONTAL,
        width: '100%',
    },
    inputText: {
        color: theme.COLORS.INPUT,
        fontSize: theme.SIZES.INPUT_TEXT,
        textDecorationColor: 'transparent',
        textShadowColor: 'transparent',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputView: {
        flex: 1,
    },
    inputIcon: {
        marginHorizontal: theme.SIZES.BASE,
    },
    label: {
        fontWeight: '500',
        fontSize: theme.SIZES.INPUT_LABEL_TEXT,
        marginVertical: theme.SIZES.INPUT_VERTICAL_LABEL,
        paddingHorizontal: theme.SIZES.INPUT_HORIZONTAL
    },
    helpText: {
        color: theme.COLORS.SECONDARY,
        fontSize: theme.SIZES.INPUT_HELP_TEXT || 14,
        marginVertical: 8,
        paddingHorizontal: 16,
    },
    rounded: {
        borderRadius: theme.SIZES.INPUT_ROUNDED,
    },
    borderless: {
        borderColor: 'transparent',
        borderWidth: 0,
    },
});
exports.default = (0, theme_1.withGalio)(Input, styles);
// Input.defaultProps = {
//   type: 'default',
//   password: false,
//   placeholderTextColor: null,
//   label: null,
//   help: null,
//   rounded: false,
//   left: true,
//   right: false,
//   viewPass: false,
//   topHelp: true,
//   bottomHelp: false,
//   style: null,
//   textInputStyle: null,
//   borderless: false,
//   bgColor: null,
//   iconColor: null,
//   icon: null,
//   family: null,
//   color: null,
//   styles: {},
//   iconSize: null,
//   iconContent: null,
//   theme: GalioTheme,
//   onRef: null,
// };
// Input.propTypes = {
//   style: PropTypes.any,
//   textInputStyle: PropTypes.any,
//   type: PropTypes.string,
//   password: PropTypes.bool,
//   placeholderTextColor: PropTypes.string,
//   label: PropTypes.string,
//   bgColor: PropTypes.string,
//   rounded: PropTypes.bool,
//   borderless: PropTypes.bool,
//   viewPass: PropTypes.bool,
//   iconColor: PropTypes.string,
//   icon: PropTypes.string,
//   family: PropTypes.string,
//   color: PropTypes.string,
//   help: PropTypes.string,
//   left: PropTypes.bool,
//   right: PropTypes.bool,
//   topHelp: PropTypes.bool,
//   bottomHelp: PropTypes.bool,
//   styles: PropTypes.any,
//   iconSize: PropTypes.number,
//   iconContent: PropTypes.any,
//   theme: PropTypes.any,
//   onRef: PropTypes.func,
// };
//# sourceMappingURL=Input.js.map