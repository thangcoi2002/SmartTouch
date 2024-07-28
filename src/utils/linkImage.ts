export const linkImage = (name: string): any => {
  const images: {[key: string]: any} = {
    BG_Loading: require('../assets/images/BG_Loading.png'),
    BG_GetStated: require('../assets/images/BG_GetStated.png'),
    Logo_Touch: require('../assets/images/Logo_Touch.png'),
    SlideStated_1: require('../assets/images/SlideStated_1.png'),
    SlideStated_2: require('../assets/images/SlideStated_2.png'),
    SlideStated_3: require('../assets/images/SlideStated_3.png'),
  };

  return images[name] || null;
};
