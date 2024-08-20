import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';

import {RootStackParamList, ScreenName} from '~/navigation';
import {RootState} from '~/redux/reducers/rootReducer';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {darkTheme, lightTheme} from '~/common/Constant';
import {linkImage} from '~/utils/linkImage';
import VectorIcon from '~/components/VectorIcon';

interface ItemType {
  title: string;
  value: string | undefined | null;
}

const AccountScreen = () => {
  const {darkMode, currentUser} = useSelector(
    (state: RootState) => state.appReducer,
  );
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const mapData: ItemType[] = [
    {title: 'Username', value: currentUser?.userName},
    {title: 'Phone number', value: currentUser?.phoneNumber},
    {title: 'Email', value: currentUser?.email},
    {title: 'Address', value: currentUser?.address},
    {title: 'Password', value: 'Password'},
  ];

  const goBack = () => {
    navigation.goBack();
  };

  const renderRow = ({item}: {item: ItemType}) => (
    <TouchableOpacity
      style={[
        styles.rowData,
        {
          borderBottomColor: darkMode
            ? darkTheme.borderColor
            : lightTheme.borderColor,
        },
      ]}
      onPress={() => navigation.navigate(ScreenName.EditProfile)}>
      <Text
        style={[
          {color: darkMode ? darkTheme.TextColor : lightTheme.TextColor},
        ]}>
        {item.title}
      </Text>
      <View style={styles.flexCenter}>
        <Text
          style={[
            {color: darkMode ? darkTheme.TextColor : lightTheme.TextColor},
          ]}>
          {item.value}
        </Text>
        <VectorIcon.MaterialVectorIcon
          name="keyboard-arrow-right"
          size={20}
          color={darkMode ? darkTheme.TextColor : lightTheme.TextColor}
        />
      </View>
    </TouchableOpacity>
  );

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
      <LinearGradient colors={['#00000000', '#5ED5A825']} style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <Image source={linkImage('IC_Back')} style={styles.icon} />
        </TouchableOpacity>
      </LinearGradient>
      <View style={styles.wrapper}>
        <View
          style={[
            styles.wrapperHeader,
            {
              borderBottomColor: darkMode
                ? darkTheme.borderColor
                : lightTheme.borderColor,
            },
          ]}>
          <Image source={linkImage('IC_User')} style={styles.avatar} />
          <Text
            style={[
              styles.fullNameHeader,
              {color: darkMode ? darkTheme.TextColor : lightTheme.TextColor},
            ]}>
            {currentUser?.fullName}
          </Text>
        </View>
        <FlatList
          data={mapData}
          renderItem={renderRow}
          keyExtractor={item => item.title}
        />
      </View>
    </View>
  );
};

export default AccountScreen;
