import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updateLocalStorage} from '~/constants/LocalStorage';
import HeaderBack from '~/components/HeaderBack';
import {setLanguage, toggleDarkMode} from '~/redux/action/appActions';
import {RootState} from '~/redux/reducers/rootReducer';
import {styles} from './styles';
import SwitchCustom from '~/components/SwitchCustom';
import colors, {darkTheme, lightTheme} from '~/constants/colors';
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
                        language === 'en'
                          ? colors.greenDark
                          : colors.black,
                    }
                  : {
                      borderColor: colors.borderGray,
                      backgroundColor:
                        language === 'en' ? colors.success : colors.white,
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
                        language === 'vi'
                          ? colors.greenDark
                          : colors.black,
                    }
                  : {
                      borderColor: colors.borderGray,
                      backgroundColor:
                        language === 'vi' ? colors.success : colors.white,
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
