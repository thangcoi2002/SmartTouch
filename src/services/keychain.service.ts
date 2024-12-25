import * as Keychain from 'react-native-keychain';

export class KeychainService {
  public static async getSupportedBiometryType() {
    return Keychain.getSupportedBiometryType();
  }

  public static setWalletPassword(
    password: string,
    options?: Keychain.Options,
  ) {
    return Keychain.setGenericPassword('PASS', password, {
      service: 'PASS',
      accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
      authenticationPrompt: {
        title: 'Authentication required',
        description: 'Please authenticate in order to use G.U Wallet',
      },
      accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY,
      ...options,
    });
  }

  public static getWalletPassword(options?: Keychain.Options) {
    return Keychain.getGenericPassword({
      service: 'PASS',
      ...options,
    });
  }

  public static resetWalletPassword(options?: Keychain.Options) {
    return Keychain.resetGenericPassword({
      service: 'PASS',
      ...options,
    });
  }
}
