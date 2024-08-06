import {Platform, StyleSheet} from 'react-native';
import Constants from '~/common/Constant';

export const styles = StyleSheet.create({
  BGHeader: {
    height: 300,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    resizeMode: 'contain',
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 9999,
    borderWidth: 3,
    borderColor: Constants.success,
    marginBottom: 10,
  },
  boxInfo: {flexDirection: 'column'},
  fullName: {
    fontSize: 20,
    color: Constants.white,
    marginLeft: 10,
    fontWeight: '600',
  },
  phoneNumber: {
    fontSize: 16,
    color: Constants.whiteGray,
    marginLeft: 10,
    marginTop: 5,
  },

  wrapperContent: {
    height: '100%',
    borderRadius: 10,
    marginBottom: 10,
    marginTop: -20,
    padding: 20,
    paddingTop: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  btnMenu: {
    height: 130,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: Constants.black,
    shadowOpacity: 0.8,
    elevation: 1,
    ...Platform.select({
      ios:{
    shadowOpacity: 0.1,
      }
    })
  },
  txtMenu: {
    marginTop: 4,
    fontWeight: '600',
  },

  btnLogout: {
    backgroundColor: Constants.error,
    padding: 15,
    borderRadius: 10,
    width: '100%',
    marginTop: 10,
    marginBottom: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtLogout: {
    color: Constants.white,
    fontWeight: '700',
  },
});
