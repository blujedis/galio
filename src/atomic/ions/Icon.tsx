import React from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';

import galioConfig from '../../config/galio.json';
import getIconType from '../../helpers/getIconType';
import GalioTheme, { withGalio } from '../../theme';

export interface IconProps {
  name: any;
  family: any;
  size: number;
  color: string;
  styles: Record<string, any>;
  theme: typeof GalioTheme;
}

const Galio = createIconSetFromIcoMoon(galioConfig, 'Galio', './fonts/galio.ttf');

// Galio Fonts have to be linked with 'react-native link' if you're using react-native-cli
// Galio Fonts have to loaded with Fonts.loadAsync if you're
// using Expo (you can export GalioFont from index in order to import it)

function Icon({
  name,
  family,
  size,
  color,
  styles,
  theme,
  medium,
  large,
  ...rest
}: any) {
  if (family === 'Galio') {
    if (name) {
      return (
        <Galio
          name={name}
          size={size || (medium ? theme.SIZES.ICON_MEDIUM : (large ? theme.SIZES.ICON_LARGE : theme.SIZES.ICON))}
          color={color || theme.COLORS.THEME.BLACK}
          {...rest}
        />
      );
    }
  } else {
    const IconInstance = getIconType(family);
    if (name && IconInstance) {
      return (
        <IconInstance
          name={name}
          size={size || (medium ? theme.SIZES.ICON_MEDIUM : (large ? theme.SIZES.ICON_LARGE : theme.SIZES.ICON))}
          color={color || theme.COLORS.THEME.BLACK}
          {...rest}
        />
      );
    }
  }

  return null;
}

Icon.defaultProps = {
  name: null,
  family: null,
  size: null,
  color: null,
  styles: {},
  theme: GalioTheme,
};

export default withGalio(Icon);
