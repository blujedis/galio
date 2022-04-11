/****************************************************/
/**** INSPIRED BY react-native-elements*************/
/**************************************************/
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import OcticonIcon from 'react-native-vector-icons/Octicons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import ZocialIcon from 'react-native-vector-icons/Zocial';

export const IconMap = {
  zocial: ZocialIcon,
  cticon: OcticonIcon,
  material: MaterialIcon,
  'material-community': MaterialCommunityIcon,
  ionicon: Ionicon,
  foundation: FoundationIcon,
  evil: EvilIcon,
  entypo: EntypoIcon,
  'font-awesome': FAIcon,
  'font-awesome-5': FA5Icon,
  'simple-line-icon': SimpleLineIcon,
  feather: FeatherIcon,
  antdesig: AntIcon,
  fontisto: Fontisto,
};

export type IconFamilyType = keyof typeof IconMap;

export default (type = 'Fontisto' as IconFamilyType) => {
  return IconMap[type];
};
