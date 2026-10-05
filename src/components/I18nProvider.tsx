"use client";

import React, { createContext, useContext, ReactNode } from 'react';
import { Dictionary } from '../i18n';

interface I18nContextProps {
  dictionary: Dictionary;
  lang: string;
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

interface I18nProviderProps {
  dictionary: Dictionary;
  lang: string;
  children: ReactNode;
}

export const I18nProvider = ({ dictionary, lang, children }: I18nProviderProps) => {
  return (
    <I18nContext.Provider value={{ dictionary, lang }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return context;
};
