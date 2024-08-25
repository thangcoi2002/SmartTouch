export const linkImage = (name: string): any => {
  const images: {[key: string]: any} = {
    Logo_Touch: require('../assets/images/Logo_Touch.png'),

    SlideStated_1: require('../assets/images/SlideStated_1.png'),
    SlideStated_2: require('../assets/images/SlideStated_2.png'),
    SlideStated_3: require('../assets/images/SlideStated_3.png'),

    IC_TouchID: require('../assets/images/IC_TouchID.png'),
    IC_FaceID: require('../assets/images/IC_FaceID.png'),
    IC_User: require('../assets/images/IC_User.png'),
    IC_Back: require('../assets/images/IC_Back.png'),

    BG_Loading: require('../assets/images/BG_Loading.png'),
    BG_GetStated: require('../assets/images/BG_GetStated.png'),
    BG_MenuHeader: require('../assets/images/BG_MenuHeader.jpg'),

    Switch_device: require('../assets/images/switch-device.png'),
    Socket_device: require('../assets/images/socket-device.png'),
  };

  return images[name] || null;
};
