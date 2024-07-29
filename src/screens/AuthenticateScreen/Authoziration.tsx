import React, {useState } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';

import Constants from '~/common/Constant';
import { styles } from './styles';
import { linkImage } from '~/utils/linkImage';
import RegisterScreen from './RegisterScreen';
import LoginScreen from './LoginScreen';

const Authenticate = () => {
  const [toggleScreen, setToggleScreen] = useState(0);
  return (
    <ImageBackground source={linkImage('BG_GetStated')} style={styles.container}>
      <Image source={linkImage('Logo_Touch')} style={styles.logo} />

      <View style={styles.groupBtn}>
        <TouchableOpacity
          style={[styles.btnToggle, { backgroundColor: toggleScreen === 0 ? Constants.mainColor : Constants.darkGrayOpacity }]}
          onPress={() => setToggleScreen(0)}
        >
          <Text style={{ color: toggleScreen === 0 ? Constants.whiteGray : Constants.gray }}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnToggle, { backgroundColor: toggleScreen === 1 ? Constants.mainColor : Constants.darkGrayOpacity }]}
          onPress={() => setToggleScreen(1)}
        >
          <Text style={{ color: toggleScreen === 1 ? Constants.whiteGray : Constants.gray }}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      {toggleScreen ? <RegisterScreen /> : <LoginScreen />}
    </ImageBackground>
  );
};

export default Authenticate;
