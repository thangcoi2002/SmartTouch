import {StyleSheet} from 'react-native';
import colors from '~/constants/colors';

export const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 10,
  },
  label: {
    color: colors.whiteGray,
    fontSize: 16,
    marginVertical: 10,
  },
  btnSubmit: {
    backgroundColor: colors.colorBtn,
    padding: 15,
    margin: 10,
    borderRadius: 10,
    width: '100%',
    alignSelf: 'center',
    marginTop: 30,
  },
  txtSubmit: {
    textAlign: 'center',
    color: colors.black,
  },

  btnID: {
    flexDirection: 'column',
    marginTop: 30,
    alignItems: 'center',
  },
  icTouchId: {
    height: 50,
    width: 50,
  },
  txtTouchID: {
    color: colors.white,
    marginTop: 10,
  },
});
