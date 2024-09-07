import React, {useEffect, useState} from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';

import MainTabs from './Tabs/MainTabs';
import AuthStack from './Stacks/AuthStack';
import LoadingScreen from '~/screens/LoadingScreen/LoadingScreen';
import {useAppDispatch} from '~/redux/store';
import {loadApp, toggleLoading, useSelectorApp} from '~/redux/slices/app.slice';

const ref = createNavigationContainerRef();

export const Navigation: React.FC = () => {
  const dispatch = useAppDispatch();
  const loadingApp = useSelectorApp();
  const [routeName, setRouteName] = useState<string | undefined>();

  useEffect(() => {
    const fetchApp = async () => {
      dispatch(loadApp());
      setTimeout(() => {
        dispatch(toggleLoading(false));
      }, 1000);
    };

    fetchApp();
  }, [dispatch]);

  return (
    <>
      {loadingApp.isLoading ? (
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
          {loadingApp.currentUser ? (
            <MainTabs state={loadingApp} routeName={routeName} />
          ) : (
            <AuthStack state={loadingApp} />
          )}
        </NavigationContainer>
      )}
    </>
  );
};
