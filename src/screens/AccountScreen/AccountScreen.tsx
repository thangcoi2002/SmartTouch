import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';

import {RootStackParamList} from '~/navigation';
import {RootState} from '~/redux/reducers/rootReducer';
import { styles } from './styles';

const AccountScreen = () => {
  const {darkMode} = useSelector((state: RootState) => state.appReducer);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View  
      style={{
        flex: 1,
      }}>
      <TouchableOpacity onPress={goBack} style={styles.headerBack}>
        <Text>123</Text>
      </TouchableOpacity>
      <Text>AccountScreen</Text>
    </View>
  );
};

export default AccountScreen;
