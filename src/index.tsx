
/* eslint-disable import/no-cycle */
import Accordion from './Accordion';
import Block from './Block';
import Card from './Card';
import Checkbox from './Checkbox';
import DeckSwiper from './DeckSwiper';
import NavBar from './NavBar';
import Radio from './Radio';
import Slider from './Slider';
import Switch from './Switch';
import Toast from './Toast';
import Button from './atomic/atoms/Button';
import Input from './atomic/atoms/Input';
import Link from './atomic/atoms/Link';
import Icon from './atomic/ions/Icon';
import Text from './atomic/ions/Text';
import { GalioFont, galioConfig } from './init';
// import galioConfig from './config/galio.json';
import theme, { withGalio, GalioProvider, useGalioTheme } from './theme';

// const GalioFont = require('./fonts/galio.ttf');

export * from './types';

export {
  Accordion,
  Block,
  Button,
  Card,
  Checkbox,
  DeckSwiper,
  Icon,
  Input,
  NavBar,
  Radio,
  Slider,
  Text,
  Link,
  Toast,
  Switch,
  theme,
  withGalio,
  GalioProvider,
  useGalioTheme,
  galioConfig,
  GalioFont,
};
