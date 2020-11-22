import Head from "next/head";
import Select from "react-select";
import { Fragment, useState } from "react";
import { CodeBlock } from "../components/CodeBlock";
import {
  configure as conf,
  getLocales,
  LocaleKey,
  getLocaleByIETFLanguageTag,
  Locale,
} from "@marcelovicentegc/i18n-iso-languages";

interface ConfigOptions {
  localesSubset: {
    lookupKey: LocaleKey;
    locales: string[];
  };
}

const configure = (options: ConfigOptions) => {
  conf(options);
};

const defaultLookupKey: LocaleKey = "IETFLanguageTag";
const defaultLocales = ["pt-BR", "en-US", "zh-CN", "es-MX", "hi-IN"];
const localesConfigPlaceholder: Array<ConfigOptions> = [
  {
    localesSubset: {
      lookupKey: defaultLookupKey,
      locales: defaultLocales,
    },
  },
  {
    localesSubset: {
      lookupKey: "ISO31661Alpha2",
      locales: ["PT", "US", "CH", "MX", "IN"],
    },
  },
  {
    localesSubset: {
      lookupKey: "ISO31661Alpha3",
      locales: ["BRA", "USA", "CHN", "MEX", "IND"],
    },
  },
  {
    localesSubset: {
      lookupKey: "ISO6391",
      locales: ["pt", "en", "zh", "es", "hi"],
    },
  },
  {
    localesSubset: {
      lookupKey: "ISO6392",
      locales: ["por", "eng", "zho", "spa", "hin"],
    },
  },
  {
    localesSubset: {
      lookupKey: "officialLanguage",
      locales: ["Portuguese", "English", "Chinese", "Spanish", "Hindi"],
    },
  },
  {
    localesSubset: {
      lookupKey: "nativeOfficialLanguage",
      locales: ["Português", "English", "中文", "Español", "हिन्दी"],
    },
  },
  {
    localesSubset: {
      lookupKey: "region",
      locales: ["Brazil", "United Kingdom", "China", "Mexico", "India"],
    },
  },
  {
    localesSubset: {
      lookupKey: "nativeRegion",
      locales: [
        "Brasil",
        "United Kingdom",
        "中华人民共和国",
        "México",
        "भारत गणराज्य",
      ],
    },
  },
];
const defaultMultipleByOfficialLanguage = ["Portuguese", "German"];
const defaultMultipleLocalesByLanguageTagQuery = ["en-US", "es-MX"];
const defaultSingleLocaleByLanguageTagQuery = "hi-IN";

configure({
  localesSubset: {
    lookupKey: defaultLookupKey,
    locales: defaultLocales,
  },
});

export default function Home() {
  const [demoLookupKey, setDemoLookupKey] = useState<LocaleKey>(
    "IETFLanguageTag"
  );
  const [demoLocales, setDemoLocales] = useState<string[]>(defaultLocales);
  const [futureDemoLookupKey, setFutureDemoLookupKey] = useState<LocaleKey>(
    demoLookupKey
  );
  const [futureDemoLocales, setFutureDemoLocales] = useState<string[]>(
    demoLocales
  );
  const [
    demoLocalesPlaceholder,
    setDemoLocalesPlaceholder,
  ] = useState<ConfigOptions>(localesConfigPlaceholder[0]);
  const [
    multipleLocalesByLanguageTagQuery,
    setMultipleLocalesByLanguageTagQuery,
  ] = useState(defaultMultipleLocalesByLanguageTagQuery);
  const [
    singleLocaleByLanguageTagQuery,
    setSingleLocaleByLanguageTagQuery,
  ] = useState(defaultSingleLocaleByLanguageTagQuery);
  const [
    singleLocaleByLanguageTag,
    setSingleLocaleByLanguageTag,
  ] = useState<Locale>();
  const [
    multipleLocalesByLanguageTag,
    setMultipleLocalesByLanguageTag,
  ] = useState<Locale[]>([]);
  const [localesByGetLocales, setLocalesByGetLocales] = useState<Locale[]>([]);

  const options: { value: LocaleKey; label: string }[] = [
    { value: "IETFLanguageTag", label: "IETF language tag" },
    { value: "ISO31661Alpha2", label: "ISO 3166-1 alpha-2" },
    { value: "ISO31661Alpha3", label: "ISO 3166-1 alpha-3" },
    { value: "ISO6391", label: "ISO 639-1" },
    { value: "ISO6392", label: "ISO 639-2" },
    { value: "nativeOfficialLanguage", label: "Native official language" },
    { value: "nativeRegion", label: "Native region" },
    { value: "officialLanguage", label: "Official language" },
    { value: "region", label: "Region" },
  ];

  return (
    <div className="container">
      <Head>
        <title>i18n-iso-languages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">i18n-iso-languages</h1>
        <p className="description">Get started by adding it to your project </p>
        <div className="codeBlockContainer">
          <CodeBlock>
            yarn add @marcelovicentegc/i18n-iso-languages <br />
            npm i @marcelovicentegc/i18n-iso-language
          </CodeBlock>
        </div>
        <div className="grid">
          <div className="card">
            <h3>configure</h3>
            <h4>lookup key</h4>
            <Select
              options={options}
              defaultValue={options[0]}
              onChange={(option: { value: LocaleKey; label: string }) => {
                setFutureDemoLookupKey(option.value);

                const config = localesConfigPlaceholder.find(
                  (conf) => conf.localesSubset.lookupKey === option.value
                );

                setFutureDemoLocales(config.localesSubset.locales);
                setDemoLocalesPlaceholder(config);
              }}
            />
            <h4>locales</h4>
            <input
              placeholder={demoLocalesPlaceholder.localesSubset.locales.join(
                ","
              )}
              value={futureDemoLocales.join()}
              onChange={(event) =>
                setFutureDemoLocales(event.target.value.split(","))
              }
            />
            <div className="separator" />
            <CodeBlock>
              {`
import { configure } from '@marcelovicentegc/i18n-iso-languages'
              
configure({
  localesSubset: {
    lookupKey: '${demoLookupKey}',
    locales: [${demoLocales.map((locale) => `'${locale}'`)}],
  },
})
              `}
            </CodeBlock>
            <button
              onClick={() => {
                configure({
                  localesSubset: {
                    lookupKey: futureDemoLookupKey,
                    locales: futureDemoLocales,
                  },
                });
                setDemoLookupKey(futureDemoLookupKey);
                setDemoLocales(futureDemoLocales);
              }}
            >
              Run the code above ☝️
            </button>
          </div>

          <div className="card">
            <h3>getLocales</h3>
            <CodeBlock>
              {`
import { getLocales } from '@marcelovicentegc/i18n-iso-languages'
              
const locales = getLocales()

locales.map((locale) => {
  return (
    <>
    <div className="separator" />
    <p>Official language: {locale.officialLanguage}</p>
    <p>
      Native official language: {locale.nativeOfficialLanguage}
    </p>
    <p>Region: {locale.region}</p>
    <p>Native region: {locale.nativeRegion}</p>
    <p>ISO 639-1: {locale.ISO6391}</p>
    <p>ISO 3166-1 alpha-2: {locale.ISO31661Alpha2}</p>
    <p>ISO 3166-1 alpha-3: {locale.ISO31661Alpha3}</p>
    <p>IETFL language tag: {locale.IETFLanguageTag}</p>
    </>
  );
})
              `}
            </CodeBlock>
            <button
              onClick={() => {
                const locales = getLocales();
                setLocalesByGetLocales(locales);
              }}
            >
              Run the code above ☝️
            </button>
            {localesByGetLocales.length > 0 && (
              <>
                <div className="separator" />
                <details>
                  <summary>Result</summary>
                  {localesByGetLocales.map((locale, index) => {
                    return (
                      <Fragment key={index}>
                        <div className="separator" />
                        <p>Official language: {locale.officialLanguage}</p>
                        <p>
                          Native official language:{" "}
                          {locale.nativeOfficialLanguage}
                        </p>
                        <p>Region: {locale.region}</p>
                        <p>Native region: {locale.nativeRegion}</p>
                        <p>ISO 639-1: {locale.ISO6391}</p>
                        <p>ISO 3166-1 alpha-2: {locale.ISO31661Alpha2}</p>
                        <p>ISO 3166-1 alpha-3: {locale.ISO31661Alpha3}</p>
                        <p>IETFL language tag: {locale.IETFLanguageTag}</p>
                      </Fragment>
                    );
                  })}
                </details>
              </>
            )}
          </div>
          <div className="card">
            <h3>getLocaleByIETFLanguageTag</h3>
            <h4>
              You can get a single locale by language tag by providing a single
              language tag...
            </h4>
            <input
              placeholder={defaultSingleLocaleByLanguageTagQuery}
              value={singleLocaleByLanguageTagQuery}
              onChange={(event) =>
                setSingleLocaleByLanguageTagQuery(event.target.value)
              }
            />
            <div className="separator" />
            <CodeBlock>
              {`
import { getLocaleByIETFLanguageTag, Locale } from '@marcelovicentegc/i18n-iso-languages'
              
const locale = getLocaleByIETFLanguageTag('${singleLocaleByLanguageTagQuery}') as Locale
              `}
            </CodeBlock>
            <button
              onClick={() => {
                const locale = getLocaleByIETFLanguageTag(
                  singleLocaleByLanguageTagQuery
                ) as Locale;

                console.log(locale);

                setSingleLocaleByLanguageTag(locale);
              }}
            >
              Run the code above ☝️
            </button>
            {singleLocaleByLanguageTag && (
              <>
                <div className="separator" />
                <details>
                  <summary>Result</summary>
                  <div className="separator" />
                  <p>
                    Official language:{" "}
                    {singleLocaleByLanguageTag.officialLanguage}
                  </p>
                  <p>
                    Native official language:{" "}
                    {singleLocaleByLanguageTag.nativeOfficialLanguage}
                  </p>
                  <p>Region: {singleLocaleByLanguageTag.region}</p>
                  <p>Native region: {singleLocaleByLanguageTag.nativeRegion}</p>
                  <p>ISO 639-1: {singleLocaleByLanguageTag.ISO6391}</p>
                  <p>
                    ISO 3166-1 alpha-2:{" "}
                    {singleLocaleByLanguageTag.ISO31661Alpha2}
                  </p>
                  <p>
                    ISO 3166-1 alpha-3:{" "}
                    {singleLocaleByLanguageTag.ISO31661Alpha3}
                  </p>
                  <p>
                    IETFL language tag:{" "}
                    {singleLocaleByLanguageTag.IETFLanguageTag}
                  </p>
                </details>
              </>
            )}

            <h4>
              Or you can get multiple by providing multiple language tags!
            </h4>
            <input
              placeholder={defaultMultipleLocalesByLanguageTagQuery.join(",")}
              value={multipleLocalesByLanguageTagQuery.join()}
              onChange={(event) =>
                setMultipleLocalesByLanguageTagQuery(
                  event.target.value.split(",")
                )
              }
            />
            <div className="separator" />
            <CodeBlock>
              {`
import { getLocaleByIETFLanguageTag, Locale } from '@marcelovicentegc/i18n-iso-languages'
              
const locales = getLocaleByIETFLanguageTag([${multipleLocalesByLanguageTagQuery.map(
                (locale) => `'${locale}'`
              )}]) as Locale[]
              `}
            </CodeBlock>
            <button
              onClick={() => {
                const locales = getLocaleByIETFLanguageTag(
                  multipleLocalesByLanguageTagQuery
                ) as Locale[];

                setMultipleLocalesByLanguageTag(locales);
              }}
            >
              Run the code above ☝️
            </button>
            <div className="separator" />
            <details>
              <summary>Result</summary>
              {multipleLocalesByLanguageTag.map((locale, index) => {
                return (
                  <Fragment key={index}>
                    <div className="separator" />
                    <p>Official language: {locale.officialLanguage}</p>
                    <p>
                      Native official language: {locale.nativeOfficialLanguage}
                    </p>
                    <p>Region: {locale.region}</p>
                    <p>Native region: {locale.nativeRegion}</p>
                    <p>ISO 639-1: {locale.ISO6391}</p>
                    <p>ISO 3166-1 alpha-2: {locale.ISO31661Alpha2}</p>
                    <p>ISO 3166-1 alpha-3: {locale.ISO31661Alpha3}</p>
                    <p>IETFL language tag: {locale.IETFLanguageTag}</p>
                  </Fragment>
                );
              })}
            </details>
          </div>
        </div>
      </main>

      <footer>
        <a
          href="https://github.com/marcelovicentegc/i18n-iso-languages"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brought to you with ❤️ by Marcelo Cardoso
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .grid {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 1260px;
          margin-top: 3rem;
        }

        .codeBlockContainer {
          max-width: calc(100vw - 2.5rem);
        }

        .card {
          margin: 1rem;
          flex-basis: 30%;
          max-width: 800px;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card input {
          padding: 0.5rem;
          height: 38px;
          border-radius: 4px;
          border: 0.5px solid hsl(0, 0%, 80%);
          width: 100%;
          font-size: 16px;
          transition: all 100ms;
          color: hsl(0, 0%, 20%);
        }

        .card input:focus {
          outline: none;
          border: 1px solid #2684ff;
          box-shadow: 0 0 0 1px #2684ff;
        }

        .card button {
          padding: 0.5rem;
          border-radius: 4px;
          background-color: #fff;
          border: 0.5px solid hsl(0, 0%, 80%);
          color: hsl(0, 0%, 20%);
          cursor: pointer;
          transition: all 100ms;
        }

        .card button:focus,
        .card button:hover {
          outline: none;
          border: 1px solid var(--blue);
          box-shadow: 0 0 0 1px var(--blue);
        }

        .card button:active {
          outline: none;
          border: 1px solid var(--blue);
          box-shadow: 0 0 0 1px var(--blue);
          background-color: var(--blue);
          color: #fff;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .card .separator {
          height: 14px;
          width: 100%;
          border-bottom: 1px solid #eaeaea;
          margin-bottom: 12px;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: calc(100vw - 2.5rem);
            flex-direction: column;
          }

          .card {
            width: calc(100% - 1.5rem);
          }

          .title {
            font-size: 3rem;
          }

          .description {
            font-size: 1rem;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          --scrollbarBG: #fff;
          --thumbBG: #000;
          --blue: #2684ff;

          scrollbar-width: thin;
          scrollbar-color: var(--thumbBG) var(--scrollbarBG);

          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        html::-webkit-scrollbar-thumb {
          background-color: var(--thumbBG);
          border-radius: 6px;
          border: 3px solid var(--scrollbarBG);
        }

        html::-webkit-scrollbar-track {
          background: var(--scrollbarBG);
        }

        html::-webkit-scrollbar {
          width: 11px;
        }
      `}</style>
    </div>
  );
}
