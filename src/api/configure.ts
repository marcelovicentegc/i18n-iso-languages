import { globalConfiguration } from "../core/internal";
import { locales } from "./locales";
import { LocaleKey } from "./types";

export function configure(options: {
  defaultLocale?: {
    lookupKey: LocaleKey;
    locale: string;
  };
  localesSubset?: {
    lookupKey: LocaleKey;
    locales: string[];
  };
}) {
  const { defaultLocale, localesSubset } = options;

  if (defaultLocale) {
    const { lookupKey, locale: fallbackLocale } = defaultLocale;
    const fallback = locales.find(
      (locale) => locale[lookupKey] === fallbackLocale
    );
    globalConfiguration.defaultLocale = fallback ?? null;
  }

  if (localesSubset) {
    const { lookupKey, locales: configSubset } = localesSubset;
    const subset = locales.filter((locale) =>
      configSubset.includes(locale[lookupKey])
    );
    globalConfiguration.localesSubset = subset;
  }
}
