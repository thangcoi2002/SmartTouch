import {User} from '../types';
import {
  SET_CURRENT_USER,
  SET_TOKEN,
  SET_LOADING,
  TOGGLE_DARK_MODE,
  REMOVE_CURRENT_USER,
  TOGGLE_FIRST_OPEN,
  SET_LANGUAGE,
} from '../actionTypes';

export const setCurrentUser = (user: User) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const removeCurrentUser = () => ({
  type: REMOVE_CURRENT_USER,
});

export const setToken = (token: string) => ({
  type: SET_TOKEN,
  payload: token,
});

export const setLoading = (isLoading: boolean) => ({
  type: SET_LOADING,
  payload: isLoading,
});

export const toggleDarkMode = (darkMode: boolean) => ({
  type: TOGGLE_DARK_MODE,
  payload: darkMode,
});

export const toggleFirstOpen = (firstOpen: boolean) => ({
  type: TOGGLE_FIRST_OPEN,
  payload: firstOpen,
});

export const setLanguage = (language: string) => ({
  type: SET_LANGUAGE,
  payload: language,
});
