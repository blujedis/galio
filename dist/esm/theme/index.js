import React, { forwardRef, createContext, useContext, } from 'react';
import GALIO_COLORS from './colors';
import GALIO_SIZES from './sizes';
// default theme with COLORS & SIZES
const GalioTheme = {
    COLORS: GALIO_COLORS,
    SIZES: GALIO_SIZES,
};
// creating the GalioTheme context
const GalioContext = createContext({});
/**
 * useGalioTheme
 * Galio custom hook which returns the theme object
 */
export function useGalioTheme() {
    const theme = useContext(GalioContext);
    if (theme === undefined) {
        throw new Error(`useGalioTheme must be used within a component wrapped with GalioProvider`);
    }
    return theme;
}
/*
 *   withGalio
 *   args: Component - React Component, styles to be added to Component
 *   theme: if no styles or theme add default theme={ SIZES, COLORS }
 */
export const withGalio = (Component, styles) => {
    const EnhancedComponent = forwardRef((props, forwardedRef) => {
        return (<GalioContext.Consumer>
        {(theme) => (<Component ref={forwardedRef} {...props} theme={{ ...GalioTheme, ...theme }} styles={styles && styles({ ...GalioTheme, ...theme })}/>)}
      </GalioContext.Consumer>);
    });
    EnhancedComponent.displayName = Component.name;
    return EnhancedComponent;
};
export function GalioProvider({ theme, children, }) {
    const { COLORS: CUSTOM_COLORS, SIZES: CUSTOM_SIZES, customTheme } = theme;
    const providerTheme = {
        COLORS: { ...GalioTheme.COLORS, ...CUSTOM_COLORS },
        SIZES: { ...GalioTheme.SIZES, ...CUSTOM_SIZES },
        ...customTheme,
    };
    return <GalioContext.Provider value={providerTheme}>{children}</GalioContext.Provider>;
}
export default GalioTheme;
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