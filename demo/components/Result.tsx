import React, { Fragment } from "react";
import { Locale } from "@marcelovicentegc/i18n-iso-languages";
import { Separator } from "./Separator";

interface ResultProps {
  index?: number;
  locale: Locale;
}

export function Result({ index = 0, locale }: ResultProps) {
  return (
    <Fragment key={index}>
      {index > 0 && <Separator />}
      <p>Official language: {locale.officialLanguage}</p>
      <p>Native official language: {locale.nativeOfficialLanguage}</p>
      <p>Region: {locale.region}</p>
      <p>Native region: {locale.nativeRegion}</p>
      <p>ISO 639-1: {locale.ISO6391}</p>
      <p>ISO 3166-1 alpha-2: {locale.ISO31661Alpha2}</p>
      <p>ISO 3166-1 alpha-3: {locale.ISO31661Alpha3}</p>
      <p>IETFL language tag: {locale.IETFLanguageTag}</p>
    </Fragment>
  );
}
