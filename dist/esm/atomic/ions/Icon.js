import React from 'react';
import { Platform } from 'react-native';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import galioConfig from '../../config/galio.json';
import getIconType from '../../helpers/getIconType';
import GalioTheme, { withGalio } from '../../theme';
const IconDefaultProps = {
    // name: null,
    // family: null,
    // size: null,
    // color: null,
    styles: {},
    theme: GalioTheme,
};
const fontPath = Platform.OS === 'ios' ? undefined : './fonts/galio.ttf';
const Galio = createIconSetFromIcoMoon(galioConfig, 'Galio', fontPath);
// Galio Fonts have to be linked with 'react-native link' if you're using react-native-cli
// Galio Fonts have to loaded with Fonts.loadAsync if you're
// using Expo (you can export GalioFont from index in order to import it)
function Icon(props) {
    props = {
        ...IconDefaultProps,
        ...props
    };
    const { name, family, size, color, styles, theme, medium, large, ...rest } = props;
    if (family === 'Galio') {
        if (name) {
            return (<Galio name={name} size={size || (medium ? theme.SIZES.ICON_MEDIUM : (large ? theme.SIZES.ICON_LARGE : theme.SIZES.ICON))} color={color || theme.COLORS.BLACK} {...rest}/>);
        }
    }
    else {
        const IconInstance = getIconType(family);
        if (name && IconInstance) {
            return (<IconInstance name={name} size={size || (medium ? theme.SIZES.ICON_MEDIUM : (large ? theme.SIZES.ICON_LARGE : theme.SIZES.ICON))} color={color || theme.COLORS.BLACK} {...rest}/>);
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
//# sourceMappingURL=Icon.js.map