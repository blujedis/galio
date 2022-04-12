import React, { useState, useEffect, ReactNode } from 'react';
import {
  Animated,
  TouchableWithoutFeedback,
  FlatList,
  StyleSheet,
  Dimensions,
  TextStyle,
  ViewStyle
} from 'react-native';

import Block from './Block';
import Icon, { IconProps } from './atomic/ions/Icon';
import Text from './atomic/ions/Text';
import GalioTheme, { withGalio } from './theme';
import { BaseProps, InternalProps, ThemeType } from './types';

export type AccordianStyles = ReturnType<typeof styles>;

export type AccordianActionHandler = (item?: AccordianItem, index?: number) => void;

export type AccordianItem = {
  title: string;
  content: ReactNode;
  icon: IconProps;
} & Record<string, unknown>;

export interface AccordianHeaderProps {
  expanded: boolean;
  expandedIcon: IconProps;
  chapterIcon: IconProps;
  headerStyle: ViewStyle;
  title: ReactNode;
  icon: typeof Icon;
}

export interface AccordianItemsProps {
  expanded: boolean;
  expandedIcon: IconProps;
  headerStyle: ViewStyle;
  contentStyle: TextStyle;
  animationStyle: ViewStyle;
  icon: typeof Icon;
  index: number;
  item: AccordianItem;
  onAccordionOpen: AccordianActionHandler;
  onAccordionClose: AccordianActionHandler;
  setSelected: (index: number) => void;
  styles: AccordianStyles;
}

export interface AccordianProps extends BaseProps {
  dataArray: AccordianItem[];
  icon: typeof Icon;
  expandedIcon: IconProps;
  headerStyle: ViewStyle;
  contentStyle: TextStyle;
  listStyle: ViewStyle;
  animationStyle: ViewStyle;
  opened: boolean;
  onAccordionOpen: AccordianActionHandler;
  onAccordionClose: AccordianActionHandler;
}

const AccordianDefaultProps = {
  theme: GalioTheme,
  // opened: 0
};

const { width } = Dimensions.get("screen");


function AccordionContent({ content, contentStyle, styles }: { content: ReactNode, contentStyle: TextStyle, styles: AccordianStyles }) {
  return <Text style={[styles.content, contentStyle]}>{content}</Text>;
}

function AccordionAnimation({ children, style }: { children: ReactNode, style?: ViewStyle }) {
  const [fade, setFade] = useState(new Animated.Value(0.3));

  useEffect(() => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  });

  return (
    <Animated.View style={{ ...style, opacity: fade }}>
      {children}
    </Animated.View>
  );
}

function AccordionHeader(props: AccordianHeaderProps) {

  const {
    expanded,
    expandedIcon,
    headerStyle,
    icon,
    title,
    chapterIcon,
  } = props;

  return (
    <Block row middle style={[{ padding: 6 }, headerStyle]}>
      {chapterIcon ? (
        <Icon
          name={chapterIcon.name}
          family={chapterIcon.family}
          size={chapterIcon.size || 14}
          color={chapterIcon.color || GalioTheme.COLORS.PRIMARY}
          style={chapterIcon.style || { marginRight: 5 }}
        />
      ) : null}
      <Block row space="between" middle flex>
        <>
          <Text size={16}>{title}</Text>
          {expanded
            ? expandedIcon || (
              <Icon
                name="keyboard-arrow-up"
                family="material"
                size={16}
                color={GalioTheme.COLORS.MUTED}
              />
            )
            : icon || (
              <Icon
                name="keyboard-arrow-down"
                family="material"
                size={16}
                color={GalioTheme.COLORS.MUTED}
              />
            )}
        </>
      </Block>
    </Block>
  );
}

function AccordionItem(props: AccordianItemsProps) {

  const {
    expanded,
    expandedIcon,
    headerStyle,
    contentStyle,
    animationStyle,
    icon,
    index,
    item,
    onAccordionClose,
    onAccordionOpen,
    setSelected,
    styles
  } = props;

  return (
    <Block>
      <TouchableWithoutFeedback
        onPress={() => {
          onAccordionOpen && !expanded && onAccordionOpen(item, index);
          onAccordionClose && expanded && onAccordionClose(item, index);
          setSelected(index);
        }}
      >
        <Block>
          <AccordionHeader
            expanded={expanded}
            expandedIcon={expandedIcon}
            headerStyle={headerStyle}
            icon={icon}
            title={item.title}
            chapterIcon={item.icon}
          />
        </Block>
      </TouchableWithoutFeedback>
      {expanded ? (
        <AccordionAnimation style={animationStyle}>
          <AccordionContent
            content={item.content}
            contentStyle={contentStyle}
            styles={styles}
          />
        </AccordionAnimation>
      ) : null}
    </Block>
  );
}

function Accordion(props: AccordianProps) {

  props = {
    ...AccordianDefaultProps,
    ...props
  };

  const {
    dataArray,
    icon,
    expandedIcon,
    headerStyle,
    contentStyle,
    opened,
    onAccordionOpen,
    onAccordionClose,
    listStyle,
    animationStyle,
    theme,
    styles,
    style
  } = props as Omit<InternalProps<AccordianProps, AccordianStyles>, 'children'>;

  const [selected, setSelected] = useState(opened);

  return (
    <Block style={[styles.container, style]}>
      <FlatList
        data={dataArray}
        extraData={selected}
        style={listStyle}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item, index }) => (
          <AccordionItem
            key={String(index)}
            expanded={selected === index}
            expandedIcon={expandedIcon}
            icon={icon}
            headerStyle={headerStyle}
            contentStyle={contentStyle}
            animationStyle={animationStyle}
            onAccordionOpen={onAccordionOpen}
            onAccordionClose={onAccordionClose}
            styles={styles}
            item={item}
            index={index}
            setSelected={(s) => setSelected(selected === s ? undefined : s)}
          />
        )}
      />
    </Block>
  );
}

const styles = (theme: ThemeType) => StyleSheet.create({
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

export default withGalio(Accordion, styles);

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

