import { Platform } from 'react-native';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
const galioConfig = require('./config/galio.json');
const GalioFont = require('./fonts/galio.ttf');
const fontPath = Platform.OS === 'ios' ? undefined : './fonts/galio.ttf';
const GalioIcon = createIconSetFromIcoMoon(galioConfig, 'Galio', fontPath);
export { GalioFont, GalioIcon, galioConfig };
//# sourceMappingURL=init.js.map