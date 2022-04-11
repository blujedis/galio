"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const theme_1 = require("./theme");
const DefaultSwitchProps = {
    color: theme_1.default.COLORS.PRIMARY,
    ios_backgroundColor: theme_1.default.COLORS.GREY,
    trackColor: {
        false: theme_1.default.COLORS.GREY,
        true: theme_1.default.COLORS.PRIMARY,
    },
    disabled: false,
    initialValue: false,
};
function Switch(props) {
    props = {
        ...DefaultSwitchProps,
        ...props
    };
    const { initialValue, onChange, color, disabled, trackColor, ios_backgroundColor, ...rest } = props;
    const [switchValue, setSwitchValue] = react_1.default.useState(initialValue);
    function onPressSwitch() {
        setSwitchValue(!switchValue);
    }
    // trackColor.true = color === 'primary' ? GalioTheme.COLORS.PRIMARY : color;
    return (<react_native_1.Switch disabled={disabled} trackColor={{ ...trackColor }} ios_backgroundColor={trackColor.false || ios_backgroundColor} value={switchValue} onValueChange={() => {
            onPressSwitch();
        }} onChange={() => onChange()} {...rest}/>);
}
exports.default = (0, theme_1.withGalio)(Switch);
// Switch.defaultProps = {
//   color: GalioTheme.COLORS.PRIMARY,
//   ios_backgroundColor: GalioTheme.COLORS.GREY,
//   trackColor: {
//     false: GalioTheme.COLORS.GREY,
//     true: GalioTheme.COLORS.PRIMARY,
//   },
//   disabled: false,
//   initialValue: false,
// };
// Switch.propTypes = {
//   ...Switcher.propTypes,
//   color: PropTypes.oneOfType([
//     PropTypes.oneOf(['primary', 'theme', 'error', 'warning', 'success', 'info']),
//     PropTypes.string,
//   ]),
//   disabled: PropTypes.bool,
//   initialValue: PropTypes.bool,
//   onChange: PropTypes.func.isRequired
// };
//# sourceMappingURL=Switch.js.map