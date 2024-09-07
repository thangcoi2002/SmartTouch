export type FetchingStatus = 'idle' | 'loading' | 'failed';

export interface User {
  id: string | null;
  fullName: string | null;
  email: string | null;
  userName: string | null;
  address: string | null;
  phoneNumber: string | null;
  password: string | null;
}

export interface AppState {
  currentUser: User | null;
  token: string | null;
  isLoading: boolean;
  darkMode: boolean;
  firstOpen: boolean;
  status: FetchingStatus;
}

export interface Action<T = any> {
  type: string;
  payload?: T;
}
