"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const normalize_1 = require("../../helpers/normalize");
const theme_1 = require("../../theme");
const TextDefaultProps = {
    // children: null,
    // style: null,
    h1: false,
    h2: false,
    h3: false,
    h4: false,
    h5: false,
    h6: false,
    p: false,
    body: false,
    small: false,
    size: 0,
    // color: null,
    muted: false,
    bold: false,
    italic: false,
    styles: {},
    theme: theme_1.default,
};
function Typography(props) {
    props = {
        ...TextDefaultProps,
        ...props
    };
    const { style, h1, h2, h3, h4, h5, h6, p, body, small, muted, neutral, size, color, bold, italic, center, children, styles, theme, ...rest } = props;
    return (<react_native_1.Text style={[
            h1 && { fontSize: (0, normalize_1.default)(44) },
            h2 && { fontSize: (0, normalize_1.default)(38) },
            h3 && { fontSize: (0, normalize_1.default)(30) },
            h4 && { fontSize: (0, normalize_1.default)(24) },
            h5 && { fontSize: (0, normalize_1.default)(21) },
            h6 && { fontSize: (0, normalize_1.default)(18) },
            p && { fontSize: (0, normalize_1.default)(16) },
            body && { fontSize: (0, normalize_1.default)(14) },
            small && { fontSize: (0, normalize_1.default)(12) },
            muted && { color: theme.COLORS.MUTED },
            neutral && { color: theme.COLORS.NEUTRAL },
            size && { fontSize: size },
            color && { color },
            italic && { fontStyle: 'italic' },
            bold && { fontWeight: 'bold' },
            center && { textAlign: 'center' },
            style && style,
        ]} {...rest}>
      {children}
    </react_native_1.Text>);
}
exports.default = (0, theme_1.withGalio)(Typography);
// Typography.defaultProps = {
//   children: null,
//   style: null,
//   h1: false,
//   h2: false,
//   h3: false,
//   h4: false,
//   h5: false,
//   h6: false,
//   p: false,
//   body: false,
//   small: false,
//   size: 0,
//   color: null,
//   muted: false,
//   bold: false,
//   italic: false,
//   styles: {},
//   theme: GalioTheme,
// };
// Typography.propTypes = {
//   children: PropTypes.any,
//   style: PropTypes.any,
//   h1: PropTypes.bool,
//   h2: PropTypes.bool,
//   h3: PropTypes.bool,
//   h4: PropTypes.bool,
//   h5: PropTypes.bool,
//   h6: PropTypes.bool,
//   p: PropTypes.bool,
//   body: PropTypes.bool,
//   small: PropTypes.bool,
//   size: PropTypes.number,
//   color: PropTypes.string,
//   muted: PropTypes.bool,
//   bold: PropTypes.bool,
//   italic: PropTypes.bool,
//   styles: PropTypes.any,
//   theme: PropTypes.any,
// };
//# sourceMappingURL=Text.js.map