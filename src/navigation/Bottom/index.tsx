// TabIcons.tsx
import React from 'react';
import {Animated} from 'react-native';
import VectorIcon from '~/components/VectorIcon';
import colors from '~/constants/colors';

interface TabIconProps {
  color: string;
  focused: boolean;
}

export const HomeTabIcon: React.FC<TabIconProps> = ({color, focused}) => (
  <Animated.View style={{transform: [{scale: focused ? 1.1 : 1}]}}>
    <VectorIcon.AntDesignVectorIcon name="home" size={30} color={color} />
  </Animated.View>
);

export const CreateTabIcon: React.FC<TabIconProps> = ({focused}) => (
  <Animated.View
    style={{
      backgroundColor: focused ? colors.mainColor : colors.whiteGray,
      width: 50,
      height: 50,
      transform: [{scale: focused ? 1.2 : 1}],
      top: -20,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 4,
      borderColor: 'transparent',
    }}>
    <VectorIcon.MaterialVectorIcon name="add" size={30} color={colors.white} />
  </Animated.View>
);

export const MenuTabIcon: React.FC<TabIconProps> = ({color, focused}) => (
  <Animated.View style={{transform: [{scale: focused ? 1.1 : 1}]}}>
    <VectorIcon.FeatherVectorIcon name="menu" size={30} color={color} />
  </Animated.View>
);
