import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {linkImage} from '~/utils/linkImage';
import colors, {darkTheme, lightTheme} from '~/constants/colors';
import {useSelectorApp} from '~/redux/slices/app.slice';

interface HeaderBackProps {
  title?: string;
}

const HeaderBack: React.FC<HeaderBackProps> = ({title}) => {
  const navigation = useNavigation();
  const {darkMode} = useSelectorApp();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity
      onPress={goBack}
      style={[
        styles.container,
        {
          backgroundColor: darkMode
            ? darkTheme.headerColor
            : lightTheme.headerColor,
        },
      ]}
      activeOpacity={1}>
      <Image source={linkImage('IC_Back')} style={styles.icon} />
      <Text
        style={[
          styles.title,
          {
            color: darkMode ? colors.white : colors.black,
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingTop: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    padding: 10,
  },
});

export default HeaderBack;
