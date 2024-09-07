import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {useSelectorApp} from '~/redux/slices/app.slice';

import {darkTheme, lightTheme} from '~/constants/colors';
import {listDevices} from '~/constants/devices';
import {linkImage} from '~/utils/linkImage';
import {styles} from './styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList, ScreenName} from '~/navigation';

const CreateDevice = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {darkMode} = useSelectorApp();
  const {i18n} = useTranslation();
  const currentLanguages = i18n.language;

  const onPressAddDevice = async (deviceId: string) => {
    navigation.navigate(ScreenName.CreateDetail, {deviceId});
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
      <Text
        style={[
          styles.title,
          {
            color: darkMode ? darkTheme.TextColor : lightTheme.TextColor,
          },
        ]}>
        {i18n.t('addDeviceTitle')}
      </Text>
      <ScrollView>
        <View style={styles.boxListDevice}>
          {listDevices.map(item => (
            <TouchableOpacity
              onPress={() => onPressAddDevice(item.id)}
              key={item.id}
              style={styles.boxDevice}
              activeOpacity={1}>
              <Image
                source={linkImage(item.imageUrl)}
                style={styles.imgDevice}
              />
              <Text
                style={[
                  styles.titleDevice,
                  {
                    color: darkMode
                      ? darkTheme.TextColor
                      : lightTheme.TextColor,
                  },
                ]}>
                {item.title[currentLanguages]}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateDevice;
