import {createStackNavigator} from '@react-navigation/stack';

import {ScreenName} from '../type';
import React from 'react';
import {StackOptions} from './StackOptions';
import AddDeviceScreen from '~/screens/AddDeviceScreen/AddDeviceScreen';

const Stack = createStackNavigator();
const AddStack = () => {
  return (
    <Stack.Navigator screenOptions={StackOptions}>
      <Stack.Screen name={ScreenName.AddDevice} component={AddDeviceScreen} />
    </Stack.Navigator>
  );
};

export default AddStack;
