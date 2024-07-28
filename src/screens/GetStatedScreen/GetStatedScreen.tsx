import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, ImageBackground, TouchableOpacity, Animated } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { linkImage } from '~/utils/linkImage';
import { styles } from './style';
import { useDispatch } from 'react-redux';
import { toggleFirstOpen } from '~/redux/action/appActions';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList, ScreenName } from '~/navigation';
import { saveLocalStorage, updateLocalStorage } from '~/common/LocalStorage';

interface Item {
  title: string;
  description: string;
  illustration: any;
}

interface RenderItemProps {
  item: Item;
  index: number;
}

const { width: screenWidth } = Dimensions.get('window');

const entries = [
  { title: 'Trade anytime anywhere', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.", illustration: linkImage('SlideStated_1') },
  { title: 'Save and invest at the same time', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.", illustration: linkImage('SlideStated_2') },
  { title: 'Transact fast and easy', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.", illustration: linkImage('SlideStated_3') },
];

const GetStartedScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleSnapToItem = (index: number) => {
    if (index === entries.length - 1) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }).start();
    }
  }

  const onSubmit = () => {
    dispatch(toggleFirstOpen(true))
    saveLocalStorage({ key: "firstOpen", value: false })
    navigation.navigate(ScreenName.Login)
  }

  const renderItem = ({ item, index }: RenderItemProps) => (
    <View style={styles.image}>
      <View style={styles.boxImage}><Image source={item.illustration} style={styles.image} /></View>
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        {index === 2 &&
          <Animated.View style={{ ...styles.container, opacity: index === 2 ? fadeAnim : 0 }}>
            <TouchableOpacity style={styles.btnSubmit} onPress={onSubmit}><Text style={styles.txtSubmit}>GET STATED</Text></TouchableOpacity>
          </Animated.View>
        }
      </View>
    </View>
  );

  return (
    <ImageBackground
      source={linkImage('BG_GetStated')}
      style={styles.slide}>
      <Carousel
        data={entries}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout={'default'}
        onSnapToItem={handleSnapToItem}
      />
    </ImageBackground>
  );
};


export default GetStartedScreen;
