import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import Constants from '~/common/Constant';
import { Platform } from 'react-native';

export const TabOptions = (show: boolean): BottomTabNavigationOptions => {
  return {
    tabBarLabel: () => null,
    headerShown: false,
    tabBarInactiveTintColor: Constants.whiteGray,
    tabBarActiveTintColor: Constants.mainColor,
    tabBarStyle: {
      display: show ? 'flex' : 'none',
      height: 60,
      position: 'absolute',
      bottom: 25,
      left: 20,
      right: 20,
      elevation: 5,
      backgroundColor: Constants.white,
      borderRadius: 20,
      shadowColor: 'rgba(0, 0, 0, 0.3)',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      ...Platform.select({
        ios: {
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
        },
        android: {
          elevation: 5,
        },
      }),
    },
  };
};
