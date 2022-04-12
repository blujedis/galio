import React, { forwardRef, createContext, useContext, PropsWithChildren, FC } from 'react';

// import COLORS & SIZES
import { ThemeType } from '../types';
import GALIO_COLORS from './colors';
import GALIO_SIZES from './sizes';

export type StylesFn = <T extends ThemeType>(theme: T) => Record<string, unknown>;

// default theme with COLORS & SIZES
const GalioTheme = {
  COLORS: GALIO_COLORS,
  SIZES: GALIO_SIZES,
};

// creating the GalioTheme context
const GalioContext = createContext({} as ThemeType);

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
 *   TODO: need to rework these types, have to do for moment.
 *
 *   withGalio
 *   args: Component - React Component, styles to be added to Component
 *   theme: if no styles or theme add default theme={ SIZES, COLORS }
 */
export const withGalio = <P extends Record<string, any>, S extends StylesFn = StylesFn>(
  Component: FC<P>,
  styles?: S
) => {
  const EnhancedComponent = forwardRef<typeof Component, P>((props, forwardedRef) => {
    return (
      <GalioContext.Consumer>
        {(theme) => (
          <Component
            ref={forwardedRef}
            {...props}
            theme={{ ...GalioTheme, ...theme }}
            styles={styles && styles({ ...GalioTheme, ...theme })}
          />
        )}
      </GalioContext.Consumer>
    );
  });
  EnhancedComponent.displayName = Component.name;
  return EnhancedComponent as FC<P>;
};

export function GalioProvider<T extends ThemeType & { customTheme?: Record<string, any> }>({
  theme,
  children,
}: PropsWithChildren<{ theme: T }>) {
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
