import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updateLocalStorage} from '~/common/LocalStorage';
import HeaderBack from '~/components/HeaderBack';
import {setLanguage, toggleDarkMode} from '~/redux/action/appActions';
import {RootState} from '~/redux/reducers/rootReducer';
import {styles} from './styles';
import SwitchCustom from '~/components/SwitchCustom';
import Constants, {darkTheme, lightTheme} from '~/common/Constant';
import React from 'react';
import {useTranslation} from 'react-i18next';

const DisplaySettingScreen: React.FC = () => {
  const {t, i18n} = useTranslation();
  const dispatch = useDispatch();
  const {darkMode, language} = useSelector(
    (state: RootState) => state.appReducer,
  );

  const handleDarkMode = () => {
    dispatch(toggleDarkMode(!darkMode));
    updateLocalStorage({key: 'appInfo', value: {darkMode: !darkMode}});
  };

  const onChangeLng = (lng: string) => {
    i18n.changeLanguage(lng);
    updateLocalStorage({key: 'appInfo', value: {lng}});
    dispatch(setLanguage(lng));
  };

  return (
    <View
      style={{
        backgroundColor: darkMode ? darkTheme.mainColor : lightTheme.mainColor,
        flex: 1,
      }}>
      <HeaderBack title="MENU" />
      <View style={styles.container}>
        <View
          style={[
            styles.wrapper,
            {
              borderBottomColor: darkMode
                ? Constants.borderGrayOpacity30
                : Constants.borderGray,
            },
          ]}>
          <Text
            style={[
              styles.label,
              {
                color: darkMode ? Constants.white : Constants.black,
              },
            ]}>
            {t('language')}
          </Text>
          <View style={styles.boxLng}>
            <TouchableOpacity
              onPress={() => onChangeLng('en')}
              style={[
                styles.btnLng,
                darkMode
                  ? {
                      borderColor: Constants.borderGrayOpacity10,
                      backgroundColor:
                        language === 'en'
                          ? Constants.greenDark
                          : Constants.black,
                    }
                  : {
                      borderColor: Constants.borderGray,
                      backgroundColor:
                        language === 'en' ? Constants.success : Constants.white,
                    },
              ]}>
              <Text
                style={{
                  color: darkMode ? darkTheme.TextColor : lightTheme.TextColor,
                }}>
                En
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onChangeLng('vi')}
              style={[
                styles.btnLng,
                darkMode
                  ? {
                      borderColor: Constants.borderGrayOpacity10,
                      backgroundColor:
                        language === 'vi'
                          ? Constants.greenDark
                          : Constants.black,
                    }
                  : {
                      borderColor: Constants.borderGray,
                      backgroundColor:
                        language === 'vi' ? Constants.success : Constants.white,
                    },
              ]}>
              <Text
                style={{
                  color: darkMode ? darkTheme.TextColor : lightTheme.TextColor,
                }}>
                Vi
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={[
            styles.wrapper,
            {
              borderBottomColor: darkMode
                ? Constants.borderGrayOpacity30
                : Constants.borderGray,
            },
          ]}>
          <Text
            style={[
              styles.label,
              {
                color: darkMode ? Constants.white : Constants.black,
              },
            ]}>
            {t('darkMode')}
          </Text>
          <SwitchCustom onChange={handleDarkMode} value={darkMode} />
        </View>
      </View>
    </View>
  );
};

export default DisplaySettingScreen;
