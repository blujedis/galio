/****************************************************/
/**** INSPIRED BY react-native-elements*************/
/**************************************************/
import AntIcon from 'react-native-vector-icons/AntDesign';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
export declare const IconMap: {
    zocial: typeof AntIcon;
    cticon: typeof AntIcon;
    material: typeof AntIcon;
    'material-community': typeof AntIcon;
    ionicon: typeof AntIcon;
    foundation: typeof AntIcon;
    evil: typeof AntIcon;
    entypo: typeof AntIcon;
    'font-awesome': typeof AntIcon;
    'font-awesome-5': typeof FA5Icon;
    'simple-line-icon': typeof AntIcon;
    feather: typeof AntIcon;
    antdesig: typeof AntIcon;
    fontisto: typeof AntIcon;
};
export declare type IconFamilyType = keyof typeof IconMap;
declare const _default: (type?: "zocial" | "cticon" | "material" | "material-community" | "ionicon" | "foundation" | "evil" | "entypo" | "font-awesome" | "font-awesome-5" | "simple-line-icon" | "feather" | "antdesig" | "fontisto") => typeof AntIcon | typeof FA5Icon;
export default _default;
