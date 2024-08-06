import {Dimensions, StyleSheet} from 'react-native';
import Constants from '~/common/Constant';

const {height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: '20%',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    padding: 10,
  },
  wrapper: {
    width: '100%',
    position: 'absolute',
    top: height * (13 / 100),
    paddingHorizontal: 10,
  },
  wrapperHeader: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  avatar: {
    height: 110,
    width: 110,
    borderRadius: 9999,
    borderWidth: 3,
    borderColor: Constants.success,
    marginBottom: 10,
  },
  fullNameHeader: {
    fontSize: 16,
    fontWeight: '700',
  },
  rowData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    paddingVertical: 15,
  },

  flexCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});
