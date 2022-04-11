"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const theme_1 = require("./theme");
const DefaultAvatarProps = {
    size: 50,
};
const Avatar = (props) => {
    props = {
        ...DefaultAvatarProps,
        ...props
    };
    const { source, size, label, labelColor, backgroundColor, labelStyle, imageProps, imageStyle, containerStyle, styles, theme, } = props;
    const getContainerStyle = () => {
        return {
            width: size,
            height: size,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: size / 2,
        };
    };
    const getLabelContainerStyle = () => {
        return {
            ...react_native_1.StyleSheet.absoluteFillObject,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: size / 2,
        };
    };
    const renderImage = () => {
        if (source) {
            return (<react_native_1.Image style={[getContainerStyle(), react_native_1.StyleSheet.absoluteFillObject, imageStyle]} {...{ source }} {...imageProps}/>);
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
    return (<react_native_1.View style={[getContainerStyle(), containerStyle]}>
      <react_native_1.View style={labelContainerStyle}>
        {label && (<react_native_1.Text numberOfLines={1} style={labelTextStyle}>
            {label}
          </react_native_1.Text>)}
      </react_native_1.View>
      {renderImage()}
    </react_native_1.View>);
};
const styles = (theme) => react_native_1.StyleSheet.create({
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
exports.default = (0, theme_1.withGalio)(Avatar, styles);
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
//# sourceMappingURL=Avatar.js.map