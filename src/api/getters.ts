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
 *
 * @returns `Locale` | `Locale[]` | `undefined`
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
 * const moreLocales = getLocalesByOfficialLanguage(["Portuguese", "Japanese", "Russian"])
 * ```
 *
 * @returns `Locale[]`
 */
export function getLocalesByOfficialLanguage(
  language: string | string[],
  options?: Options
) {
  return query({
    key: "officialLanguage",
    possibleMatch: language,
    tryFallback: !!options?.tryFallback,
  });
}

/**
 * Get a single or multiple locale objects by region.
 *
 * ### @example
 * ```tsx
 * import { getlocaleByRegion } from `@marcelovicentegc/i18n-iso-languages`
 *
 * const locale = getlocaleByRegion("Austria")
 * const locales = getLocaleByRegion(["Austria", "South Korea"])
 * ```
 *
 * @returns `Locale` | `Locale[]` | `undefined`
 */
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

/**
 * Get a single or multiple locale objects by its ISO 3166-1 alpha-2 code.
 *
 * ISO 3166-1 alpha-2 codes are two-letter country codes defined in ISO 3166-1,
 * part of the ISO 3166 standard published by the International Organization for Standardization (ISO),
 * to represent countries, dependent territories, and special areas of geographical interest.
 * They are the most widely used of the country codes published by ISO (the others being alpha-3 and numeric),
 * and are used most prominently for the Internet's country code top-level domains (with a few exceptions).
 * They are also used as country identifiers extending the postal code when appropriate within the international postal system for paper mail,
 * and has replaced the previous one consisting one-letter codes.
 * They were first included as part of the ISO 3166 standard in its first edition in 1974.
 *
 * For more information, see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
 *
 * ### @example
 * ```tsx
 * import { getLocaleByISO31661Alpha2 } from `@marcelovicentegc/i18n-iso-languages`
 *
 * const locale = getLocaleByISO31661Alpha2("IT")
 * const locales = getLocaleByISO31661Alpha2(["IT", "EG", "RO"])
 * ```
 *
 * @returns `Locale` | `Locale[]` | `undefined`
 */
export function getLocaleByISO31661Alpha2(
  countryCode: string | string[],
  options?: Options
) {
  return get({
    key: "ISO31661Alpha2",
    possibleMatch: countryCode,
    tryFallback: !!options?.tryFallback,
  });
}

/**
 * Get a single or multiple locale objects by ISO 639-1 codes.
 *
 * ISO 639 is a standardized nomenclature used to classify languages.
 * Each language is assigned a two-letter (639-1) and three-letter (639-2 and 639-3) lowercase abbreviation, amended in later versions of the nomenclature.
 *
 * For more information, see https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
 *
 * ### @example
 * ```tsx
 * import { getLocalesByISO6391 } from `@marcelovicentegc/i18n-iso-languages`
 *
 * const locales = getLocalesByISO6391("pt") // returns both Brazilian Portuguese and Portuguese.
 * const moreLocales = getLocalesByISO6391(["fr", "en", "pt"])
 * ```
 *
 * @returns `Locale` | `Locale[]` | `undefined`
 */
export function getLocalesByISO6391(
  isoCode: string | string[],
  options?: Options
) {
  return get({
    key: "ISO6391",
    possibleMatch: isoCode,
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
