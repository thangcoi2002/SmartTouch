import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Callback,
  CallbackWithResult,
} from '@react-native-async-storage/async-storage/lib/typescript/types';

export const getUserLanguage = (callback?: CallbackWithResult<string>) =>
  AsyncStorage.getItem('language', callback);
export const setUserLanguage = (value: string, callback?: Callback) =>
  AsyncStorage.setItem('language', value, callback);
