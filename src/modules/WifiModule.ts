import {NativeModules} from 'react-native';

const {WifiModule} = NativeModules;

type WifiInfo = {
  statusCode: number;
  ssid?: string;
  message?: string;
};

export const getWifiSSID = (): Promise<WifiInfo> => {
  return new Promise(resolve => {
    WifiModule.getWifiSSID((result: WifiInfo) => {
      resolve(result);
    });
  });
};
