import React from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';

import getIconType, { IconFamilyType } from '../../helpers/getIconType';
import GalioTheme, { withGalio } from '../../theme';
import { BaseProps, InternalProps } from '../../types';

const galioConfig = require('../../config/galio.json');

export interface IconProps extends BaseProps {
  name?: string;
  family?: IconFamilyType | 'Galio';
  size?: number;
  color?: string;
}

const IconDefaultProps: IconProps = {
  // name: null,
  // family: null,
  // size: null,
  // color: null,
  styles: {},
  theme: GalioTheme,
};

const Galio = createIconSetFromIcoMoon(galioConfig, 'Galio', './fonts/galio.ttf');

// Galio Fonts have to be linked with 'react-native link' if you're using react-native-cli
// Galio Fonts have to loaded with Fonts.loadAsync if you're
// using Expo (you can export GalioFont from index in order to import it)

function Icon(props: any) {

  props = {
    ...IconDefaultProps,
    ...props
  };

  const {
    name,
    family,
    size,
    color,
    styles,
    theme,
    medium,
    large,
    ...rest
  } = props as InternalProps<IconProps>;

  if (family === 'Galio') {
    if (name) {
      return (
        <Galio
          name={name}
          size={size || (medium ? theme.SIZES.ICON_MEDIUM : (large ? theme.SIZES.ICON_LARGE : theme.SIZES.ICON))}
          color={color || theme.COLORS.BLACK}
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
          color={color || theme.COLORS.BLACK}
          {...rest}
        />
      );
    }
  }

  return null;
}

export default withGalio(Icon);

// Icon.defaultProps = {
//   name: null,
//   family: null,
//   size: null,
//   color: null,
//   styles: {},
//   theme: GalioTheme,
// };