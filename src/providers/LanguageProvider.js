import { createContext, useMemo, useState } from 'react';
import { IntlProvider } from 'react-intl';

import { LANGUAGE } from '../utils/constants/localStorage';

import appEn from '../translations/app.en';
import appNl from '../translations/app.nl';

export const languages = {
  nl: appNl,
  en: process.env.NODE_ENV === 'test' ? {} : appEn,
};

export const supportedLanguages = [
  { key: 'en', label: 'English' },
  { key: 'nl', label: 'Nederlands' },
];

export const LanguageContext = createContext({});

const browserLanguage =
  localStorage.getItem(LANGUAGE) || navigator.language?.split('-')[0] || 'en';

const LanguageProvider = ({ onError, children }) => {
  const [language, setLanguage] = useState(browserLanguage);

  const onChangeLanguage = (language) => {
    if (language in languages) {
      setLanguage(language);
      localStorage.setItem(LANGUAGE, language);
    }
  };

  const context = useMemo(() => {
    return {
      language,
      setLanguage: onChangeLanguage,
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={context}>
      <IntlProvider
        locale={language}
        messages={languages[language]}
        onError={onError}
      >
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
