"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconMap = void 0;
/****************************************************/
/**** INSPIRED BY react-native-elements*************/
/**************************************************/
const AntDesign_1 = require("react-native-vector-icons/AntDesign");
const Entypo_1 = require("react-native-vector-icons/Entypo");
const EvilIcons_1 = require("react-native-vector-icons/EvilIcons");
const Feather_1 = require("react-native-vector-icons/Feather");
const FontAwesome_1 = require("react-native-vector-icons/FontAwesome");
const FontAwesome5_1 = require("react-native-vector-icons/FontAwesome5");
const Fontisto_1 = require("react-native-vector-icons/Fontisto");
const Foundation_1 = require("react-native-vector-icons/Foundation");
const Ionicons_1 = require("react-native-vector-icons/Ionicons");
const MaterialCommunityIcons_1 = require("react-native-vector-icons/MaterialCommunityIcons");
const MaterialIcons_1 = require("react-native-vector-icons/MaterialIcons");
const Octicons_1 = require("react-native-vector-icons/Octicons");
const SimpleLineIcons_1 = require("react-native-vector-icons/SimpleLineIcons");
const Zocial_1 = require("react-native-vector-icons/Zocial");
exports.IconMap = {
    zocial: Zocial_1.default,
    cticon: Octicons_1.default,
    material: MaterialIcons_1.default,
    'material-community': MaterialCommunityIcons_1.default,
    ionicon: Ionicons_1.default,
    foundation: Foundation_1.default,
    evil: EvilIcons_1.default,
    entypo: Entypo_1.default,
    'font-awesome': FontAwesome_1.default,
    'font-awesome-5': FontAwesome5_1.default,
    'simple-line-icon': SimpleLineIcons_1.default,
    feather: Feather_1.default,
    antdesig: AntDesign_1.default,
    fontisto: Fontisto_1.default,
};
exports.default = (type = 'Fontisto') => {
    return exports.IconMap[type];
};
//# sourceMappingURL=getIconType.js.map