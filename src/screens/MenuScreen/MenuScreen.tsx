import React from 'react';
import {
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {linkImage} from '~/utils/linkImage';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '~/redux/reducers/rootReducer';
import VectorIcon from '~/components/VectorIcon';
import {updateLocalStorage} from '~/constants/LocalStorage';
import {removeCurrentUser} from '~/redux/action/appActions';
import {RootStackParamList, ScreenName} from '~/navigation';
import colors, {darkTheme, lightTheme} from '~/constants/colors';

const MenuScreen = () => {
  const {t} = useTranslation();
  const {currentUser, darkMode} = useSelector(
    (state: RootState) => state.appReducer,
  );
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const logOut = () => {
    dispatch(removeCurrentUser());
    updateLocalStorage({key: 'appInfo', value: {currentUser: null}});
  };

  const onNavigation = (screenName: ScreenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View>
      <ImageBackground
        source={linkImage('BG_MenuHeader')}
        style={styles.BGHeader}>
        <Image source={linkImage('IC_User')} style={styles.avatar} />
        <View style={styles.boxInfo}>
          <Text style={styles.fullName}>{currentUser?.fullName}</Text>
          <Text style={styles.phoneNumber}>{currentUser?.phoneNumber}</Text>
        </View>
      </ImageBackground>
      <View
        style={[
          styles.wrapperContent,
          {
            backgroundColor: darkMode
              ? darkTheme.mainColor
              : lightTheme.mainColor,
          },
        ]}>
        <View style={styles.row}>
          <TouchableOpacity
            style={[
              styles.btnMenu,
              {
                backgroundColor: darkMode
                  ? colors.darkGrayOpacity
                  : colors.white,
              },
            ]}
            activeOpacity={0.9}
            onPress={() => onNavigation(ScreenName.Account)}>
            <VectorIcon.FontAwesomeVectorIcon
              name="user-circle-o"
              color={darkMode ? colors.white : colors.black}
              size={20}
            />
            <Text
              style={[
                styles.txtMenu,
                {
                  color: darkMode ? colors.white : colors.gray,
                },
              ]}>
              {t('account')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btnMenu,
              {
                backgroundColor: darkMode
                  ? colors.darkGrayOpacity
                  : colors.white,
              },
            ]}
            activeOpacity={0.9}
            onPress={() => onNavigation(ScreenName.DisplaySetting)}>
            <VectorIcon.SimpleLineIcon
              name="settings"
              color={darkMode ? colors.white : colors.black}
              size={20}
            />
            <Text
              style={[
                styles.txtMenu,
                {
                  color: darkMode ? colors.white : colors.gray,
                },
              ]}>
              {t('settings')}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={[
              styles.btnMenu,
              {
                backgroundColor: darkMode
                  ? colors.darkGrayOpacity
                  : colors.white,
              },
            ]}
            activeOpacity={0.9}
            onPress={() => onNavigation(ScreenName.DisplaySetting)}>
            <VectorIcon.AntDesignVectorIcon
              name="home"
              color={darkMode ? colors.white : colors.black}
              size={20}
            />
            <Text
              style={[
                styles.txtMenu,
                {
                  color: darkMode ? colors.white : colors.gray,
                },
              ]}>
              {t('managerHome')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btnMenu,
              {
                backgroundColor: darkMode
                  ? colors.darkGrayOpacity
                  : colors.white,
              },
            ]}
            activeOpacity={0.9}
            onPress={() => onNavigation(ScreenName.DisplaySetting)}>
            <VectorIcon.AntDesignVectorIcon
              name="warning"
              color={darkMode ? colors.white : colors.black}
              size={20}
            />
            <Text
              style={[
                styles.txtMenu,
                {
                  color: darkMode ? colors.white : colors.gray,
                },
              ]}>
              {t('support')}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnLogout} onPress={logOut}>
          <Text style={styles.txtLogout}>{t('logout')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuScreen;
