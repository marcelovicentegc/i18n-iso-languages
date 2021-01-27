# Changelog

## [0.13.0] 01/27/2021

### Added

- Method to get locales by ISO 639-1 code.

## [0.12.1] 12/14/2020

### Changed

- Romanian native official language.

## [0.12.0] 12/12/2020

### Added

- Language support for:
  - Assamese (India)
  - Afar (Djibouti)
  - Zulu (South Africa)
  - Xhosa (South Africa)
  - Afrikaans (South Africa)
  - Pedi (South Africa)
  - Tswana (South Africa)
  - Southern Sotho (South Africa)
  - Tsonga (South Africa)
  - Swazi (South Africa)
  - Venda (South Africa)
  - Southern Ndebele (South Africa)
  - Albanian (Albania)
  - Aragonese (Spain)
  - Armenian (Armenia)
  - Azerbaijani (Azerbaijan)
  - Basque (Spain)
  - Belarusian (Belarus)
  - Bislama (Vanuatu)
  - Bosnian (Bosnia and Herzegovina)
  - Breton (France)
  - Bulgarian (Bulgaria)
  - Burmese (Myanmar)
  - Abkhaz (Abkhazia)

## [0.11.0] 12/07/2020

### Added

- Language support for:

  - Czech (Czech Republic)
  - Norwegian (Norway)

## [0.10.0] 12/07/2020

### Added

- Language support for:

  - Dutch (Netherlands and Belgium)
  - Swedish (Sweden)
  - Finnish (Finland)

## [0.9.0] 11/28/2020

### Added

- `getLocaleByRegion`, `getLocaleByISO31661Alpha2` and `getLocales` jsDocs, as well as improved `getLocalesByOfficialLanguage` and `getLocaleByIETFLanguageTag` jsDocs.

### Fixed

- Renamed `getLocaleByISO3166Alpha2` function to `getLocaleByISO31661Alpha2` to match the entire code in camel case.

## [0.8.0] 11/23/2020

### Added

- Language support for:

  - Japanese
  - Korean (South Korea)
  - Thai
  - Romanian (Romania)

- `getFallback` internal method.

### Changed

- Accept an array of official languages on `getLocalesByOfficialLanguage`.
- Let the `query` internal method handle arrays.

### Fixed

- Default fallback setting.

## [0.7.0] - 11/21/2020

### Added

- Batch search on internal `get` method.

### Changed

- Improved jsDocs for `getLocaleByIETFLanguageTag` and `getLocalesByOfficialLanguage` methods by making them less verbose.

## [0.6.0] - 11/21/2020

### Added

- Language support for:

  - English (G.B.)
  - Chinese (Standard)
  - Hindi
  - Spanish (Mexico, Colombia and Spain)
  - French
  - Arabic (Egypt, Standard and U.A.E.)
  - Bengali
  - Indonesian
  - Urdu
  - German (Germany and Austria)
  - Catalan

- ISO 639-2 field on `Locale` interface.

### Fixed

- English (U.S.A.) and Portuguese (Brazil) ISO 639-1
