import {UserType} from './UserType';

export type AppType = Readonly<{
  currentUser: UserType;
  darkMode: boolean;
}>;
