import React, {useCallback, useEffect, useState} from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from '~/redux/reducers/rootReducer';
import MainTabs from './Tabs/MainTabs';
import AuthStack from './Stacks/AuthStack';
import {getLocalStorage, saveLocalStorage} from '~/common/LocalStorage';
import {
  setCurrentUser,
  setLanguage,
  setLoading,
  toggleDarkMode,
  toggleFirstOpen,
} from '~/redux/action/appActions';
import LoadingScreen from '~/screens/LoadingScreen/LoadingScreen';
import {useTranslation} from 'react-i18next';

const ref = createNavigationContainerRef();

export const Navigation: React.FC = () => {
  const {i18n} = useTranslation();
  const dispatch = useDispatch();
  const appReducer = useSelector((state: RootState) => state.appReducer);
  const [routeName, setRouteName] = useState<string | undefined>();

  const fetchApp = useCallback(async () => {
    try {
      const [appInfo] = await Promise.all([getLocalStorage({key: 'appInfo'})]);

      if (appInfo === null) {
        await saveLocalStorage({key: 'appInfo', value: appReducer});
      } else {
        dispatch(setCurrentUser(appInfo.currentUser));
        dispatch(toggleFirstOpen(appInfo.firstOpen));
        dispatch(toggleDarkMode(appInfo.darkMode));
        dispatch(setLanguage(appInfo.language));
        i18n.changeLanguage(appInfo.language);
      }

      setTimeout(() => {
        dispatch(setLoading(false));
      }, 2000);
    } catch (error) {
      console.error('Error getting current user:', error);
    }
  }, []);

  useEffect(() => {
    fetchApp();
  }, [fetchApp]);

  return (
    <>
      {appReducer.isLoading ? (
        <LoadingScreen />
      ) : (
        <NavigationContainer
          ref={ref}
          onReady={() => {
            setRouteName(ref.getCurrentRoute()?.name);
          }}
          onStateChange={async () => {
            const currentRouteName = ref.getCurrentRoute()?.name;
            setRouteName(currentRouteName);
          }}>
          {appReducer.currentUser ? (
            <MainTabs state={appReducer} routeName={routeName} />
          ) : (
            <AuthStack state={appReducer} />
          )}
        </NavigationContainer>
      )}
    </>
  );
};
