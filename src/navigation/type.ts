import {NavigationProp} from '@react-navigation/native';

export enum ScreenName {
  Home = 'Home',
  GetStart = 'GetStart',
  Loading = 'Loading',
  Authenticate = 'Authenticate',
  AddDevice = 'AddDevice',
  Menu = 'Menu',
  DisplaySetting = 'DisplaySetting',
  Account = 'Account',
  EditProfile = 'EditProfile',
  CreateDetail = 'CreateDetail',

  // Stack
  HomeStack = 'HomeStack',
  MenuStack = 'MenuStack',
  AddStack = 'AddStack',
}

export type RootStackParamList = {
  [ScreenName.Home]: undefined;
  [ScreenName.GetStart]: undefined;
  [ScreenName.Loading]: undefined;
  [ScreenName.Authenticate]: undefined;
  [ScreenName.AddDevice]: undefined;
  [ScreenName.Menu]: undefined;
  [ScreenName.DisplaySetting]: undefined;
  [ScreenName.Account]: undefined;
  [ScreenName.EditProfile]: undefined;
  [ScreenName.CreateDetail]: {deviceId: string};

  [ScreenName.HomeStack]: undefined;
  [ScreenName.MenuStack]: undefined;
  [ScreenName.AddStack]: undefined;
};

export type NavigationPropStack = NavigationProp<RootStackParamList>;
export const screenTitle: Record<ScreenName, string> = {} as Record<
  ScreenName,
  string
>;
