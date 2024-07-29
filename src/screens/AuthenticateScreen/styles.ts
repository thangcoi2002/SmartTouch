import {StyleSheet} from 'react-native';
import Constants from '~/common/Constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.mainColor,
    padding: 30,
    paddingBottom: 0
  },
  logo: {width: 'auto', height: 100, resizeMode: 'contain'},
  groupBtn: {
    height: 46,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Constants.darkGrayOpacity,
    borderRadius: 10,
    marginVertical: 20,
  },
  btnToggle: {
    width: '48%',
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
