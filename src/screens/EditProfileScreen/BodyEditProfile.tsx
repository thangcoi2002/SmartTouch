import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import TextCustom from '~/components/TextCustom';
import {RootState} from '~/redux/reducers/rootReducer';
import {User} from '~/redux/types';

const BodyEditProfile: React.FC = () => {
  const {t} = useTranslation();
  const {currentUser} = useSelector((state: RootState) => state.appReducer);

  const [data, setData] = useState<User>({
    id: currentUser?.id || null,
    fullName: currentUser?.fullName || null,
    email: currentUser?.email || null,
    userName: currentUser?.userName || null,
    address: currentUser?.address || null,
    phoneNumber: currentUser?.phoneNumber || null,
    password: '',
  });

  const onChangeText = (name: string, text: string) => {
    setData({...data, [name]: text});
  };

  return (
    <View>
      <TextCustom
        label={t('account')}
        onChangeText={onChangeText}
        name="userName"
        value={data.userName || undefined}
        readonly={true}
      />
      <TextCustom
        label={t('fullName')}
        onChangeText={onChangeText}
        name="fullName"
        value={data.fullName || undefined}
      />
      <TextCustom
        label={t('phone')}
        onChangeText={onChangeText}
        name="phone"
        value={data.phoneNumber || undefined}
      />
      <TextCustom
        label={t('email')}
        onChangeText={onChangeText}
        name="email"
        value={data.email || undefined}
      />
      <TextCustom
        label={t('address')}
        onChangeText={onChangeText}
        name="address"
        value={data.address || undefined}
      />
      <TextCustom
        label={t('password')}
        onChangeText={onChangeText}
        name="password"
        password={true}
      />

      <TextCustom
        label={t('rePassword')}
        onChangeText={onChangeText}
        name="rePassword"
        password={true}
      />
    </View>
  );
};

export default BodyEditProfile;
