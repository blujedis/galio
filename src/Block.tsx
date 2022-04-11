import React, { PropsWithChildren } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

import GalioTheme, { withGalio } from './theme';
import { BaseProps, InternalProps, ThemeType } from './types';

export type BlockStyles = ReturnType<typeof styles>;

export interface BlockProps extends BaseProps {
  bottom?: boolean;
  card?: boolean;
  center?: boolean;
  flex?: boolean | number;
  fluid?: boolean;
  height?: number;
  left?: boolean;
  middle?: boolean;
  right?: boolean;
  row?: boolean;
  safe?: boolean;
  shadow?: boolean;
  shadowColor?: boolean;
  space?: 'between' | 'around' | 'evenly';
  top?: boolean;
  width?: number;
}

const BlockDefaultProps: BlockProps = {
  row: false,
  flex: false,
  center: false,
  middle: false,
  top: false,
  bottom: false,
  right: false,
  left: false,
  card: false,
  shadow: false,
  // space: null,
  fluid: false,
  // height: null,
  // width: null,
  // shadowColor: null,
  safe: false,
  styles: {},
  theme: GalioTheme,
};

function Block(props: PropsWithChildren<BlockProps>) {
  props = {
    ...BlockDefaultProps,
    ...props,
  };

  const {
    row,
    flex,
    center,
    middle,
    top,
    bottom,
    right,
    left,
    shadow,
    space,
    fluid,
    height,
    shadowColor,
    card,
    width,
    safe,
    children,
    style,
    styles,
    ...rest
  } = props as InternalProps<BlockProps, BlockStyles>;

  const styleBlock = [
    styles.block,
    row && styles.row,
    flex && { flex: flex === true ? 1 : flex },
    center && styles.center,
    middle && styles.middle,
    top && styles.top,
    bottom && styles.bottom,
    right && styles.right,
    left && styles.left,
    space && { justifyContent: `space-${space}` },
    shadow && styles.shadow,
    fluid && styles.fluid,
    card && styles.card,
    height && { height },
    width && { width },
    shadowColor && { shadowColor },
    style,
  ];

  if (safe) {
    return (
      <SafeAreaView style={styleBlock} {...rest}>
        {children}
      </SafeAreaView>
    );
  }

  return (
    <View style={styleBlock} {...rest}>
      {children}
    </View>
  );
}

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    block: {
      flexDirection: 'column',
    },
    row: {
      flexDirection: 'row',
    },
    middle: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    center: {
      alignItems: 'center',
      alignSelf: 'center',
    },
    left: {
      alignItems: 'flex-start',
    },
    right: {
      alignItems: 'flex-end',
    },
    top: {
      alignItems: 'flex-start',
      alignSelf: 'flex-start',
    },
    bottom: {
      alignItems: 'flex-end',
      alignSelf: 'flex-end',
    },
    card: {
      borderRadius: theme.SIZES.CARD_BORDER_RADIUS,
      borderWidth: theme.SIZES.CARD_BORDER_WIDTH,
      borderColor: theme.COLORS.BLOCK,
    },
    shadow: {
      shadowColor: theme.COLORS.BLOCK,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: theme.SIZES.BLOCK_SHADOW_OPACITY,
      shadowRadius: theme.SIZES.BLOCK_SHADOW_RADIUS,
      elevation: theme.SIZES.ANDROID_ELEVATION,
    },
    fluid: {
      width: 'auto',
    },
  });

export default withGalio(Block, styles);


// Block.defaultProps = {
//   row: false,
//   flex: false,
//   center: false,
//   middle: false,
//   top: false,
//   bottom: false,
//   right: false,
//   left: false,
//   card: false,
//   shadow: false,
//   space: null,
//   fluid: false,
//   height: null,
//   width: null,
//   shadowColor: null,
//   safe: false,
//   styles: {},
//   theme: GalioTheme,
// };

// Block.propTypes = {
//   row: PropTypes.bool,
//   flex: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
//   center: PropTypes.bool,
//   middle: PropTypes.bool,
//   top: PropTypes.bool,
//   bottom: PropTypes.bool,
//   right: PropTypes.bool,
//   card: PropTypes.bool,
//   left: PropTypes.bool,
//   shadow: PropTypes.bool,
//   space: PropTypes.oneOf(['between', 'around', 'evenly' ]),
//   fluid: PropTypes.bool,
//   height: PropTypes.number,
//   width: PropTypes.number,
//   shadowColor: PropTypes.string,
//   safe: PropTypes.bool,
//   styles: PropTypes.any,
//   theme: PropTypes.any,
// };
