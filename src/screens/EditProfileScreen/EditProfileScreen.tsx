import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';

import {RootStackParamList, ScreenName} from '~/navigation';
import {RootState} from '~/redux/reducers/rootReducer';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Constants, {darkTheme, lightTheme} from '~/common/Constant';
import {linkImage} from '~/utils/linkImage';
import VectorIcon from '~/components/VectorIcon';

const EditProfileScreen = () => {
  const {darkMode, currentUser} = useSelector(
    (state: RootState) => state.appReducer,
  );
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const goBack = () => {
    navigation.goBack();
  };


  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: darkMode
            ? darkTheme.mainColor
            : lightTheme.mainColor,
        },
      ]}>
      <LinearGradient colors={['#00000000', '#5ED5A825']} style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <Image source={linkImage('IC_Back')} style={styles.icon} />
        </TouchableOpacity>
      </LinearGradient>
      <View style={styles.wrapper}>
        <View
          style={[
            styles.wrapperHeader,
            {
              borderBottomColor: darkMode
                ? darkTheme.borderColor
                : lightTheme.borderColor,
            },
          ]}>
          <Image source={linkImage('IC_User')} style={styles.avatar} />
          <Text
            style={[
              styles.fullNameHeader,
              {color: darkMode ? darkTheme.TextColor : lightTheme.TextColor},
            ]}>
            {currentUser?.fullName}
          </Text>
          <TextInput placeholder='Full name'/>
        </View>
      </View>
    </View>
  );
};

export default EditProfileScreen;
