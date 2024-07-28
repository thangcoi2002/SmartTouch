import {NavigationProp} from '@react-navigation/native';

export enum ScreenName {
  Home = 'Home',
  GetStart = 'GetStart',
  Loading = 'Loading',
  Login = 'Login',
  Register = 'Register',
}

export type RootStackParamList = {
  [key in ScreenName]: undefined;
};

export type NavigationPropStack = NavigationProp<RootStackParamList>;
export const screenTitle: Record<ScreenName, string> = {} as Record<ScreenName, string>;
