"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import fr from "./locales/fr.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "fr"],

    resources: {
      en: en,
      fr: fr
    },

    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
