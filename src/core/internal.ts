import { locales } from "../api/locales";
import { Locale, LocaleKey } from "../api/types";

export class i18nISOLanguageGlobals {
  defaultLocale: Locale | null = null;
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

export function get({
  key,
  possibleMatch,
  tryFallback = false,
}: GetterParams): Locale[] | Locale | undefined {
  const subset = globalConfiguration.localesSubset;
  let fallback: Locale | undefined = undefined;
  const useSubset = Boolean(subset.length);

  if (Array.isArray(possibleMatch)) {
    const possibleMatches = possibleMatch;
    return possibleMatches
      .map((possibleMatch) => {
        if (useSubset) {
          return subset.find((locale) => locale[key] === possibleMatch);
        }

        return locales.find((locale) => locale[key] === possibleMatch);
      })
      .filter((locale) => locale !== undefined) as Locale[];
  }

  if (useSubset) {
    const match = subset.find((locale) => locale[key] === possibleMatch);

    if (tryFallback) {
      fallback = globalConfiguration.defaultLocale || subset[0];
    }

    return match ?? fallback;
  }

  const match = locales.find((locale) => locale[key] === possibleMatch);
  return match ?? locales[0];
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
  const subset = globalConfiguration.localesSubset;
  let fallback: Locale | undefined = undefined;

  if (subset.length) {
    const match = subset.filter((locale) => locale[key] === possibleMatch);

    if (tryFallback) {
      fallback = globalConfiguration.defaultLocale || subset[0];
    }

    if (match.length) {
      return match;
    } else {
      return [fallback];
    }
  }

  const match = locales.filter((locale) => locale[key] === possibleMatch);

  if (match.length) {
    return match;
  } else {
    return [locales[0]];
  }
}

export function queryWithFallback({
  key,
  possibleMatch,
}: Omit<GetterParams, "tryFallback">) {
  return query({ key, possibleMatch, tryFallback: true }) as Locale[];
}
