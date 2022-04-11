"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable object-curly-newline */
const react_1 = require("react");
const react_native_1 = require("react-native");
// galio components
const Block_1 = require("./Block");
const Text_1 = require("./atomic/ions/Text");
const Icon_1 = require("./atomic/ions/Icon");
const theme_1 = require("./theme");
const DefaultCardProps = {
    card: true,
    shadow: true,
    borderless: false,
    styles: {},
    theme: theme_1.default,
    title: '',
    titleColor: '',
    caption: '',
    captionColor: '',
    footerStyle: {},
    avatar: '',
};
function Card(props) {
    props = {
        ...DefaultCardProps,
        ...props
    };
    const { avatar, borderless, caption, captionColor, card, children, footerStyle, image, imageBlockStyle, imageStyle, location, locationColor, shadow, style, styles, title, titleColor, theme, ...rest } = props;
    function renderImage() {
        if (!image)
            return null;
        return (<Block_1.default card style={[styles.imageBlock, imageBlockStyle]}>
        <react_native_1.Image source={{ uri: image }} style={[styles.image, imageStyle]}/>
      </Block_1.default>);
    }
    function renderAvatar() {
        if (!avatar)
            return null;
        return <react_native_1.Image source={{ uri: avatar }} style={styles.avatar}/>;
    }
    function renderLocation() {
        if (!location)
            return null;
        if (typeof location !== 'string') {
            return location;
        }
        return (<Block_1.default row right>
        <Icon_1.default name="map-pin" family="feather" color={locationColor || theme.COLORS.MUTED} size={theme.SIZES.FONT}/>
        <Text_1.default muted size={theme.SIZES.FONT * 0.875} color={locationColor || theme.COLORS.MUTED} style={{ marginLeft: theme.SIZES.BASE * 0.25 }}>
          {location}
        </Text_1.default>
      </Block_1.default>);
    }
    function renderAuthor() {
        return (<Block_1.default flex row style={[styles.footer, footerStyle]} space="between">
        <Block_1.default flex={0.3}>{renderAvatar()}</Block_1.default>
        <Block_1.default flex={1.7}>
          <Block_1.default style={styles.title}>
            <Text_1.default size={theme.SIZES.FONT * 0.875} color={titleColor}>
              {title}
            </Text_1.default>
          </Block_1.default>
          <Block_1.default row space="between">
            <Block_1.default row right>
              <Text_1.default p muted size={theme.SIZES.FONT * 0.875} color={captionColor}>
                {caption}
              </Text_1.default>
            </Block_1.default>
            {renderLocation()}
          </Block_1.default>
        </Block_1.default>
      </Block_1.default>);
    }
    const styleCard = [borderless && { borderWidth: 0 }, style];
    return (<Block_1.default {...rest} card={card} shadow={shadow} style={styleCard}>
      {renderImage()}
      {renderAuthor()}
      {children}
    </Block_1.default>);
}
const styles = (theme) => react_native_1.StyleSheet.create({
    card: {
        borderWidth: 0,
        backgroundColor: theme.COLORS.WHITE,
        width: theme.SIZES.CARD_WIDTH,
        marginVertical: theme.SIZES.CARD_MARGIN_VERTICAL,
    },
    footer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: theme.SIZES.CARD_FOOTER_HORIZONTAL,
        paddingVertical: theme.SIZES.CARD_FOOTER_VERTICAL,
        backgroundColor: theme.COLORS.TRANSPARENT,
        zIndex: 1,
    },
    avatar: {
        width: theme.SIZES.CARD_AVATAR_WIDTH,
        height: theme.SIZES.CARD_AVATAR_HEIGHT,
        borderRadius: theme.SIZES.CARD_AVATAR_RADIUS,
    },
    title: {
        justifyContent: 'center',
    },
    imageBlock: {
        borderWidth: 0,
        overflow: 'hidden',
    },
    image: {
        width: 'auto',
        height: theme.SIZES.CARD_IMAGE_HEIGHT,
    },
    round: {
        borderRadius: theme.SIZES.CARD_ROUND,
    },
    rounded: {
        borderRadius: theme.SIZES.CARD_ROUNDED,
    },
});
exports.default = (0, theme_1.withGalio)(Card, styles);
// Card.defaultProps = {
//   card: true,
//   shadow: true,
//   borderless: false,
//   styles: {},
//   theme: GalioTheme,
//   title: '',
//   titleColor: '',
//   caption: '',
//   captionColor: '',
//   footerStyle: {},
//   avatar: '',
// };
// Card.propTypes = {
//   card: PropTypes.bool,
//   shadow: PropTypes.bool,
//   borderless: PropTypes.bool,
//   styles: PropTypes.any,
//   theme: PropTypes.any,
//   title: PropTypes.string,
//   titleColor: PropTypes.string,
//   caption: PropTypes.string,
//   captionColor: PropTypes.string,
//   avatar: PropTypes.string,
//   footerStyle: PropTypes.object,
// };
//# sourceMappingURL=Card.js.map