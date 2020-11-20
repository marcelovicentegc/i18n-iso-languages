import { query, get } from "../core/internal";
import { locales } from "./locales";
import { Locale } from "./types";

/**
 * Get locale object by IETF language tag.
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
 * ## @example
 * ```tsx
 * import { getLocaleByIETFLanguageTag } from `@marcelovicentegc/i18n-iso-languages`
 *
 * const locale = getLocaleByIETFLanguageTag("pt-BR")
 *
 * if (locale) {
 *  const { officialLanguage, region, nativeOfficialLanguage, nativeRegion, ISO31661Alpha2, ISO31661Alpha3 } = locale
 *  console.log(officialLanguage)export { locales } from "./api/locales";
export { Locale } from "./api/types";
export { configure } from "./api/configure";

export 
 *  // Portuguese
 *  console.log(region)
 *  // Brazil
 *  console.log(nativeOfficialLanguage)
 *  // Português
 *  console.log(nativeRegion)
 *  // Brasil
 *  console.log(ISO31661Alpha2)
 *  // BR
 *  console.log(ISO31661Alpha3)
 *  // BRA
 * }
 *
 * const locales = getLocaleByIETFLanguageTag(["pt-BR", "pt-PT", "en-US", "non-existent-tag", "another-non-existent-tag"])
 *
 * console.log(locales)
 * // [{
 * //  officialLanguage: 'English',
 * //  region: 'United States',
 * //  nativeOfficialLanguage: 'English',
 * //  nativeRegion: 'United States',
 * //  ISO6391: 'us',
 * //  ISO31661Alpha2: 'US',
 * //  ISO31661Alpha3: 'USA',
 * //  IETFLanguageTag: 'en-US'
 * // },
 * // {
 * //  officialLanguage: 'Portuguese',
 * //  region: 'Brazil',
 * //  nativeOfficialLanguage: 'Português',
 * //  nativeRegion: 'Brasil',
 * //  ISO6391: 'br',
 * //  ISO31661Alpha2: 'BR',
 * //  ISO31661Alpha3: 'BRA',
 * //  IETFLanguageTag: 'pt-BR'
 * // },
 * // {
 * //  officialLanguage: 'Portuguese',
 * //  region: 'Portugal',
 * //  nativeOfficialLanguage: 'Português',
 * //  nativeRegion: 'Portugal',
 * //  ISO6391: 'pt',
 * //  ISO31661Alpha2: 'PT',
 * //  ISO31661Alpha3: 'PRT',
 * //  IETFLanguageTag: 'pt-PT'
 * // }]
 * ```
 */
export function getLocaleByIETFLanguageTag(tag: string | string[]) {
  if (Array.isArray(tag)) {
    return tag
      .map((languageTag) =>
        locales.find(({ IETFLanguageTag }) => IETFLanguageTag === languageTag)
      )
      .filter((locale) => locale !== undefined) as Locale[];
  }

  return get({ key: "IETFLanguageTag", possibleMatch: tag });
}

/**
 * Get locales object by official language.
 *
 * ## @example
 * ```tsx
 * import { getLocalesByOfficialLanguage } from `@marcelovicentegc/i18n-iso-languages`
 *
 * const locales = getLocalesByOfficialLanguage("portuguese")
 *
 * if (locales.length) {
 *  locales.forEach(({
 *    region,
 *    nativeOfficialLanguage,
 *    nativeRegion,
 *    ISO31661Alpha2,
 *    ISO31661Alpha3,
 *    IETFLanguageTag
 *   }) => {
 *    console.log(region)
 *    console.log(nativeOfficialLanguage)
 *    console.log(nativeRegion)
 *    console.log(ISO31661Alpha2)
 *    console.log(ISO31661Alpha3)
 *    console.log(IETFLanguageTag)
 *  })
 * }
 *
 * // Output:
 *
 * // Brazil
 * // Português
 * // Brasil
 * // BR
 * // BRA
 * // pt-BR
 *
 * // Portugal
 * // Português
 * // Portugal
 * // PT
 * // PRT
 * // pt-PT
 * ```
 */
export function getLocalesByOfficialLanguage(language: string) {
  return query({ key: "officialLanguage", possibleMatch: language });
}

export function getLocaleByRegion(region: string) {
  return get({ key: "region", possibleMatch: region });
}

export function getLocaleByISO3166Alpha2(countryCode: string) {
  return get({ key: "ISO31661Alpha2", possibleMatch: countryCode });
}
