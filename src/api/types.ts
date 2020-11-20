export interface Locale {
  officialLanguage: string;
  nativeOfficialLanguage: string;
  region: string;
  nativeRegion: string;
  /**
   * ISO 639-1:2002, Codes for the representation of names of languages
   * Part 1: Alpha-2 code, is the first part of the ISO 639 series of international standards for language codes.
   * Part 1 covers the registration of two-letter codes. There are 184 two-letter codes registered as of December 2018.
   * The registered codes cover the world's major languages.
   * These codes are a useful international and formal shorthand for indicating languages.
   *
   * For more information, see https://en.wikipedia.org/wiki/ISO_639-1
   */
  ISO6391: string;
  /**
   * ISO 3166-1 alpha-2 codes are two-letter country codes defined in ISO 3166-1,
   * part of the ISO 3166 standard published by the International Organization for Standardization (ISO),
   * to represent countries, dependent territories, and special areas of geographical interest.
   * They are the most widely used of the country codes published by ISO (the others being alpha-3 and numeric),
   * and are used most prominently for the Internet's country code top-level domains (with a few exceptions).
   * They are also used as country identifiers extending the postal code when appropriate within the international
   * postal system for paper mail, and has replaced the previous one consisting one-letter codes.
   * They were first included as part of the ISO 3166 standard in its first edition in 1974.
   *
   * For more information, see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
   */
  ISO31661Alpha2: string;
  /**
   * ISO 3166-1 alpha-3 codes are three-letter country codes defined in ISO 3166-1,
   * part of the ISO 3166 standard published by the International Organization for Standardization (ISO),
   * to represent countries, dependent territories, and special areas of geographical interest.
   * They allow a better visual association between the codes and the country names than the two-letter alpha-2 codes
   * (the third set of codes is numeric and hence offers no visual association).
   * They were first included as part of the ISO 3166 standard in its first edition in 1974.
   *
   * For more information, see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3
   */
  ISO31661Alpha3: string;
  /**
   * An IETF BCP 47 language tag is a code to identify human languages.
   * For example, the tag en stands for English; es-419 for Latin American Spanish;
   * rm-sursilv for Sursilvan; gsw-u-sd-chzh for Zürich German; nan-Hant-TW for Min Nan Chinese as spoken in Taiwan using traditional Han characters.
   * To distinguish language variants for countries, regions, writing systems etc., IETF language tags combine subtags from other standards such as ISO 639, ISO 15924, ISO 3166-1, and UN M.49.
   * The tag structure has been standardized by the Internet Engineering Task Force (IETF) in Best Current Practice (BCP) 47; the subtags are maintained by the IANA Language Subtag Registry.
   * IETF language tags are used by computing standards such as HTTP, HTML, XML, and PNG.
   *
   * For more information, see https://en.wikipedia.org/wiki/IETF_language_tag
   * Language subtag registry: https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
   */
  IETFLanguageTag: string;
}

export type LocaleKey = keyof Locale;
