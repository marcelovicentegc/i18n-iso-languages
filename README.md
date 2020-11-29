# @marcelovicentegc/i18n-iso-languages

[![npm version](https://badge.fury.io/js/%40marcelovicentegc%2Fi18n-iso-languages.svg)](https://badge.fury.io/js/%40marcelovicentegc%2Fi18n-iso-languages) [![Playground](https://img.shields.io/badge/-Play%20with%20it%20%20on%20it's%20playground!-success)](https://marcelovicentegc.github.io/i18n-iso-languages)

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
| Japanese                                     | ✔️      |
| Korean (South Korea)                         | ✔️      |
| Thai                                         | ✔️      |
| Romanian (Romania)                           | ✔️      |
| Italian                                      | ✔️      |
| Catalan (Andorra)                            | ✔️      |

## Usage

You can play with this package on it's [playground](https://marcelovicentegc.github.io/i18n-iso-languages/)

> ### Summary
>
> - getters
>   - [getLocaleByIETFLanguageTag](https://github.com/marcelovicentegc/i18n-iso-languages#getlocalebyietflanguagetag)
>   - [getLocalesByOfficialLanguage](https://github.com/marcelovicentegc/i18n-iso-languages#getlocalesbyofficiallanguage)
>   - [getLocaleByRegion](https://github.com/marcelovicentegc/i18n-iso-languages#getlocalebyregion)
>   - [getLocaleByISO31661Alpha2](https://github.com/marcelovicentegc/i18n-iso-languages#getlocalebyiso31661alpha2)
> - configuration
>   - [configure](https://github.com/marcelovicentegc/i18n-iso-languages#configure)

**Note on the getters**

Every getter has an `options`, optional parameter of type `Options`, which you can use to control some of the getter's behavior:

```ts
interface Options {
  tryFallback?: boolean;
}
```

- tryFallback
  - If this option is set to true, it will fallback to the default locale in case it doesn't find a locale or any of the locales you're looking for. The default locale is `en-US`, but you can override this with the [configure](https://github.com/marcelovicentegc/i18n-iso-languages#configure) method.

Every getter has the following type signature:

| Parameter            | Type                   | Description                                     | Defaults to              |
| -------------------- | ---------------------- | ----------------------------------------------- | ------------------------ |
| `language`           | `string` or `string[]` | Key used to find the locale or locales you need | -                        |
| `options` (optional) | `Options`              | Gives you the ability to control some behavior  | `{ tryFallback: false }` |

In case you give a non existent `language` input, or a `language` input that is not present on the [locales subset](https://github.com/marcelovicentegc/i18n-iso-languages#configure) (if that was set),
you will not be able to get it's locale. In case you give an array of languages as input and some of them either doesn't exist or are not on the locales subset, you will still receive an array of the locales found as output.

### getLocaleByIETFLanguageTag

Get a single or multiple locale objects by IETF language tag.

#### Example usage

```tsx
import { getLocaleByIETFLanguageTag } from `@marcelovicentegc/i18n-iso-languages`;

const locale = getLocaleByIETFLanguageTag("pt-BR");

const locales = getLocaleByIETFLanguageTag(["pt-BR", "pt-PT", "en-US"]);
```

### getLocalesByOfficialLanguage

Get locales object by official language.

```tsx
import { getLocalesByOfficialLanguage } from `@marcelovicentegc/i18n-iso-languages`;

const locales = getLocalesByOfficialLanguage("Portuguese");

const moreLocales = getLocalesByOfficialLanguage(["English", "Spanish"]);
```

### getLocaleByRegion

Get a single or multiple locale objects by region.

```tsx
import { getlocaleByRegion } from `@marcelovicentegc/i18n-iso-languages`;

const locale = getlocaleByRegion("Austria");

const locales = getLocaleByRegion(["Austria", "South Korea"]);
```

### getLocaleByISO31661Alpha2

Get a single or multiple locale objects by its [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.

```tsx
import { getLocaleByISO31661Alpha2 } from `@marcelovicentegc/i18n-iso-languages`;

const locale = getLocaleByISO31661Alpha2("IT");

const locales = getLocaleByISO31661Alpha2(["IT", "EG", "RO"]);
```

### configure

You should use this method if you're willing to override some default behavior, specifically the locales made available and the default locale to be used as a fallback if any of the methods don't find the locales being queried.

By default, every locale on this library is made available by the `getLocales` method, and the default language set as fallback is English.

🛑 **IMPORTANT**: You must import the `configure` method on the file that's first read.

#### Parameters

| Parameter                  | Type                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Defaults to                                                                                                            |
| -------------------------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `localesSubset` (optional) | `{ lookupKey: LocaleKey, locales: string[] }` | An object containing a lookup key and a list containing the strings of the subset you want to be used. The search will run against the strings by the lookup key. You can use this to limit the locales objects that should be exposed.                                                                                                                                                                                                                                                             | [Every locale object present on this package](https://github.com/marcelovicentegc/i18n-iso-languages#language-support) |
| `defaultLocale` (optional) | `{ lookupKey: LocaleKey, locale: string }`    | An object containing a lookup key and a single string representing the default locale to be used when the `tryFallback` parameter is passed to any other method. The search will run against the string by the lookup key. You can use this to tell `i18n-iso-languages`: hey, if you don't find this locale for any reason, return X one instead. This is useful if you're interacting with third party services that might not always give you as input a valid ISO or language for your project. | The English (U.S.A.) locale                                                                                            |

**Note**: When you don't define a locales subset, every locale defined on this lib is used.

The `LocaleKey` type is a union type of the following keywords:

- `ISO6391` (ISO 639-1)
- `ISO6392` (ISO 639-2)
- `ISO31661Alpha2` (ISO 3166-1 alpha-2)
- `ISO31661Alpha3` (ISO 3166-1 alpha-3)
- `IETFLanguageTag` (IETF language tag)
- `officialLanguage`
- `nativeOfficialLanguage`
- `region`
- `nativeRegion`

#### Example usage

**Configuring a locale fallback in case any of the methods find a given locale on it's locales set or subset**

```tsx
import { configure } from "@marcelovicentegc/i18n-iso-languages";

configure({
  defaultLocale: {
    lookupKey: "ISO31661Alpha2",
    locales: "RU",
  },
});

// On other files...
import { getLocaleByISO3166Alpha3 } from "@marcelovicentegc/i18n-iso-languages";

// This returns undefined, as there is no such
// NON-EXSITENT-CODE under the ISO 3166-1 alpha-3 standard,
// and the tryFallback option is set to false by default.
const maybeNonExistentCode = getLocaleByISO3166Alpha3("NON-EXISTENT-CODE");

// This returns the russian locale.
const fallback = getLocaleByISO3166Alpha3("NON-EXISTENT-CODE", {
  tryFallback: true,
});
```

**Configuring a subset of locales by the IETF language tag pattern**

```tsx
import { configure } from "@marcelovicentegc/i18n-iso-languages";

configure({
  localesSubset: {
    lookupKey: "IETFLanguageTag",
    locales: ["en-US", "pt-BR", "it-IT", "es-AR"],
  },
});

// On other files...
import {
  getLocales,
  getLocaleByISO3166Alpha2,
} from "@marcelovicentegc/i18n-iso-languages";

const locales = getLocales();
// There are 4 locale objects on the array above.

// This is undefined because japanese locales are not included on the locales subset.
const japaneseLocales = getLocaleByISO3166Alpha2("JP");

// This returns the english (U.S.A.) locales as the
// japanese locales are not included on the locales subset
// BUT tryFallback is set to true.
const maybeJapaneseLocales = getLocaleByISO3166Alpha2("JP", {
  tryFallback: true,
});
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

// On other files...
import { getLocales } from "@marcelovicentegc/i18n-iso-languages";
const locales = getLocales();
// There are 3 locale objects on the array above.
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

// On other files...
import { getLocales } from "@marcelovicentegc/i18n-iso-languages";
const locales = getLocales();
// Every spanish and arabic locale objects are included on the array above.
```

**Configuring a subset of locales by the ISO 639-2 standard**

```tsx
import { configure } from "@marcelovicentegc/i18n-iso-languages";

configure({
  localesSubset: {
    lookupKey: "officialLanguage",
    locales: ["Portuguese", "English", "Chinese"],
  },
});

// On other files...
import { getLocales } from "@marcelovicentegc/i18n-iso-languages";
const locales = getLocales();
// Every portuguese, english and chinese locale objects are included on the array above.
```

```tsx
import { configure } from "@marcelovicentegc/i18n-iso-languages";

configure({
  localesSubset: {
    lookupKey: "officialLanguage",
    locales: ["Portuguese", "English", "Chinese"],
  },
});

// On other files...
import { getLocales } from "@marcelovicentegc/i18n-iso-languages";
const locales = getLocales();
// Every portuguese, english and chinese locale objects are included on the array above.
```
