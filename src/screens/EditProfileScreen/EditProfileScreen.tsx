import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';

import {RootStackParamList} from '~/navigation';
import {RootState} from '~/redux/reducers/rootReducer';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {darkTheme, lightTheme} from '~/constants/colors';
import {linkImage} from '~/utils/linkImage';
import BodyEditProfile from './BodyEditProfile';
import HeaderEditProfile from './HeaderEditProfile';
import VectorIcon from '~/components/VectorIcon';

const EditProfileScreen = () => {
  const {darkMode} = useSelector((state: RootState) => state.appReducer);
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
        <HeaderEditProfile />
        <BodyEditProfile />
      </View>

      <TouchableOpacity style={[styles.btnSave]}>
        <VectorIcon.FontistoVectorIcon
          name="save"
          size={20}
          color={darkMode ? darkTheme.TextColor : lightTheme.TextColor}
        />
      </TouchableOpacity>
    </View>
  );
};

export default EditProfileScreen;
