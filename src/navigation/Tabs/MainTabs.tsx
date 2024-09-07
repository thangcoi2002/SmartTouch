import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StatusBar} from 'react-native';

import {ScreenName} from '../type';
import {TabOptions} from './TabOptions';
import HomeStack from '../Stacks/HomeStack';
import MenuStack from '../Stacks/MenuStack';
import AddStack from '../Stacks/CreateStack';
import {useSelectorApp} from '~/redux/slices/app.slice';
import {HomeTabIcon, CreateTabIcon, MenuTabIcon} from '../Bottom';
import {AppState} from '~/redux/types';

interface MainTabProps {
  routeName?: string;
  state?: AppState;
}

const Tab = createBottomTabNavigator();

const MainTabs: React.FC<MainTabProps> = ({routeName}) => {
  const show =
    routeName === ScreenName.Home ||
    routeName === ScreenName.Menu ||
    routeName === ScreenName.AddDevice ||
    routeName === ScreenName.Authenticate;
  const {darkMode} = useSelectorApp();

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={darkMode ? 'light-content' : 'dark-content'}
      />
      <Tab.Navigator
        initialRouteName={ScreenName.HomeStack}
        screenOptions={() => TabOptions(show)}>
        <Tab.Screen
          name={ScreenName.HomeStack}
          component={HomeStack}
          options={{
            tabBarIcon: HomeTabIcon,
          }}
        />

        <Tab.Screen
          name={ScreenName.AddStack}
          component={AddStack}
          options={{
            tabBarIcon: CreateTabIcon,
          }}
        />

        <Tab.Screen
          name={ScreenName.MenuStack}
          component={MenuStack}
          options={{
            tabBarIcon: MenuTabIcon,
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default MainTabs;
