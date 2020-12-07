# Changelog

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
