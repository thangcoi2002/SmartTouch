import {Text, View} from 'react-native';
import {styles} from './styles';
import {RootState} from '~/redux/reducers/rootReducer';
import {useSelector} from 'react-redux';
import {Image} from 'react-native';
import {darkTheme, lightTheme} from '~/constants/colors';
import React from 'react';
import {linkImage} from '~/utils/linkImage';

const HeaderEditProfile: React.FC = () => {
  const {darkMode, currentUser} = useSelector(
    (state: RootState) => state.appReducer,
  );

  return (
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
  );
};

export default HeaderEditProfile;
