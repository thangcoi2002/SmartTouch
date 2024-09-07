import React, {useEffect, useState} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import TouchID from 'react-native-touch-id';
import * as Keychain from 'react-native-keychain';

import colors from '~/constants/colors';
import TextCustom from '~/components/TextCustom';
import VectorIcon from '~/components/VectorIcon';
import {styles} from './styles';
import {linkImage} from '~/utils/linkImage';
import {User} from '~/redux/types';
import {useTranslation} from 'react-i18next';
import {signIn} from '~/redux/slices/app.slice';
import {useAppDispatch} from '~/redux/store';

const LoginScreen = () => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const [data, setData] = useState({
    userName: '',
    password: '',
  });

  const onChangeText = (name: string, text: string) => {
    console.log(text);
    setData({...data, [name]: text});
  };

  const [biometricsObject, setBiometricsObject] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const biometryType = await Keychain.getSupportedBiometryType();
        if (biometryType) {
          setBiometricsObject(biometryType);
        } else {
          setBiometricsObject(null);
        }
      } catch (error) {
        console.error('Biometrics check failed:', error);
        setBiometricsObject(null);
      }
    })();
  }, []);

  const handleBiometricAuth = () => {
    const optionalConfigObject = {
      title: 'Authentication Required',
      imageColor: '#e00606',
      imageErrorColor: '#ff0000',
      sensorDescription: 'Touch sensor',
      sensorErrorDescription: 'Failed',
      cancelText: 'Cancel',
      fallbackLabel: 'Show Passcode',
      unifiedErrors: false,
      passcodeFallback: false,
    };
    TouchID.authenticate(
      `Using ${biometricsObject === 'Fingerprint' ? 'Touch ID' : 'Face ID'}`,
      optionalConfigObject,
    ).then(() => {
      Alert.alert(
        'Authentication Successful',
        'You have been successfully authenticated!',
      );
    });
  };

  const handleSubmit = () => {
    const userData: User = {
      id: '123',
      fullName: 'Tran Ngoc Thang',
      email: '123',
      userName: '123',
      address: '123',
      phoneNumber: '0987654321',
      password: '',
    };

    dispatch(signIn(userData));
  };

  return (
    <View>
      <Text style={styles.title}>{t('signIn')}</Text>
      <Text style={styles.label}>{t('account')}</Text>
      <TextCustom
        label={t('account')}
        name={'userName'}
        onChangeText={onChangeText}
        Icon={
          <VectorIcon.FontAwesomeVectorIcon
            name="user"
            size={20}
            color={colors.gray}
          />
        }
      />

      <Text style={styles.label}>{t('password')}</Text>
      <TextCustom
        label={t('password')}
        name={'password'}
        onChangeText={onChangeText}
        password={true}
        Icon={
          <VectorIcon.FontAwesomeVectorIcon
            name="lock"
            size={20}
            color={colors.gray}
          />
        }
      />

      <TouchableOpacity style={styles.btnSubmit} onPress={handleSubmit}>
        <Text style={styles.txtSubmit}>{t('signIn')}</Text>
      </TouchableOpacity>

      {biometricsObject && (
        <TouchableOpacity onPress={handleBiometricAuth} style={styles.btnID}>
          <Image
            source={linkImage(
              biometricsObject === 'Fingerprint' ? 'IC_TouchID' : 'IC_FaceID',
            )}
            style={styles.icTouchId}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default LoginScreen;
