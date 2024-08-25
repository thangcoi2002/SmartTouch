import {StyleSheet} from 'react-native';
import colors from '~/constants/colors';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  label: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    paddingVertical: 10,
    paddingLeft: 4,
    marginTop: 10,
  },
  boxLng: {
    flexDirection: 'row',
  },
  btnLng: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 2,
    borderRadius: 8,
    borderWidth: 1,
  },
});
