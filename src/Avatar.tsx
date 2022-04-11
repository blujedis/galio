import React, { PropsWithChildren } from 'react';
import { View, Text, StyleSheet, Image, ImageProps, ImageStyle, ViewStyle, TextStyle } from 'react-native';

import { withGalio } from './theme';
import { BaseProps, InternalProps, ThemeType } from './types';

export type AvatarStyles = ReturnType<typeof styles>;

export interface AvatarProps extends BaseProps {
  source?: ImageProps['source'];
  size?: number;
  label?: string;
  labelColor?: string;
  backgroundColor?: string;
  labelStyle?: TextStyle;
  imageProps?: ImageProps;
  imageStyle?: ImageStyle;
  containerStyle?: ViewStyle;
}

const DefaultAvatarProps: AvatarProps = {
  size: 50,
};

const Avatar = (props: PropsWithChildren<AvatarProps>) => {

  props = {
    ...DefaultAvatarProps,
    ...props
  };

  const {
    source,
    size,
    label,
    labelColor,
    backgroundColor,
    labelStyle,
    imageProps,
    imageStyle,
    containerStyle,
    styles,
    theme,
  } = props as InternalProps<AvatarProps, AvatarStyles>;


  const getContainerStyle = () => {
    return {
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: size / 2,
    } as Record<string, any>;
  };

  const getLabelContainerStyle = () => {
    return {
      ...StyleSheet.absoluteFillObject,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: size / 2,
    };
  };

  const renderImage = () => {
    if (source) {
      return (
        <Image
          style={[getContainerStyle(), StyleSheet.absoluteFillObject, imageStyle]}
          {...{ source }}
          {...imageProps}
        />
      );
    }
    return null;
  };

  const labelContainerStyle = [
    getLabelContainerStyle(),
    source && styles.labelContainerWithInset,
    { backgroundColor: backgroundColor || theme.COLORS.MUTED },
  ];

  const labelTextStyle = [
    { fontSize: size * 0.32 },
    styles.labelText,
    labelColor && { color: labelColor },
    labelStyle || {},
  ];

  return (
    <View style={[getContainerStyle(), containerStyle]}>
      <View style={labelContainerStyle}>
        {label && (
          <Text numberOfLines={1} style={labelTextStyle}>
            {label}
          </Text>
        )}
      </View>
      {renderImage()}
    </View>
  );
};


const styles = (theme: ThemeType) =>
  StyleSheet.create({
    labelContainerWithInset: {
      top: 1,
      right: 1,
      bottom: 1,
      left: 1,
    },
    labelText: {
      color: theme.COLORS.BLACK,
      backgroundColor: 'transparent',
    },
  });

export default withGalio(Avatar, styles);


// Avatar.defaultProps = {
//   size: 50,
// };

// Avatar.propTypes = {
//   label: PropTypes.string,
//   labelColor: PropTypes.string,
//   size: PropTypes.number,
//   source: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
//   backgroundColor: PropTypes.string,
//   imageProps: PropTypes.object,
//   imageStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.number]),
//   containerStyle: PropTypes.shape({
//     style: PropTypes.any,
//   }),
//   styles: PropTypes.any,
//   theme: PropTypes.any,
// };
