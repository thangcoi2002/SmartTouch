export interface User {
  _id: string | null;
  fullName: string | null;
  email: string | null;
  userName: string | null;
  address: string | null;
  phoneNumber: string | null;
}

export interface AppState {
  currentUser: User | null;
  token: string | null;
  isLoading: boolean;
  darkMode: boolean;
  firstOpen: boolean;
}

export interface Action<T = any> {
  type: string;
  payload?: T;
}
