import i18next, {LanguageDetectorAsyncModule} from 'i18next';
import {initReactI18next} from 'react-i18next';
import translationEN from './locales/en.json';
import translationVN from './locales/vi.json';
import {
  getUserLanguage,
  setUserLanguage,
} from '~/services/async-storage.service';

const ENGLISH_CODE = 'en';
const VIETNAMESE_CODE = 'vi';

const resources = {
  [ENGLISH_CODE]: {
    translation: translationEN,
  },
  [VIETNAMESE_CODE]: {
    translation: translationVN,
  },
};

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    getUserLanguage((error, language) => {
      let defaultLanguage = ENGLISH_CODE;
      if (language) {
        defaultLanguage = language;
      }
      callback(defaultLanguage);
    });
  },
  init: () => {},
  cacheUserLanguage: language => {
    setUserLanguage(language);
  },
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    compatibilityJSON: 'v3',
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });
