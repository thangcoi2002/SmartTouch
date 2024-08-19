import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import translationEN from './locales/en.json';
import translationVN from './locales/vi.json';

const resources = {
  en: {
    translation: translationEN,
  },
  vi: {
    translation: translationVN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'vi',
  compatibilityJSON: 'v3',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
