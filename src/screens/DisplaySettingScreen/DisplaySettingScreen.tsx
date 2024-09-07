import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, TouchableOpacity, View} from 'react-native';

import {updateLocalStorage} from '~/utils/localStorage';
import HeaderBack from '~/components/HeaderBack';
import {styles} from './styles';
import SwitchCustom from '~/components/SwitchCustom';
import colors, {darkTheme, lightTheme} from '~/constants/colors';
import {toggleDarkMode, useSelectorApp} from '~/redux/slices/app.slice';
import {useAppDispatch} from '~/redux/store';
import {setUserLanguage} from '~/services/async-storage.service';

const DisplaySettingScreen: React.FC = () => {
  const {t, i18n} = useTranslation();
  const dispatch = useAppDispatch();
  const {darkMode} = useSelectorApp();
  const currentLanguage = i18n.language;

  const handleDarkMode = () => {
    dispatch(toggleDarkMode(!darkMode));
    updateLocalStorage({key: 'appInfo', value: {darkMode: !darkMode}});
  };

  const onChangeLng = (lng: string) => {
    i18n.changeLanguage(lng);
    setUserLanguage(lng);
  };

  return (
    <View
      style={{
        backgroundColor: darkMode ? darkTheme.mainColor : lightTheme.mainColor,
        flex: 1,
      }}>
      <HeaderBack title={t('backTitle')} />
      <View style={styles.container}>
        <View
          style={[
            styles.wrapper,
            {
              borderBottomColor: darkMode
                ? colors.borderGrayOpacity30
                : colors.borderGray,
            },
          ]}>
          <Text
            style={[
              styles.label,
              {
                color: darkMode ? colors.white : colors.black,
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
                      borderColor: colors.borderGrayOpacity10,
                      backgroundColor:
                        currentLanguage === 'en'
                          ? colors.greenDark
                          : colors.black,
                    }
                  : {
                      borderColor: colors.borderGray,
                      backgroundColor:
                        currentLanguage === 'en'
                          ? colors.success
                          : colors.white,
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
                      borderColor: colors.borderGrayOpacity10,
                      backgroundColor:
                        currentLanguage === 'vi'
                          ? colors.greenDark
                          : colors.black,
                    }
                  : {
                      borderColor: colors.borderGray,
                      backgroundColor:
                        currentLanguage === 'vi'
                          ? colors.success
                          : colors.white,
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
                ? colors.borderGrayOpacity30
                : colors.borderGray,
            },
          ]}>
          <Text
            style={[
              styles.label,
              {
                color: darkMode ? colors.white : colors.black,
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
