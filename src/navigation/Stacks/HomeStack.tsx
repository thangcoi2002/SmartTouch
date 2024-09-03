import {createStackNavigator} from '@react-navigation/stack';

import {ScreenName} from '../type';
import React from 'react';
import {StackOptions} from './StackOptions';
import HomeScreen from '~/screens/HomeScreen';

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={StackOptions}>
      <Stack.Screen name={ScreenName.Home} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
