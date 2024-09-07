import {StyleSheet} from 'react-native';
import colors from '~/constants/colors';

export const styles = StyleSheet.create({
  iconClose: {padding: 10},
  input: {
    borderBottomWidth: 1,
    borderColor: colors.borderGray,
    marginHorizontal: 30,
  },
  requestConnectWifi: {
    borderBottomWidth: 1,
    borderColor: colors.borderGray,
    marginHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtInput: {
    paddingVertical: 20,
    paddingBottom: 10,
    fontSize: 16,
    fontWeight: '400',
  },
});
