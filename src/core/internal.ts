import { locales } from "../api/locales";
import { Locale, LocaleKey } from "../api/types";

export class i18nISOLanguageGlobals {
  defaultLocale: Locale = locales[0];
  localesSubset: Locale[] = [];
}

export let globalConfiguration: i18nISOLanguageGlobals = (() => {
  return new i18nISOLanguageGlobals();
})();

interface GetterParams {
  key: LocaleKey;
  possibleMatch: string | string[];
  tryFallback?: boolean;
}

function getFallback({ asArray = false }: { asArray?: boolean }) {
  const { localesSubset: subset, defaultLocale } = globalConfiguration;
  const useSubset = Boolean(subset.length);

  if (useSubset) {
    const subsetHasDefaultLocale = subset.includes(defaultLocale);

    if (subsetHasDefaultLocale) {
      if (asArray) {
        return [defaultLocale];
      }
      return defaultLocale;
    } else {
      if (asArray) {
        return [subset[0]];
      }
      return subset[0];
    }
  }

  if (asArray) {
    return [defaultLocale];
  }
  return defaultLocale;
}

export function get({
  key,
  possibleMatch,
  tryFallback = false,
}: GetterParams): Locale[] | Locale | undefined {
  const subset = globalConfiguration.localesSubset;
  const fallback = getFallback({ asArray: false }) as Locale;
  const useSubset = Boolean(subset.length);

  if (Array.isArray(possibleMatch)) {
    const possibleMatches = possibleMatch;
    const match = possibleMatches
      .map((possibleMatch) => {
        if (useSubset) {
          return subset.find((locale) => locale[key] === possibleMatch);
        }

        return locales.find((locale) => locale[key] === possibleMatch);
      })
      .filter((locale) => locale !== undefined) as Locale[];

    if (!match.length && tryFallback) {
      return [fallback];
    }

    return match;
  }

  if (useSubset) {
    const match = subset.find((locale) => locale[key] === possibleMatch);

    if (!match && tryFallback) {
      return fallback;
    }

    return match;
  }

  const match = locales.find((locale) => locale[key] === possibleMatch);

  if (!match && tryFallback) {
    return fallback;
  }

  return match;
}

export function getWithFallback({
  key,
  possibleMatch,
}: Omit<GetterParams, "tryFallback">) {
  return get({ key, possibleMatch, tryFallback: true }) as Locale;
}

export function query({
  key,
  possibleMatch,
  tryFallback = false,
}: GetterParams) {
  const { localesSubset: subset } = globalConfiguration;
  const fallback = getFallback({ asArray: true }) as Locale[];
  const useSubset = Boolean(subset.length);

  if (Array.isArray(possibleMatch)) {
    const possibleMatches = possibleMatch;
    const match = possibleMatches
      .map((possibleMatch) => {
        if (useSubset) {
          return subset.filter((locale) => locale[key] === possibleMatch);
        }

        return locales.filter((locale) => locale[key] === possibleMatch);
      })
      .reduce((acc, cur) => [...acc, ...cur]);

    if (!match.length && tryFallback) {
      return fallback;
    }

    return match;
  }

  if (useSubset) {
    const match = subset.filter((locale) => locale[key] === possibleMatch);

    if (!match.length && tryFallback) {
      return fallback;
    }

    return match;
  }

  const match = locales.filter((locale) => locale[key] === possibleMatch);

  if (!match.length && tryFallback) {
    return fallback;
  }

  return match;
}

export function queryWithFallback({
  key,
  possibleMatch,
}: Omit<GetterParams, "tryFallback">) {
  return query({ key, possibleMatch, tryFallback: true }) as Locale[];
}
