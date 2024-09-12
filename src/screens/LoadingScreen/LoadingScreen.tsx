import React, {useEffect, useRef} from 'react';
import {Animated, Image, ImageBackground, Text, View} from 'react-native';
import {linkImage} from '~/utils/linkImage';
import {styles} from './styles';

const LoadingScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={linkImage('BG_Loading')}
        style={styles.imageBackground}>
        <Animated.View style={{...styles.container, opacity: fadeAnim}}>
          <Image source={linkImage('Logo_Touch')} style={styles.logo} />
          <Text style={styles.text}>Name Company</Text>
        </Animated.View>
      </ImageBackground>
    </View>
  );
};

export default LoadingScreen;
