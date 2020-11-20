# @marcelovicentegc/@marcelovicentegc/i18n-iso-languages

## Installation

> `yarn add @marcelovicentegc/i18n-iso-languages`

> `npm i @marcelovicentegc/i18n-iso-languages`

## Compliance

| ISO standard             | Support |
| ------------------------ | ------- |
| ISO 639-1                | ✔️      |
| ISO 3166-1 Alpha 2       | ✔️      |
| ISO 3166-1 Alpha 3       | ✔️      |
| IETF BCP 47 language tag | ✔️      |

## Usage

### Getters

#### getLocaleByIETFLanguageTag

Get locale object by IETF language tag.

An IETF BCP 47 language tag is a code to identify human languages.
For example, the tag `en` stands for English; `es-419` for Latin American Spanish;
`rm-sursilv` for Sursilvan; `gsw-u-sd-chzh` for Zürich German; `nan-Hant-TW` for Min Nan Chinese as spoken in Taiwan using traditional Han characters.
To distinguish language variants for countries, regions, writing systems etc., IETF language tags combine subtags from other standards such as ISO 639, ISO 15924, ISO 3166-1, and UN M.49.
The tag structure has been standardized by the Internet Engineering Task Force (IETF) in Best Current Practice (BCP) 47; the subtags are maintained by the IANA Language Subtag Registry.
IETF language tags are used by computing standards such as HTTP, HTML, XML, and PNG.

For more information, see https://en.wikipedia.org/wiki/IETF_language_tag

Language subtag registry: https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry

```tsx
import { getLocaleByIETFLanguageTag } from `@marcelovicentegc/i18n-iso-languages`;

const locale = getLocaleByIETFLanguageTag("pt-BR");

if (locale) {
  const {
    officialLanguage,
    region,
    nativeOfficialLanguage,
    nativeRegion,
    ISO6391,
    ISO31661Alpha2,
    ISO31661Alpha3,
  } = locale;
  console.log(officialLanguage);
  // Portuguese
  console.log(region);
  // Brazil
  console.log(nativeOfficialLanguage);
  // Português
  console.log(nativeRegion);
  // Brasil
  console.log(ISO6391);
  // br
  console.log(ISO31661Alpha2);
  // BR
  console.log(ISO31661Alpha3);
  // BRA
}
```

#### getLocalesByOfficialLanguage

Get locales object by official language.

```tsx
import { getLocalesByOfficialLanguage } from `@marcelovicentegc/i18n-iso-languages`;

const locales = getLocalesByOfficialLanguage("portuguese");

if (locales.length) {
  locales.forEach(
    ({
      region,
      nativeOfficialLanguage,
      nativeRegion,
      ISO6391,
      ISO31661Alpha2,
      ISO31661Alpha3,
      IETFLanguageTag,
    }) => {
      console.log(region);
      console.log(nativeOfficialLanguage);
      console.log(nativeRegion);
      console.log(ISO6391);
      console.log(ISO31661Alpha2);
      console.log(ISO31661Alpha3);
      console.log(IETFLanguageTag);
    }
  );
}
// Output:

// Brazil
// Português
// Brasil
// br
// BR
// BRA
// pt-BR

// Portugal
// Português
// Portugal
// pt
// PT
// PRT
// pt-PT
```
