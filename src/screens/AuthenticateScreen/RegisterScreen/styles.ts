import {StyleSheet} from 'react-native';
import Constants from '~/common/Constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
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
});
