import {StyleSheet} from 'react-native';
import Constants from '~/common/Constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    height: '100%',
    width: '100%',
  },
  boxImage: {
    height: '70%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  content: {
    height: '30%',
    width: '100%',
    padding: 34,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Constants.white,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: Constants.gray,
    marginTop: 10,
    textAlign: 'center',
  },
  btnSubmit: {
    backgroundColor: Constants.colorBtn,
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtSubmit: {
    fontSize: 16,
    color: Constants.black,
  },
});
