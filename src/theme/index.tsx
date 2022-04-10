import React, { forwardRef, createContext, useContext, PropsWithChildren } from 'react';

// import COLORS & SIZES
import GALIO_COLORS from './colors';
import GALIO_SIZES from './sizes';

export type Theme = typeof GalioTheme;

// default theme with COLORS & SIZES
const GalioTheme = {
  COLORS: GALIO_COLORS,
  SIZES: GALIO_SIZES,
};

export default GalioTheme;

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
export function withGalio(Component, styles) {

  // eslint-disable-next-line react/no-multi-comp
  class EnhancedComponent extends ReactComponent {

    render() {

      const { forwardedRef, ...rest } = this.props;

      return (
        <GalioContext.Consumer>
          {theme => (
            <Component
              ref={forwardedRef}
              {...rest}
              theme={{ ...GalioTheme, ...theme }}
              styles={styles && styles({ ...GalioTheme, ...theme })}
            />
          )}
        </GalioContext.Consumer>
      );
    }
  }


  return forwardRef((props, ref) => {
    return <EnhancedComponent forwardedRef={ref} {...props} />;
  });

}

export function GalioProvider ({ theme, children}: PropsWithChildren<{ theme: any }>) {

  const { COLORS: CUSTOM_COLORS, SIZES: CUSTOM_SIZES, customTheme } = theme;

  const providerTheme = {
    COLORS: { ...GalioTheme.COLORS, ...CUSTOM_COLORS },
    SIZES: { ...GalioTheme.SIZES, ...CUSTOM_SIZES },
    ...customTheme,
  };

  return (
    <GalioContext.Provider theme={providerTheme}>
      {children}
    </GalioContext.Provider>
  );

};

/*
 *   GalioProvider using React.Component
 *   GalioContext.Provider value has the default value from { COLORS, SIZES }
 */
// eslint-disable-next-line react/no-multi-comp
// export class GalioProvider extends ReactComponent {

//   static defaultProps = {
//     children: null,
//     theme: {},
//   };

//   render() {
    
//     const { theme, children } = this.props;
//     const { COLORS: CUSTOM_COLORS, SIZES: CUSTOM_SIZES, customTheme } = theme;

//     const providerTheme = {
//       COLORS: { ...GalioTheme.COLORS, ...CUSTOM_COLORS },
//       SIZES: { ...GalioTheme.SIZES, ...CUSTOM_SIZES },
//       ...customTheme,
//     };

//     return <GalioContext.Provider value={providerTheme}>{children}</GalioContext.Provider>;

//   }

// }

// GalioProvider.propTypes = {
//   children: PropTypes.any,
//   theme: PropTypes.any,
// };
