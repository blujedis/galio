"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Text_1 = require("../ions/Text");
const theme_1 = require("../../theme");
const LinkDefaultProps = {
    // children: null,
    theme: theme_1.default,
};
function Link(props) {
    props = {
        ...LinkDefaultProps,
        ...props
    };
    const { children, onPress, theme, ...rest } = props;
    return (<Text_1.default color={theme.COLORS.PRIMARY} onPress={() => onPress()} {...rest}>
      {children}
    </Text_1.default>);
}
exports.default = (0, theme_1.withGalio)(Link);
// Link.defaultProps = {
//   children: null,
//   theme: GalioTheme,
// };
// Link.propTypes = {
//   children: PropTypes.any,
//   theme: PropTypes.any,
//   onPress: PropTypes.func.isRequired,
// };
//# sourceMappingURL=Link.js.map