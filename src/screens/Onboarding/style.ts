import {StyleSheet} from 'react-native';
import colors from '~/constants/colors';

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
    color: colors.white,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: colors.gray,
    marginTop: 10,
    textAlign: 'center',
  },
  btnSubmit: {
    backgroundColor: colors.colorBtn,
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
    color: colors.black,
    textTransform: 'uppercase',
  },
});
