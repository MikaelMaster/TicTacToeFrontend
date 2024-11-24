import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './public/locales/en.json';
import ptTranslations from './public/locales/pt.json';

const resources = {
  en: { translation: enTranslations },
  pt: { translation: ptTranslations }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;