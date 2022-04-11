import React, { PropsWithChildren } from 'react';
import { Text } from 'react-native';

import normalize from '../../helpers/normalize';
import GalioTheme, { withGalio } from '../../theme';
import { BaseInternalProps, BaseProps, InternalProps } from '../../types';

export interface TextProps extends BaseProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  p?: boolean;
  size?: number;
  color?: string;
  muted?: boolean;
  bold?: boolean;
  italic?: boolean;
}

const TextDefaultProps: TextProps = {
  // children: null,
  // style: null,
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  h5: false,
  h6: false,
  p: false,
  body: false,
  small: false,
  size: 0,
  // color: null,
  muted: false,
  bold: false,
  italic: false,
  styles: {},
  theme: GalioTheme,
};

function Typography(props: PropsWithChildren<TextProps>) {

  props = {
    ...TextDefaultProps,
    ...props
  };

  const {
    style,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    body,
    small,
    muted,
    neutral,
    size,
    color,
    bold,
    italic,
    center,
    children,
    styles,
    theme,
    ...rest
  } = props as InternalProps<TextProps>; 

  return (
    <Text
      style={[
        h1 && { fontSize: normalize(44) },
        h2 && { fontSize: normalize(38) },
        h3 && { fontSize: normalize(30) },
        h4 && { fontSize: normalize(24) },
        h5 && { fontSize: normalize(21) },
        h6 && { fontSize: normalize(18) },
        p && { fontSize: normalize(16) },
        body && { fontSize: normalize(14) },
        small && { fontSize: normalize(12) },
        muted && { color: theme.COLORS.MUTED },
        neutral && { color: theme.COLORS.NEUTRAL },
        size && { fontSize: size },
        color && { color },
        italic && { fontStyle: 'italic' },
        bold && { fontWeight: 'bold' },
        center && { textAlign: 'center' },
        style && style,
      ]}
      {...rest}>
      {children}
    </Text>
  );
}

export default withGalio(Typography);

// Typography.defaultProps = {
//   children: null,
//   style: null,
//   h1: false,
//   h2: false,
//   h3: false,
//   h4: false,
//   h5: false,
//   h6: false,
//   p: false,
//   body: false,
//   small: false,
//   size: 0,
//   color: null,
//   muted: false,
//   bold: false,
//   italic: false,
//   styles: {},
//   theme: GalioTheme,
// };

// Typography.propTypes = {
//   children: PropTypes.any,
//   style: PropTypes.any,
//   h1: PropTypes.bool,
//   h2: PropTypes.bool,
//   h3: PropTypes.bool,
//   h4: PropTypes.bool,
//   h5: PropTypes.bool,
//   h6: PropTypes.bool,
//   p: PropTypes.bool,
//   body: PropTypes.bool,
//   small: PropTypes.bool,
//   size: PropTypes.number,
//   color: PropTypes.string,
//   muted: PropTypes.bool,
//   bold: PropTypes.bool,
//   italic: PropTypes.bool,
//   styles: PropTypes.any,
//   theme: PropTypes.any,
// };