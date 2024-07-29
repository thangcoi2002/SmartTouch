import {NavigationProp} from '@react-navigation/native';

export enum ScreenName {
  Home = 'Home',
  GetStart = 'GetStart',
  Loading = 'Loading',
  Authenticate = 'Authenticate',
  AddDevice = 'AddDevice',
  Menu = 'Menu',
  DisplaySetting = 'DisplaySetting',

  // Stack
  HomeStack = 'HomeStack',
  MenuStack = 'MenuStack',
}

export type RootStackParamList = {
  [key in ScreenName]: undefined;
};

export type NavigationPropStack = NavigationProp<RootStackParamList>;
export const screenTitle: Record<ScreenName, string> = {} as Record<
  ScreenName,
  string
>;
