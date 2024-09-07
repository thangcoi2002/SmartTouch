import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AppState, User} from '../types';
import {useAppSelector} from '../store';
import {
  getLocalStorage,
  saveLocalStorage,
  updateLocalStorage,
} from '~/utils/localStorage';

const initData: AppState = {
  currentUser: null,
  token: null,
  isLoading: true,
  darkMode: false,
  firstOpen: true,
  status: 'idle',
};

export const appSlice = createSlice({
  name: 'app',
  initialState: initData,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(updateDataUser.pending, state => {
        state.status = 'loading';
      })
      .addCase(updateDataUser.fulfilled, (state, action) => {
        state.status = 'idle';
        state.currentUser = action.payload;
      })
      .addCase(updateDataUser.rejected, state => {
        state.status = 'failed';
      })
      .addCase(firstAppOpen.pending, state => {
        state.status = 'loading';
      })
      .addCase(firstAppOpen.fulfilled, state => {
        state.status = 'idle';
        state.firstOpen = false;
      })
      .addCase(firstAppOpen.rejected, state => {
        state.status = 'failed';
      })
      .addCase(toggleLoading.pending, state => {
        state.status = 'loading';
      })
      .addCase(toggleLoading.fulfilled, (state, action) => {
        state.status = 'idle';
        state.isLoading = action.payload;
      })
      .addCase(toggleLoading.rejected, state => {
        state.status = 'failed';
      })
      .addCase(toggleDarkMode.pending, state => {
        state.status = 'loading';
      })
      .addCase(toggleDarkMode.fulfilled, (state, action) => {
        state.status = 'idle';
        state.darkMode = action.payload;
      })
      .addCase(toggleDarkMode.rejected, state => {
        state.status = 'failed';
      })
      .addCase(loadApp.pending, state => {
        state.status = 'loading';
      })
      .addCase(loadApp.fulfilled, (state, action) => {
        state.status = 'idle';
        state.currentUser = action.payload.currentUser;
        state.firstOpen = action.payload.firstOpen;
        state.darkMode = action.payload.darkMode;
      })
      .addCase(loadApp.rejected, state => {
        state.status = 'failed';
      })
      .addCase(logout.pending, state => {
        state.status = 'loading';
      })
      .addCase(logout.fulfilled, state => {
        state.status = 'idle';
        state.currentUser = null;
      })
      .addCase(logout.rejected, state => {
        state.status = 'failed';
      })
      .addCase(signIn.pending, state => {
        state.status = 'loading';
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = 'idle';
        state.currentUser = action.payload;
      })
      .addCase(signIn.rejected, state => {
        state.status = 'failed';
      });
  },
});

export const updateDataUser = createAsyncThunk(
  'app/updateDataUser',
  async (value: User) => {
    return value;
  },
);

export const firstAppOpen = createAsyncThunk('app/firstAppOpen', async () => {
  await updateLocalStorage({key: 'appInfo', value: {firstOpen: false}});
});

export const loadApp = createAsyncThunk('app/loadApp', async () => {
  const appInfo = await getLocalStorage({key: 'appInfo'});
  if (!appInfo) {
    await saveLocalStorage({key: 'appInfo', value: initData});
  }
  return appInfo;
});

export const toggleLoading = createAsyncThunk(
  'app/toggleLoading',
  async (statusLoading: boolean) => {
    return statusLoading;
  },
);

export const signIn = createAsyncThunk(
  'app/signIn',
  async (valueUser: User) => {
    await updateLocalStorage({key: 'appInfo', value: {currentUser: valueUser}});
    return valueUser;
  },
);

export const logout = createAsyncThunk('app/logout', async () => {
  await updateLocalStorage({key: 'appInfo', value: {currentUser: null}});
});

export const toggleDarkMode = createAsyncThunk(
  'app/toggleDarkMode',
  async (statusDarkMode: boolean) => {
    await updateLocalStorage({
      key: 'appInfo',
      value: {darkMode: statusDarkMode},
    });
    return statusDarkMode;
  },
);

export const useSelectorApp = () => useAppSelector(state => state.app);
export const useSelectorOnboarding = () =>
  useAppSelector(state => state.app.firstOpen);
