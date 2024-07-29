import {StyleSheet} from 'react-native';
import Constants from '~/common/Constant';

export const styles = StyleSheet.create({
  title: {
    color: Constants.white,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 10,
  },
  label: {
    color: Constants.whiteGray,
    fontSize: 16,
    marginVertical: 10,
  },
  btnSubmit: {
    backgroundColor: Constants.colorBtn,
    padding: 15,
    margin: 10,
    borderRadius: 10,
    width: '100%',
    alignSelf: 'center',
    marginTop: 30,
  },
  txtSubmit: {
    textAlign: 'center',
    color: Constants.black,
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
    color: Constants.white,
    marginTop: 10,
  },
});
