import {StatusBar, Switch, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updateLocalStorage} from '~/common/LocalStorage';
import HeaderBack from '~/components/HeaderBack';
import {toggleDarkMode} from '~/redux/action/appActions';
import {RootState} from '~/redux/reducers/rootReducer';
import {styles} from './styles';
import SwitchCustom from '~/components/SwitchCustom';
import Constants, {darkTheme, lightTheme} from '~/common/Constant';

const DisplaySettingScreen = () => {
  const dispatch = useDispatch();
  const {darkMode} = useSelector((state: RootState) => state.appReducer);

  const handleDarkMode = () => {
    dispatch(toggleDarkMode(!darkMode));
    updateLocalStorage({key: 'appInfo', value: {darkMode: !darkMode}});
  };

  return (
    <View
      style={{
        backgroundColor: darkMode ? darkTheme.mainColor : lightTheme.mainColor,
        flex: 1,
      }}>
      <HeaderBack title="MENU" />
      <View style={styles.container}>
        <View
          style={[
            styles.wrapper,
            {
              borderBottomColor: darkMode
                ? Constants.borderGrayOpacity
                : Constants.borderGray,
            },
          ]}>
          <Text
            style={[
              styles.label,
              {
                color: darkMode ? Constants.white : Constants.black,
              },
            ]}>
            Dark mode
          </Text>
          <SwitchCustom onChange={handleDarkMode} value={darkMode} />
        </View>
      </View>
    </View>
  );
};

export default DisplaySettingScreen;
