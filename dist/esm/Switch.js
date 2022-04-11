import React from 'react';
import { Switch as Switcher } from 'react-native';
import GalioTheme, { withGalio } from './theme';
const DefaultSwitchProps = {
    color: GalioTheme.COLORS.PRIMARY,
    ios_backgroundColor: GalioTheme.COLORS.GREY,
    trackColor: {
        false: GalioTheme.COLORS.GREY,
        true: GalioTheme.COLORS.PRIMARY,
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
    const [switchValue, setSwitchValue] = React.useState(initialValue);
    function onPressSwitch() {
        setSwitchValue(!switchValue);
    }
    // trackColor.true = color === 'primary' ? GalioTheme.COLORS.PRIMARY : color;
    return (<Switcher disabled={disabled} trackColor={{ ...trackColor }} ios_backgroundColor={trackColor.false || ios_backgroundColor} value={switchValue} onValueChange={() => {
            onPressSwitch();
        }} onChange={() => onChange()} {...rest}/>);
}
export default withGalio(Switch);
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