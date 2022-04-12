"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalioProvider = exports.withGalio = exports.useGalioTheme = void 0;
const react_1 = require("react");
const colors_1 = require("./colors");
const sizes_1 = require("./sizes");
// default theme with COLORS & SIZES
const GalioTheme = {
    COLORS: colors_1.default,
    SIZES: sizes_1.default,
};
// creating the GalioTheme context
const GalioContext = (0, react_1.createContext)({});
/**
 * useGalioTheme
 * Galio custom hook which returns the theme object
 */
function useGalioTheme() {
    const theme = (0, react_1.useContext)(GalioContext);
    if (theme === undefined) {
        throw new Error(`useGalioTheme must be used within a component wrapped with GalioProvider`);
    }
    return theme;
}
exports.useGalioTheme = useGalioTheme;
/*
 *   TODO: need to rework these types, have to do for moment.
 *
 *   withGalio
 *   args: Component - React Component, styles to be added to Component
 *   theme: if no styles or theme add default theme={ SIZES, COLORS }
 */
const withGalio = (Component, styles) => {
    const EnhancedComponent = (0, react_1.forwardRef)((props, forwardedRef) => {
        return (<GalioContext.Consumer>
        {(theme) => (<Component ref={forwardedRef} {...props} theme={{ ...GalioTheme, ...theme }} styles={styles && styles({ ...GalioTheme, ...theme })}/>)}
      </GalioContext.Consumer>);
    });
    EnhancedComponent.displayName = Component.name;
    return EnhancedComponent;
};
exports.withGalio = withGalio;
function GalioProvider({ theme, children, }) {
    const { COLORS: CUSTOM_COLORS, SIZES: CUSTOM_SIZES, customTheme } = theme;
    const providerTheme = {
        COLORS: { ...GalioTheme.COLORS, ...CUSTOM_COLORS },
        SIZES: { ...GalioTheme.SIZES, ...CUSTOM_SIZES },
        ...customTheme,
    };
    return <GalioContext.Provider value={providerTheme}>{children}</GalioContext.Provider>;
}
exports.GalioProvider = GalioProvider;
exports.default = GalioTheme;
// export function withGalio(Component, styles) {
//   // eslint-disable-next-line react/no-multi-comp
//   class EnhancedComponent extends ReactComponent {
//     render() {
//       const { forwardedRef, ...rest } = this.props;
//       return (
//         <GalioContext.Consumer>
//           {theme => (
//             <Component
//               ref={forwardedRef}
//               {...rest}
//               theme={{ ...GalioTheme, ...theme }}
//               styles={styles && styles({ ...GalioTheme, ...theme })}
//             />
//           )}
//         </GalioContext.Consumer>
//       );
//     }
//   }
//   return forwardRef((props, ref) => {
//     return <EnhancedComponent forwardedRef={ref} {...props} />;
//   });
// }
//# sourceMappingURL=index.js.map