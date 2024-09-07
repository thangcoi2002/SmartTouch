import {createStackNavigator} from '@react-navigation/stack';

import {ScreenName} from '../type';
import React from 'react';
import {StackOptions} from './StackOptions';
import CreateDevice from '~/screens/CreateDevice';
import CreateDetail from '~/screens/CreateDetail/CreateDetail';

const Stack = createStackNavigator();
const AddStack = () => {
  return (
    <Stack.Navigator screenOptions={StackOptions}>
      <Stack.Screen name={ScreenName.AddDevice} component={CreateDevice} />
      <Stack.Screen name={ScreenName.CreateDetail} component={CreateDetail} />
    </Stack.Navigator>
  );
};

export default AddStack;
