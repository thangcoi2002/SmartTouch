import React from 'react';
import {View, Text} from 'react-native';
import {darkTheme, lightTheme} from '~/constants/colors';
import {useSelectorApp} from '~/redux/slices/app.slice';

const HomeScreen = () => {
  const {darkMode} = useSelectorApp();

  return (
    <View
      style={{
        backgroundColor: darkMode ? darkTheme.mainColor : lightTheme.mainColor,
        flex: 1,
      }}>
      <Text>Toggle darkMode</Text>
    </View>
  );
};

export default HomeScreen;
