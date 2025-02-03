'use client';

import { useEffect, useRef } from 'react';
import i18next, { FlatNamespace, KeyPrefix } from 'i18next';
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
  UseTranslationOptions,
  UseTranslationResponse,
  FallbackNs,
} from 'react-i18next';
import { useCookies } from 'react-cookie';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { getOptions, languages, cookieName } from './settings';

const runsOnServerSide = typeof window === 'undefined';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`),
    ),
  )
  .init({
    ...getOptions(),
    lng: undefined,
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: runsOnServerSide ? languages : [],
  });

export function useTranslation<
  Ns extends FlatNamespace,
  KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined,
>(
  lng: string,
  ns?: Ns,
  options?: UseTranslationOptions<KPrefix>,
): UseTranslationResponse<FallbackNs<Ns>, KPrefix> {
  const [cookies, setCookie] = useCookies([cookieName]);
  const ret = useTranslationOrg(ns, options);
  const { i18n } = ret;

  const previousLngRef = useRef(i18n.resolvedLanguage);

  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng);
  } else {
    useEffect(() => {
      if (lng && previousLngRef.current !== lng) {
        i18n.changeLanguage(lng).then(() => {
          previousLngRef.current = lng;
        });
      }
    }, [lng, i18n]);

    useEffect(() => {
      if (lng && cookies.i18next !== lng) {
        setCookie(cookieName, lng, { path: '/' });
      }
    }, [lng, cookies.i18next, setCookie]);
  }

  return ret;
}
