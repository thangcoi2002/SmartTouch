import {
  SET_CURRENT_USER,
  SET_TOKEN,
  SET_LOADING,
  TOGGLE_DARK_MODE,
  REMOVE_CURRENT_USER,
  TOGGLE_FIRST_OPEN,
  SET_LANGUAGE,
} from '../actionTypes';
import {Action, AppState, User} from '../types';

const initData: AppState = {
  currentUser: null,
  token: null,
  isLoading: true,
  darkMode: false,
  firstOpen: true,
  language: 'vi',
};

const appReducer = (state = initData, action: Action): AppState => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {...state, currentUser: action.payload as User};
    case REMOVE_CURRENT_USER:
      return {...state, currentUser: null};
    case SET_TOKEN:
      return {...state, token: action.payload};
    case SET_LOADING:
      return {...state, isLoading: action.payload};
    case TOGGLE_FIRST_OPEN:
      return {...state, firstOpen: action.payload};
    case TOGGLE_DARK_MODE:
      return {...state, darkMode: action.payload};
    case SET_LANGUAGE:
      return {...state, language: action.payload};
    default:
      return state;
  }
};

export default appReducer;
