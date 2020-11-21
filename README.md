# @marcelovicentegc/i18n-iso-languages

[![npm version](https://badge.fury.io/js/%40marcelovicentegc%2Fi18n-iso-languages.svg)](https://badge.fury.io/js/%40marcelovicentegc%2Fi18n-iso-languages)

[![Playground](https://img.shields.io/badge/-playground-success)](https://marcelovicentegc.github.io/i18n-iso-languages)

## Installation

> yarn add @marcelovicentegc/i18n-iso-languages

> npm i @marcelovicentegc/i18n-iso-languages

## Compliance

| ISO standard             | Support |
| ------------------------ | ------- |
| ISO 639-1                | ✔️      |
| ISO 639-2                | ✔️      |
| ISO 3166-1 Alpha 2       | ✔️      |
| ISO 3166-1 Alpha 3       | ✔️      |
| IETF BCP 47 language tag | ✔️      |

## Language support

| Language                                     | Support |
| -------------------------------------------- | ------- |
| English (U.S.A., G.B.)                       | ✔️      |
| Chinese (Standard)                           | ✔️      |
| Hindi                                        | ✔️      |
| Spanish (Mexico, Colombia, Spain, Argentina) | ✔️      |
| French (France)                              | ✔️      |
| Arabic (Egypt, Standard, U.A.E.)             | ✔️      |
| Bengali                                      | ✔️      |
| Russian                                      | ✔️      |
| Portuguese (Brazil, Portugal)                | ✔️      |
| Indonesian                                   | ✔️      |
| Urdu                                         | ✔️      |
| German (Germany, Austria)                    | ✔️      |
| Italian                                      | ✔️      |
| Catalan (Andorra)                            | ✔️      |

## Usage

### Configuration

#### configure

> You can see this in action on the [demo](https://marcelovicentegc.github.io/i18n-iso-languages/)

If you want to define a subset of the locales to be used on your project, you can use `cofigure` along with `getLocales`.

You must import the `configure` method on the file that's first read. _This method was heavily inspired by MobX's implementation._

It's usage is simple and straight forward. You just need to create a list with the locales you want to be used by a specific keyword.

The following keywords are available:

- `ISO6391` (ISO 639-1)
- `ISO6392` (ISO 639-2)
- `ISO31661Alpha2` (ISO 3166-1 alpha-2)
- `ISO31661Alpha3` (ISO 3166-1 alpha-3)
- `IETFLanguageTag` (IETF language tag)
- `officialLanguage`
- `nativeOfficialLanguage`
- `region`
- `nativeRegion`

**It's advised to use one of the ISO keywords if you need fine grained control over what you need on your locales subset, because the other ones might include countries/regions that you don't necessarily need**

###### Examples

**Configuring a subset of locales by the IETF language tag pattern**

```tsx
import { configure } from "@marcelovicentegc/i18n-iso-languages";

configure({
  localesSubset: {
    lookupKey: "IETFLanguageTag",
    locales: ["en-US", "pt-BR", "it-IT", "es-AR"],
  },
});

// on other files...

const locales = getLocales();

console.log(JSON.stringify(locales));
```

**Configuring a subset of locales by the ISO 3166-1 alpha-3 standard**

```tsx
import { configure } from "@marcelovicentegc/i18n-iso-languages";

configure({
  localesSubset: {
    lookupKey: "ISO31661Alpha3",
    locales: ["MEX", "BRA", "CHN"],
  },
});

// on other files...

const locales = getLocales();

console.log(JSON.stringify(locales));
```

**Configuring a subset of locales by the ISO 639-2 standard**

```tsx
import { configure } from "@marcelovicentegc/i18n-iso-languages";

configure({
  localesSubset: {
    lookupKey: "ISO6392",
    locales: ["spa", "arb"],
  },
});

// on other files...

const locales = getLocales();

console.log(JSON.stringify(locales));
```

### Getters

#### getLocaleByIETFLanguageTag

Get locale object by IETF language tag.

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
    ISO6392,
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
  // pt
  console.log(ISO6392);
  // por
  console.log(ISO31661Alpha2);
  // BR
  console.log(ISO31661Alpha3);
  // BRA
}

const locales = getLocaleByIETFLanguageTag([
  "pt-BR",
  "pt-PT",
  "en-US",
  "non-existent-tag",
  "another-non-existent-tag",
]);

console.log(locales);
// [{
//  officialLanguage: 'English',
//  region: 'United States',
//  nativeOfficialLanguage: 'English',
//  nativeRegion: 'United States',
//  ISO6391: 'en',
//  ISO6392: 'eng',
//  ISO31661Alpha2: 'US',
//  ISO31661Alpha3: 'USA',
//  IETFLanguageTag: 'en-US'
// },
// {
//  officialLanguage: 'Portuguese',
//  region: 'Brazil',
//  nativeOfficialLanguage: 'Português',
//  nativeRegion: 'Brasil',
//  ISO6391: 'pt',
//  ISO6392: 'por',
//  ISO31661Alpha2: 'BR',
//  ISO31661Alpha3: 'BRA',
//  IETFLanguageTag: 'pt-BR'
// },
// {
//  officialLanguage: 'Portuguese',
//  region: 'Portugal',
//  nativeOfficialLanguage: 'Português',
//  nativeRegion: 'Portugal',
//  ISO6391: 'pt',
//  ISO6392: 'por',
//  ISO31661Alpha2: 'PT',
//  ISO31661Alpha3: 'PRT',
//  IETFLanguageTag: 'pt-PT'
// }]
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
      ISO6392,
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
// pt
// por
// BR
// BRA
// pt-BR

// Portugal
// Português
// Portugal
// pt
// por
// PT
// PRT
// pt-PT
```
