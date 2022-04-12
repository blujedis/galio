"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const Block_1 = require("./Block");
const Icon_1 = require("./atomic/ions/Icon");
const Text_1 = require("./atomic/ions/Text");
const theme_1 = require("./theme");
const AccordianDefaultProps = {
    theme: theme_1.default,
    // opened: 0
};
const { width } = react_native_1.Dimensions.get("screen");
function AccordionContent({ content, contentStyle, styles }) {
    return <Text_1.default style={[styles.content, contentStyle]}>{content}</Text_1.default>;
}
function AccordionAnimation({ children, style }) {
    const [fade, setFade] = (0, react_1.useState)(new react_native_1.Animated.Value(0.3));
    (0, react_1.useEffect)(() => {
        react_native_1.Animated.timing(fade, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
        }).start();
    });
    return (<react_native_1.Animated.View style={{ ...style, opacity: fade }}>
      {children}
    </react_native_1.Animated.View>);
}
function AccordionHeader(props) {
    const { expanded, expandedIcon, headerStyle, icon, title, chapterIcon, } = props;
    return (<Block_1.default row middle style={[{ padding: 6 }, headerStyle]}>
      {chapterIcon ? (<Icon_1.default name={chapterIcon.name} family={chapterIcon.family} size={chapterIcon.size || 14} color={chapterIcon.color || theme_1.default.COLORS.PRIMARY} style={chapterIcon.style || { marginRight: 5 }}/>) : null}
      <Block_1.default row space="between" middle flex>
        <>
          <Text_1.default size={16}>{title}</Text_1.default>
          {expanded
            ? expandedIcon || (<Icon_1.default name="keyboard-arrow-up" family="material" size={16} color={theme_1.default.COLORS.MUTED}/>)
            : icon || (<Icon_1.default name="keyboard-arrow-down" family="material" size={16} color={theme_1.default.COLORS.MUTED}/>)}
        </>
      </Block_1.default>
    </Block_1.default>);
}
function AccordionItem(props) {
    const { expanded, expandedIcon, headerStyle, contentStyle, animationStyle, icon, index, item, onAccordionClose, onAccordionOpen, setSelected, styles } = props;
    return (<Block_1.default>
      <react_native_1.TouchableWithoutFeedback onPress={() => {
            onAccordionOpen && !expanded && onAccordionOpen(item, index);
            onAccordionClose && expanded && onAccordionClose(item, index);
            setSelected(index);
        }}>
        <Block_1.default>
          <AccordionHeader expanded={expanded} expandedIcon={expandedIcon} headerStyle={headerStyle} icon={icon} title={item.title} chapterIcon={item.icon}/>
        </Block_1.default>
      </react_native_1.TouchableWithoutFeedback>
      {expanded ? (<AccordionAnimation style={animationStyle}>
          <AccordionContent content={item.content} contentStyle={contentStyle} styles={styles}/>
        </AccordionAnimation>) : null}
    </Block_1.default>);
}
function Accordion(props) {
    props = {
        ...AccordianDefaultProps,
        ...props
    };
    const { dataArray, icon, expandedIcon, headerStyle, contentStyle, opened, onAccordionOpen, onAccordionClose, listStyle, animationStyle, theme, styles, style } = props;
    const [selected, setSelected] = (0, react_1.useState)(opened);
    return (<Block_1.default style={[styles.container, style]}>
      <react_native_1.FlatList data={dataArray} extraData={selected} style={listStyle} keyExtractor={(item, index) => String(index)} renderItem={({ item, index }) => (<AccordionItem key={String(index)} expanded={selected === index} expandedIcon={expandedIcon} icon={icon} headerStyle={headerStyle} contentStyle={contentStyle} animationStyle={animationStyle} onAccordionOpen={onAccordionOpen} onAccordionClose={onAccordionClose} styles={styles} item={item} index={index} setSelected={(s) => setSelected(selected === s ? undefined : s)}/>)}/>
    </Block_1.default>);
}
const styles = (theme) => react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        width: width * 0.8,
        borderRadius: 16,
        padding: 8,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        backgroundColor: 'white'
    },
    header: {
        padding: 6
    },
    content: {
        padding: 10
    }
});
exports.default = (0, theme_1.withGalio)(Accordion, styles);
// Accordion.propTypes = {
//   theme: PropTypes.any,
//   dataArray: PropTypes.array,
//   opened: PropTypes.number,
//   listStyle: PropTypes.any,
//   style: PropTypes.any,
//   icon: PropTypes.any,
//   expandedIcon: PropTypes.any,
//   headerStyle: PropTypes.any,
//   contentStyle: PropTypes.any,
//   onAccordionClose: PropTypes.func,
//   onAccordionOpen: PropTypes.func,
// };
// Accordion.defaultProps = {
//   theme: GalioTheme,
//   opened: 0
// };
//# sourceMappingURL=Accordion.js.map