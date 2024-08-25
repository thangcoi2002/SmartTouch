import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import WifiManager from 'react-native-wifi-reborn';

import {darkTheme, lightTheme} from '~/constants/colors';
import {listDevices} from '~/constants/devices';
import {RootState} from '~/redux/reducers/rootReducer';
import {linkImage} from '~/utils/linkImage';
import {styles} from './styles';
import {PERMISSIONS, request, RESULTS} from 'react-native-permissions';

const AddDeviceScreen = () => {
  const {darkMode} = useSelector((state: RootState) => state.appReducer);
  const {i18n} = useTranslation();
  const currentLanguages = i18n.language;

  const onPressAddDevice = async (deviceId: string) => {
    const result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    console.log(deviceId);
    switch (result) {
      case RESULTS.GRANTED:
        console.log('Quyền truy cập vị trí đã được cấp.');
        break;
      case RESULTS.DENIED:
        console.log('Quyền truy cập vị trí bị từ chối.');
        break;
      case RESULTS.BLOCKED:
        console.log('Quyền truy cập vị trí bị khóa.');
        break;
    }
    await WifiManager.getCurrentWifiSSID()
      .then(ssid => {
        console.log('SSID hiện tại:', ssid);
      })
      .catch(error => {
        console.log('Không thể lấy SSID!', error);
      });
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

export default AddDeviceScreen;
