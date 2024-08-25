import {StyleSheet} from 'react-native';
import colors from '~/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
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
});
