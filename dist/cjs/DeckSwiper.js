"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const Block_1 = require("./Block");
const DefaultDeckSwiperProps = {};
const { width: SCREEN_WIDTH } = react_native_1.Dimensions.get('screen');
function DeckSwiper(props) {
    props = {
        ...DefaultDeckSwiperProps,
        ...props
    };
    const { onSwipeRight, onSwipeLeft, focusedElementStyle, nextElementStyle, components, style } = props;
    const [currentIndex, setCurrentIndex] = react_1.default.useState(0);
    const position = new react_native_1.Animated.ValueXY();
    const rotate = position.x.interpolate({
        inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
        outputRange: ["-10deg", "0deg", "10deg"],
        extrapolate: "clamp"
    });
    const rotateAndTranslate = {
        transform: [
            {
                rotate: rotate
            },
            ...position.getTranslateTransform()
        ]
    };
    const nextCardOpacity = position.x.interpolate({
        inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
        outputRange: [1, 0, 1],
        extrapolate: "clamp"
    });
    const nextCardScale = position.x.interpolate({
        inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
        outputRange: [1, 0.8, 1],
        extrapolate: "clamp"
    });
    const panResponder = react_native_1.PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onPanResponderMove: (evt, gestureState) => {
            position.setValue({ x: gestureState.dx, y: gestureState.dy });
        },
        onPanResponderRelease: (evt, gestureState) => {
            if (gestureState.dx > 110) {
                react_native_1.Animated.spring(position, {
                    toValue: {
                        x: SCREEN_WIDTH + 100,
                        y: gestureState.dy
                    },
                    useNativeDriver: false
                }).start(() => {
                    setCurrentIndex(currentIndex + 1);
                });
                if (onSwipeRight)
                    onSwipeRight();
            }
            else if (gestureState.dx < -110) {
                react_native_1.Animated.spring(position, {
                    toValue: {
                        x: -SCREEN_WIDTH - 100,
                        y: gestureState.dy
                    },
                    useNativeDriver: false
                }).start(() => {
                    setCurrentIndex(currentIndex + 1);
                });
                if (onSwipeLeft)
                    onSwipeLeft();
            }
            else {
                react_native_1.Animated.spring(position, {
                    toValue: { x: 0, y: 0 },
                    friction: 4,
                    useNativeDriver: false
                }).start();
            }
        },
    });
    react_1.default.useEffect(() => {
        position.setValue({ x: 0, y: 0 });
    }, [currentIndex]);
    function renderComponents(components) {
        return components.map((item, i) => {
            if (i < currentIndex) {
                return null;
            }
            else if (i == currentIndex) {
                return (<react_native_1.Animated.View key={i} style={[
                        rotateAndTranslate,
                        {
                            ...react_native_1.StyleSheet.absoluteFillObject
                        },
                        focusedElementStyle
                    ]} {...panResponder.panHandlers}>
            {item}
          </react_native_1.Animated.View>);
            }
            else {
                return (<react_native_1.Animated.View key={i} style={[{
                            opacity: nextCardOpacity,
                            transform: [{ scale: nextCardScale }],
                            ...react_native_1.StyleSheet.absoluteFillObject
                        }, nextElementStyle]}>
            {item}
          </react_native_1.Animated.View>);
            }
        }).reverse();
    }
    return (<Block_1.default flex center style={[{ width: SCREEN_WIDTH * 0.7 }, style]}>
      {renderComponents(components)}
    </Block_1.default>);
}
exports.default = DeckSwiper;
// DeckSwiper.propTypes = {
//   components: PropTypes.array.isRequired,
//   onSwipeRight: PropTypes.func, 
//   onSwipeLeft: PropTypes.func,
//   focusedElementStyle: PropTypes.any,
//   nextElementStyle: PropTypes.any,
//   style: PropTypes.any
// }
//# sourceMappingURL=DeckSwiper.js.map