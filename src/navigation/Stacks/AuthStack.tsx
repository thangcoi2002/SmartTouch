import {createStackNavigator} from '@react-navigation/stack';

import Onboarding from '~/screens/Onboarding';
import {ScreenName} from '../type';
import React from 'react';
import {StackOptions} from './StackOptions';
import {AppState} from '~/redux/types';
import AuthenticateScreen from '~/screens/AuthenticateScreen';

interface AuthStackProps {
  state: AppState;
}

const Stack = createStackNavigator();
const AuthStack: React.FC<AuthStackProps> = ({state}) => {
  const {firstOpen} = state;

  return (
    <Stack.Navigator
      screenOptions={StackOptions}
      initialRouteName={
        firstOpen ? ScreenName.GetStart : ScreenName.Authenticate
      }>
      <Stack.Screen name={ScreenName.GetStart} component={Onboarding} />
      <Stack.Screen
        name={ScreenName.Authenticate}
        component={AuthenticateScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
