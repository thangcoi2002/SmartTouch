import {Platform, StyleSheet} from 'react-native';
import colors from '~/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainColor,
    padding: 30,
    paddingBottom: Platform.OS === 'ios' ? 20 : 0,
    paddingTop: Platform.OS === 'ios' ? 100 : 30,
  },
  logo: {width: 'auto', height: 100, resizeMode: 'contain'},
  groupBtn: {
    height: 46,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.darkGrayOpacity,
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
