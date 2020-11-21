# @marcelovicentegc/i18n-iso-languages

[![npm version](https://badge.fury.io/js/%40marcelovicentegc%2Fi18n-iso-languages.svg)](https://badge.fury.io/js/%40marcelovicentegc%2Fi18n-iso-languages)

[![Playground](https://img.shields.io/badge/-Play%20with%20it%20%20on%20it's%20playground!-success)](https://marcelovicentegc.github.io/i18n-iso-languages)

Easy and flexible localization library based on the ISO language set standards.

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

### configure

You should use this method if you're willing to override some default behavior, specifically the locales made available and the default locale to be used as a fallback.

By default, every locale on this library is made available by the `getLocales` method, and the default language set as fallback is English.

🛑 **IMPORTANT**: You must import the `configure` method on the file that's first read.

#### localesSubset

If you want to define a subset of the locales to be used on your project, you can do this via the `localesSubset` attribute.
It's usage is simple and straight forward. You just need to create a list with the locales you want to be used by a specific keyword.

**Note**: If you don't define a locales subset, every locale defined on this lib will be used.

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

##### Examples

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

<details>
  <summary>Click here to see what the <code>console.log</code> above outputs 👀</summary>

```json
[
  {
    "officialLanguage": "English",
    "region": "United States",
    "nativeOfficialLanguage": "English",
    "nativeRegion": "United States",
    "ISO6391": "en",
    "ISO6392": "eng",
    "ISO31661Alpha2": "US",
    "ISO31661Alpha3": "USA",
    "IETFLanguageTag": "en-US"
  },
  {
    "officialLanguage": "Spanish",
    "region": "Argentina",
    "nativeOfficialLanguage": "Español",
    "nativeRegion": "Argentina",
    "ISO6391": "es",
    "ISO6392": "spa",
    "ISO31661Alpha2": "AR",
    "ISO31661Alpha3": "ARG",
    "IETFLanguageTag": "es-AR"
  },
  {
    "officialLanguage": "Portuguese",
    "region": "Brazil",
    "nativeOfficialLanguage": "Português",
    "nativeRegion": "Brasil",
    "ISO6391": "pt",
    "ISO6392": "por",
    "ISO31661Alpha2": "BR",
    "ISO31661Alpha3": "BRA",
    "IETFLanguageTag": "pt-BR"
  },
  {
    "officialLanguage": "Italian",
    "region": "Italy",
    "nativeOfficialLanguage": "Italiano",
    "nativeRegion": "Italia",
    "ISO6391": "it",
    "ISO6392": "ita",
    "ISO31661Alpha2": "IT",
    "ISO31661Alpha3": "ITA",
    "IETFLanguageTag": "it-IT"
  }
]
```

</details>

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

<details>
  <summary>Click here to see what the <code>console.log</code> above outputs 👀</summary>

```json
[
  {
    "officialLanguage": "Chinese",
    "region": "China",
    "nativeOfficialLanguage": "中文",
    "nativeRegion": "中华人民共和国",
    "ISO6391": "zh",
    "ISO6392": "zho",
    "ISO31661Alpha2": "CN",
    "ISO31661Alpha3": "CHN",
    "IETFLanguageTag": "zh-CN"
  },
  {
    "officialLanguage": "Spanish",
    "region": "Mexico",
    "nativeOfficialLanguage": "Español",
    "nativeRegion": "México",
    "ISO6391": "es",
    "ISO6392": "spa",
    "ISO31661Alpha2": "MX",
    "ISO31661Alpha3": "MEX",
    "IETFLanguageTag": "es-MX"
  },
  {
    "officialLanguage": "Portuguese",
    "region": "Brazil",
    "nativeOfficialLanguage": "Português",
    "nativeRegion": "Brasil",
    "ISO6391": "pt",
    "ISO6392": "por",
    "ISO31661Alpha2": "BR",
    "ISO31661Alpha3": "BRA",
    "IETFLanguageTag": "pt-BR"
  }
]
```

</details>

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

<details>
  <summary>Click here to see what the <code>console.log</code> above outputs 👀</summary>

```json
[
  {
    "officialLanguage": "Spanish",
    "region": "Mexico",
    "nativeOfficialLanguage": "Español",
    "nativeRegion": "México",
    "ISO6391": "es",
    "ISO6392": "spa",
    "ISO31661Alpha2": "MX",
    "ISO31661Alpha3": "MEX",
    "IETFLanguageTag": "es-MX"
  },
  {
    "officialLanguage": "Spanish",
    "region": "Colombia",
    "nativeOfficialLanguage": "Español",
    "nativeRegion": "Colombia",
    "ISO6391": "es",
    "ISO6392": "spa",
    "ISO31661Alpha2": "CO",
    "ISO31661Alpha3": "COL",
    "IETFLanguageTag": "es-CO"
  },
  {
    "officialLanguage": "Spanish",
    "region": "Spain",
    "nativeOfficialLanguage": "Español",
    "nativeRegion": "España",
    "ISO6391": "es",
    "ISO6392": "spa",
    "ISO31661Alpha2": "ES",
    "ISO31661Alpha3": "ESP",
    "IETFLanguageTag": "es-ES"
  },
  {
    "officialLanguage": "Spanish",
    "region": "Argentina",
    "nativeOfficialLanguage": "Español",
    "nativeRegion": "Argentina",
    "ISO6391": "es",
    "ISO6392": "spa",
    "ISO31661Alpha2": "AR",
    "ISO31661Alpha3": "ARG",
    "IETFLanguageTag": "es-AR"
  },
  {
    "officialLanguage": "Egyptian Arabic",
    "region": "Egypt",
    "nativeOfficialLanguage": "اللهجه المصريه",
    "nativeRegion": "جمهورية مصر العربية",
    "ISO6391": "ar",
    "ISO6392": "arb",
    "ISO31661Alpha2": "EG",
    "ISO31661Alpha3": "EGY",
    "IETFLanguageTag": "ar-EG"
  },
  {
    "officialLanguage": "Standard Arabic",
    "region": "Arabic League",
    "nativeOfficialLanguage": "عربي فصيح",
    "nativeRegion": "جامعة الدول العربية",
    "ISO6391": "ar",
    "ISO6392": "arb",
    "ISO31661Alpha2": "AE",
    "ISO31661Alpha3": "ARE",
    "IETFLanguageTag": "ar"
  }
]
```

</details>

**Configuring a subset of locales by the ISO 639-2 standard**

```tsx
import { configure } from "@marcelovicentegc/i18n-iso-languages";

configure({
  localesSubset: {
    lookupKey: "officialLanguage",
    locales: ["Portuguese", "English", "Chinese"],
  },
});

// on other files...

const locales = getLocales();

console.log(JSON.stringify(locales));
```

<details>
  <summary>Click here to see what the <code>console.log</code> above outputs 👀</summary>

```json
[
  {
    "officialLanguage": "English",
    "region": "United States",
    "nativeOfficialLanguage": "English",
    "nativeRegion": "United States",
    "ISO6391": "en",
    "ISO6392": "eng",
    "ISO31661Alpha2": "US",
    "ISO31661Alpha3": "USA",
    "IETFLanguageTag": "en-US"
  },
  {
    "officialLanguage": "English",
    "region": "United Kingdom",
    "nativeOfficialLanguage": "English",
    "nativeRegion": "United Kingdom",
    "ISO6391": "en",
    "ISO6392": "eng",
    "ISO31661Alpha2": "GB",
    "ISO31661Alpha3": "GBR",
    "IETFLanguageTag": "en-GB"
  },
  {
    "officialLanguage": "Chinese",
    "region": "China",
    "nativeOfficialLanguage": "中文",
    "nativeRegion": "中华人民共和国",
    "ISO6391": "zh",
    "ISO6392": "zho",
    "ISO31661Alpha2": "CN",
    "ISO31661Alpha3": "CHN",
    "IETFLanguageTag": "zh-CN"
  },
  {
    "officialLanguage": "Portuguese",
    "region": "Brazil",
    "nativeOfficialLanguage": "Português",
    "nativeRegion": "Brasil",
    "ISO6391": "pt",
    "ISO6392": "por",
    "ISO31661Alpha2": "BR",
    "ISO31661Alpha3": "BRA",
    "IETFLanguageTag": "pt-BR"
  },
  {
    "officialLanguage": "Portuguese",
    "region": "Portugal",
    "nativeOfficialLanguage": "Português",
    "nativeRegion": "Portugal",
    "ISO6391": "pt",
    "ISO6392": "por",
    "ISO31661Alpha2": "PT",
    "ISO31661Alpha3": "PRT",
    "IETFLanguageTag": "pt-PT"
  }
]
```

</details>

### getLocaleByIETFLanguageTag

Get a single or multiple locale objects by IETF language tag.

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
```

<details>
  <summary>Click here to see what the <code>console.log</code> above outputs 👀</summary>

```json
[
  {
    "officialLanguage": "English",
    "region": "United States",
    "nativeOfficialLanguage": "English",
    "nativeRegion": "United States",
    "ISO6391": "en",
    "ISO6392": "eng",
    "ISO31661Alpha2": "US",
    "ISO31661Alpha3": "USA",
    "IETFLanguageTag": "en-US"
  },
  {
    "officialLanguage": "Portuguese",
    "region": "Brazil",
    "nativeOfficialLanguage": "Português",
    "nativeRegion": "Brasil",
    "ISO6391": "pt",
    "ISO6392": "por",
    "ISO31661Alpha2": "BR",
    "ISO31661Alpha3": "BRA",
    "IETFLanguageTag": "pt-BR"
  },
  {
    "officialLanguage": "Portuguese",
    "region": "Portugal",
    "nativeOfficialLanguage": "Português",
    "nativeRegion": "Portugal",
    "ISO6391": "pt",
    "ISO6392": "por",
    "ISO31661Alpha2": "PT",
    "ISO31661Alpha3": "PRT",
    "IETFLanguageTag": "pt-PT"
  }
]
```

</details>

### getLocalesByOfficialLanguage

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
```

<details>
  <summary>Click here to see what the <code>console.log</code> above outputs 👀</summary>

```ts
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

</details>
