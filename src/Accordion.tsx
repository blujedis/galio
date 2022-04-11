import React, { useState, useEffect, ReactNode } from 'react';
import {
  Animated,
  TouchableWithoutFeedback,
  FlatList,
  StyleSheet,
  Dimensions,
  TextStyle
} from 'react-native';

import Block from './Block';
import Icon from './atomic/ions/Icon';
import Text from './atomic/ions/Text';
import GalioTheme, { withGalio } from './theme';
import { BaseProps, InternalProps, ThemeType } from './types';

export type AccordianStyles = ReturnType<typeof styles>;

export interface AccordianHeaderProps {
  expanded: any;
  expandedIcon: any;
  headerStyle: any;
  icon: any;
  title: any;
  chapterIcon: any;
}

export interface AccordianItemProps {
  expanded: any;
  expandedIcon: any;
  headerStyle: any;
  contentStyle: any;
  icon: any;
  index: any;
  item: any;
  onAccordionClose: any;
  onAccordionOpen: any;
  setSelected: any;
}

export interface AccordianProps extends BaseProps {
  dataArray: any;
  icon: any;
  expandedIcon: any;
  headerStyle: any;
  contentStyle: any;
  opened: any;
  onAccordionOpen: any;
  onAccordionClose: any;
  listStyle: any;
}

const AccordianDefaultProps = {
  theme: GalioTheme,
  // opened: 0
};

const { width } = Dimensions.get("screen");


function AccordionContent({ content, contentStyle }: { content: ReactNode, contentStyle: TextStyle }) {
  return <Text style={[styles.content, contentStyle]}>{content}</Text>;
}

function AccordionHeader(props: AccordianHeaderProps) {

  const {
    expanded,
    expandedIcon,
    headerStyle,
    icon,
    title,
    chapterIcon
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
      </Block>
    </Block>
  );
}

function AccordionAnimation({ children, style }: { children: ReactNode, style: any }) {
  const [fade, setFade] = useState(new Animated.Value(0.3));

  useEffect(() => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true
    }).start();
  });

  return (
    <Animated.View style={{ ...style, opacity: fade }}>
      {children}
    </Animated.View>
  );
}

function AccordionItem(props: AccordianItemProps) {

  const {
    expanded,
    expandedIcon,
    headerStyle,
    contentStyle,
    icon,
    index,
    item,
    onAccordionClose,
    onAccordionOpen,
    setSelected
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
        <AccordionAnimation>
          <AccordionContent
            content={item.content}
            contentStyle={contentStyle}
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
            onAccordionOpen={onAccordionOpen}
            onAccordionClose={onAccordionClose}
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

