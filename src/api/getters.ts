import { query, get, globalConfiguration } from "../core/internal";
import { locales } from "./locales";
import { Options } from "./types";

/**
 * Get a single or multiple locale objects by IETF language tag.
 *
 * An IETF BCP 47 language tag is a code to identify human languages.
 * For example, the tag `en` stands for English; `es-419` for Latin American Spanish;
 * `rm-sursilv` for Sursilvan; `gsw-u-sd-chzh` for Zürich German; `nan-Hant-TW` for Min Nan Chinese as spoken in Taiwan using traditional Han characters.
 * To distinguish language variants for countries, regions, writing systems etc., IETF language tags combine subtags from other standards such as ISO 639, ISO 15924, ISO 3166-1, and UN M.49.
 * The tag structure has been standardized by the Internet Engineering Task Force (IETF) in Best Current Practice (BCP) 47; the subtags are maintained by the IANA Language Subtag Registry.
 * IETF language tags are used by computing standards such as HTTP, HTML, XML, and PNG.
 *
 * For more information, see https://en.wikipedia.org/wiki/IETF_language_tag
 *
 * Language subtag registry: https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
 *
 * ### @example
 * ```tsx
 * import { getLocaleByIETFLanguageTag, Locale } from `@marcelovicentegc/i18n-iso-languages`
 *
 * const locale: Locale | undefined = getLocaleByIETFLanguageTag("pt-BR")
 * const locales: Locale[] = getLocaleByIETFLanguageTag(["pt-BR", "pt-PT"])
 *
 * const localeFromFallback: Locale = getLocaleByIETFLanguageTag("non-existent-tag", { tryFallback: true })
 * ```
 */
export function getLocaleByIETFLanguageTag(
  tag: string | string[],
  options?: Options
) {
  return get({
    key: "IETFLanguageTag",
    possibleMatch: tag,
    tryFallback: !!options?.tryFallback,
  });
}

/**
 * Get an array of locales objects by official language.
 *
 * ### @example
 * ```tsx
 * import { getLocalesByOfficialLanguage } from `@marcelovicentegc/i18n-iso-languages`
 *
 * const locales = getLocalesByOfficialLanguage("Portuguese")
 * ```
 */
export function getLocalesByOfficialLanguage(
  language: string,
  options?: Options
) {
  return query({
    key: "officialLanguage",
    possibleMatch: language,
    tryFallback: !!options?.tryFallback,
  });
}

export function getLocaleByRegion(
  region: string | string[],
  options?: Options
) {
  return get({
    key: "region",
    possibleMatch: region,
    tryFallback: !!options?.tryFallback,
  });
}

export function getLocaleByISO3166Alpha2(
  countryCode: string | string[],
  options?: Options
) {
  return get({
    key: "ISO31661Alpha2",
    possibleMatch: countryCode,
    tryFallback: !!options?.tryFallback,
  });
}

export function getLocales() {
  const { localesSubset } = globalConfiguration;

  if (localesSubset.length) {
    return localesSubset;
  } else {
    return locales;
  }
}
