import React, { PropsWithChildren } from 'react';
import Text from '../ions/Text';
import GalioTheme, { withGalio } from '../../theme';
import { BaseInternalProps, BaseProps, InternalProps } from '../../types';

export interface LinkProps extends BaseProps {
  onPress?: () => void;
}

const LinkDefaultProps: LinkProps = {
  // children: null,
  theme: GalioTheme,
};

function Link(props: PropsWithChildren<LinkProps>) {

  props = {
    ...LinkDefaultProps,
    ...props
  };

  const {
    children,
    onPress,
    theme,
    ...rest
  } = props as InternalProps<LinkProps>; 

  return (
    <Text
      color={theme.COLORS.PRIMARY}
      onPress={() => onPress()}
      {...rest}>
      {children}
    </Text>
  );
}

export default withGalio(Link);

// Link.defaultProps = {
//   children: null,
//   theme: GalioTheme,
// };

// Link.propTypes = {
//   children: PropTypes.any,
//   theme: PropTypes.any,
//   onPress: PropTypes.func.isRequired,
// };