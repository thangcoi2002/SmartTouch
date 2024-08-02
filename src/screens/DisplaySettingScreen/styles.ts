import {StyleSheet} from 'react-native';
import Constants from '~/common/Constant';

export const styles = StyleSheet.create({
  container:{
    paddingHorizontal: 10
  },
  label:{
    color: Constants.black,
    fontSize: 16,
    fontWeight: 'bold'
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    paddingVertical: 10,
    paddingLeft:4,
    marginTop: 10
  },
});
