"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.galioConfig = exports.GalioIcon = exports.GalioFont = void 0;
const react_native_1 = require("react-native");
const react_native_vector_icons_1 = require("react-native-vector-icons");
const galioConfig = require('./config/galio.json');
exports.galioConfig = galioConfig;
const GalioFont = require('./fonts/galio.ttf');
exports.GalioFont = GalioFont;
const fontPath = react_native_1.Platform.OS === 'ios' ? undefined : './fonts/galio.ttf';
const GalioIcon = (0, react_native_vector_icons_1.createIconSetFromIcoMoon)(galioConfig, 'Galio', fontPath);
exports.GalioIcon = GalioIcon;
//# sourceMappingURL=init.js.map