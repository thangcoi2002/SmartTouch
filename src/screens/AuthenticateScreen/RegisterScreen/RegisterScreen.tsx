import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import Constants from '~/common/Constant';
import TextCustom from '~/components/TextCustom';
import VectorIcon from '~/components/VectorIcon';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';

const RegisterScreen = () => {
  const {t} = useTranslation();
  const [data, setData] = useState({
    userName: '',
    password: '',
    rePassword: '',
    fullName: '',
    email: '',
    address: '',
    phoneNumber: '',
  });

  const onChangeText = (name: string, text: string) => {
    setData({...data, [name]: text});
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{t('signUp')}</Text>
        <Text style={styles.label}>{t('account')}</Text>
        <TextCustom
          label={t('account')}
          name={'userName'}
          onChangeText={onChangeText}
          Icon={
            <VectorIcon.FontAwesomeVectorIcon
              name="user"
              size={20}
              color={Constants.darkBlue}
            />
          }
        />

        <Text style={styles.label}>{t('password')}</Text>
        <TextCustom
          label={t('userName')}
          name={'password'}
          onChangeText={onChangeText}
          password={true}
          Icon={
            <VectorIcon.FontAwesomeVectorIcon
              name="lock"
              size={20}
              color={Constants.darkBlue}
            />
          }
        />

        <Text style={styles.label}>{t('rePassword')}</Text>
        <TextCustom
          label={t('rePassword')}
          name={'rePassword'}
          onChangeText={onChangeText}
          password={true}
          Icon={
            <VectorIcon.FontAwesomeVectorIcon
              name="lock"
              size={20}
              color={Constants.darkBlue}
            />
          }
        />

        <Text style={styles.label}>{t('fullName')}</Text>
        <TextCustom
          label={t('fullName')}
          name={'fullName'}
          onChangeText={onChangeText}
          Icon={
            <VectorIcon.FontAwesomeVectorIcon
              name="user"
              size={20}
              color={Constants.darkBlue}
            />
          }
        />

        <Text style={styles.label}>{t('email')}</Text>
        <TextCustom
          label={t('email')}
          name={'email'}
          keyboardType={'email'}
          onChangeText={onChangeText}
          Icon={
            <VectorIcon.MaterialVectorIcon
              name="alternate-email"
              size={20}
              color={Constants.darkBlue}
            />
          }
        />

        <Text style={styles.label}>{t('address')}</Text>
        <TextCustom
          label={t('address')}
          name={'address'}
          onChangeText={onChangeText}
          Icon={
            <VectorIcon.EntypoVectorIcon
              name="address"
              size={20}
              color={Constants.darkBlue}
            />
          }
        />

        <Text style={styles.label}>{t('phone')}</Text>
        <TextCustom
          label={t('phone')}
          name={'phoneNumber'}
          onChangeText={onChangeText}
          keyboardType={'number'}
          Icon={
            <VectorIcon.FontAwesomeVectorIcon
              name="phone"
              size={20}
              color={Constants.darkBlue}
            />
          }
        />

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.txtSubmit}>{t('signUp')}</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
