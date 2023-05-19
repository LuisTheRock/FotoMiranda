import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../locales/en.json';
import ptTranslation from '../locales/pt.json';

// Configure i18next
i18n.use(initReactI18next).init({
  lng: 'pt',
  fallbackLng: 'pt',
  //   debug: process.env.NODE_ENV === 'development',
  resources: {
    en: { translation: enTranslation },
    pt: { translation: ptTranslation },
  },
});

export default i18n;
