import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';
import { BaseProps } from './types';
export interface DeckSwiperProps extends BaseProps {
    style?: ViewStyle;
    components?: ReactNode[];
    onSwipeRight?: () => void;
    onSwipeLeft?: () => void;
    focusedElementStyle?: ViewStyle;
    nextElementStyle?: ViewStyle;
}
declare function DeckSwiper(props: DeckSwiperProps): JSX.Element;
export default DeckSwiper;
