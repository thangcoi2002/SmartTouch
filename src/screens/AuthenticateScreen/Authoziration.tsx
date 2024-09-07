import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import colors from '~/constants/colors';
import {styles} from './styles';
import {linkImage} from '~/utils/linkImage';
import RegisterScreen from './RegisterScreen';
import LoginScreen from './LoginScreen';
import {useTranslation} from 'react-i18next';

const Authenticate = () => {
  const [toggleScreen, setToggleScreen] = useState(0);
  const {t} = useTranslation();
  return (
    <ImageBackground
      source={linkImage('BG_GetStated')}
      style={styles.container}>
      <Image source={linkImage('Logo_Touch')} style={styles.logo} />

      <View style={styles.groupBtn}>
        <TouchableOpacity
          style={[
            styles.btnToggle,
            {
              backgroundColor:
                toggleScreen === 0 ? colors.mainColor : colors.darkGrayOpacity,
            },
          ]}
          onPress={() => setToggleScreen(0)}>
          <Text
            style={{
              color: toggleScreen === 0 ? colors.white : colors.gray,
            }}>
            {t('signIn')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btnToggle,
            {
              backgroundColor:
                toggleScreen === 1 ? colors.mainColor : colors.darkGrayOpacity,
            },
          ]}
          onPress={() => setToggleScreen(1)}>
          <Text
            style={{
              color: toggleScreen === 1 ? colors.white : colors.gray,
            }}>
            {t('signUp')}
          </Text>
        </TouchableOpacity>
      </View>

      {toggleScreen ? <RegisterScreen /> : <LoginScreen />}
    </ImageBackground>
  );
};

export default Authenticate;
