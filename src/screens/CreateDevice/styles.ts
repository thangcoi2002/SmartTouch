import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 30,
    marginLeft: 10,
  },
  boxListDevice: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  boxDevice: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#cccccc',
  },
  titleDevice: {
    width: 80,
    fontSize: 13,
    textAlign: 'center',
    marginTop: 5,
  },
  imgDevice: {
    width: 50,
    height: 50,
  },
});
