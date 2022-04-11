/****************************************************/
/**** INSPIRED BY react-native-elements*************/
/**************************************************/
import ZocialIcon from 'react-native-vector-icons/Zocial';
import OcticonIcon from 'react-native-vector-icons/Octicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

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
  fontisto: Fontisto
};

export type IconFamilyType = keyof typeof IconMap;

export default (type = 'Fontisto' as IconFamilyType) => {
  return IconMap[type];
};
