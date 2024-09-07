import {Platform} from 'react-native';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';

export const requestLocation = async () => {
  try {
    const result = await request(
      Platform.select({
        ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      })!,
    );

    if (result === RESULTS.GRANTED) {
      console.log('Quyền vị trí đã được cấp');
    } else {
      console.log('Quyền vị trí không được cấp');
    }
  } catch (error) {
    console.error('Yêu cầu quyền gặp lỗi:', error);
  }
};
