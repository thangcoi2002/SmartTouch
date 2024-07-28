import { createStackNavigator } from '@react-navigation/stack';

import GetStatedScreen from '~/screens/GetStatedScreen';
import { ScreenName } from './type';
import LoginScreen from '~/screens/LoginScreen';
import RegisterScreen from '~/screens/RegisterScreen';
import React from 'react';
import { screenOptions } from './screenOptions';
import { AppState } from '~/redux/types';

interface AuthStackProps {
  state: AppState
}
const Stack = createStackNavigator();
const AuthStack: React.FC<AuthStackProps> = ({ state }) => {
  const { firstOpen } = state;

  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName={firstOpen ? ScreenName.GetStart : ScreenName.Login}>
      <Stack.Screen name={ScreenName.GetStart} component={GetStatedScreen} />
      <Stack.Screen name={ScreenName.Login} component={LoginScreen} />
      <Stack.Screen name={ScreenName.Register} component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
