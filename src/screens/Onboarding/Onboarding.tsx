import React, {useRef} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {useTranslation} from 'react-i18next';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {linkImage} from '~/utils/linkImage';
import {styles} from './style';
import {RootStackParamList, ScreenName} from '~/navigation';
import {firstAppOpen} from '~/redux/slices/app.slice';
import {useAppDispatch} from '~/redux/store';

interface Item {
  title: string;
  description: string;
  illustration: any;
}

interface RenderItemProps {
  item: Item;
  index: number;
}

const {width: screenWidth} = Dimensions.get('window');

const Onboarding = () => {
  const dispatch = useAppDispatch();
  const {t} = useTranslation();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const entries = [
    {
      title: t('onboardingTitle1'),
      description: t('onboardingDescription1'),
      illustration: linkImage('SlideStated_1'),
    },
    {
      title: t('onboardingTitle2'),
      description: t('onboardingDescription2'),
      illustration: linkImage('SlideStated_2'),
    },
    {
      title: t('onboardingTitle3'),
      description: t('onboardingDescription3'),
      illustration: linkImage('SlideStated_3'),
    },
  ];

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
  };

  const onSubmit = () => {
    dispatch(firstAppOpen());
    navigation.navigate(ScreenName.Authenticate);
  };

  const renderItem = ({item, index}: RenderItemProps) => (
    <View style={styles.image}>
      <View style={styles.boxImage}>
        <Image source={item.illustration} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        {index === 2 && (
          <Animated.View
            style={{...styles.container, opacity: index === 2 ? fadeAnim : 0}}>
            <TouchableOpacity style={styles.btnSubmit} onPress={onSubmit}>
              <Text style={styles.txtSubmit}>{t('getStated')}</Text>
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
    </View>
  );

  return (
    <ImageBackground source={linkImage('BG_GetStated')} style={styles.slide}>
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

export default Onboarding;
