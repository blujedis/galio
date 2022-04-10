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
  ZocialIcon: ZocialIcon,
  OcticonIcon: OcticonIcon,
  MaterialIcon: MaterialIcon,
  MaterialCommunityIcon: MaterialCommunityIcon,
  Ionicon: Ionicon,
  FoundationIcon: FoundationIcon,
  EvilIcon: EvilIcon,
  EntypoIcon: EntypoIcon,
  FAIcon: FAIcon,
  FA5Icon: FA5Icon,
  SimpleLineIcon: SimpleLineIcon,
  FeatherIcon: FeatherIcon,
  AntIcon: AntIcon,
  Fontisto: Fontisto
};

export type IconType = keyof typeof IconMap;

export default (type = 'Fontisto' as IconType) => {
  return IconMap[type];
};
