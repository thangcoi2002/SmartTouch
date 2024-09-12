import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Alert,
  Linking,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import VectorIcon from '~/components/VectorIcon';
import {getWifiSSID} from '~/modules/WifiModule';
import {RootStackParamList} from '~/navigation';
import {styles} from './styles';

interface WifiInfo {
  ssid: string;
  password: string;
}

const CreateDetail = () => {
  const {t} = useTranslation();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [valueWifi, setValueWifi] = useState<WifiInfo>({
    ssid: '',
    password: '',
  });
  const [statusCode, setStatusCode] = useState(0);
  const requestPermission = useCallback(async () => {
    try {
      let permissionResult;
      console.log(123);

      if (Platform.OS === 'ios') {
        permissionResult = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      } else if (Platform.OS === 'android') {
        permissionResult = await request(
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        );
      }
      switch (permissionResult) {
        case RESULTS.GRANTED:
          const currentWifi = await getWifiSSID();
          const ssid = currentWifi.ssid as string;
          setStatusCode(currentWifi.statusCode);
          setValueWifi({ssid, password: ''});
          break;
        default:
          Alert.alert(t('requestConnectWifi'));
          break;
      }
    } catch (error) {
      console.error('Error requesting permission or getting SSID:', error);
    }
  }, [t]);

  requestPermission();

  const onPressSettingPermissions = useCallback(() => {
    Linking.openSettings();
  }, []);

  const onChangeText = (name: string, text: string) => {
    setValueWifi(prev => ({...prev, [name]: text}));
  };

  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.iconClose}
        onPress={() => navigation.goBack()}>
        <VectorIcon.AntDesignVectorIcon name="close" size={20} />
      </TouchableOpacity>
      {statusCode === 200 ? (
        <View style={styles.input}>
          <Text style={styles.txtInput}>{valueWifi.ssid}</Text>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.requestConnectWifi}
          onPress={onPressSettingPermissions}>
          <Text style={styles.txtInput}>{t('requestConnectWifi')}</Text>

          <VectorIcon.MaterialVectorIcon
            name="keyboard-arrow-right"
            size={30}
          />
        </TouchableOpacity>
      )}
      <View style={styles.input}>
        <TextInput
          style={styles.txtInput}
          placeholder={t('passwordWifi')}
          onChangeText={text => onChangeText('password', text)}
        />
      </View>
    </SafeAreaView>
  );
};

export default CreateDetail;
