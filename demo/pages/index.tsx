import Head from "next/head";
import Select from "react-select";
import { useState } from "react";
import { CodeBlock } from "../components/CodeBlock";
import {
  configure as conf,
  getLocales,
  LocaleKey,
  getLocaleByIETFLanguageTag,
  Locale,
  getLocalesByOfficialLanguage,
  getLocaleByRegion,
} from "@marcelovicentegc/i18n-iso-languages";
import { ToastContainer, toast } from "react-toastify";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import "react-toastify/dist/ReactToastify.css";

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
const defaultSingleLocaleByLanguageTagQuery = "hi-IN";
const defaultMultipleLocalesByLanguageTagQuery = ["en-US", "es-MX"];
const defaultSingleLocaleByOfficialLanguageQuery = "Portuguese";
const defaultMultipleLocalesByOfficialLanguageQuery = ["Portuguese", "Spanish"];
const defaultSingleLocaleByRegionQuery = "United States";
const defaultMultipleLocalesByRegionQuery = [
  "Brazil",
  "China",
  "United States",
];

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
  const [displayGetLocalesResult, setDisplayGetLocalesResult] = useState(false);
  const [
    displaySingleLocaleByLanguageTagResult,
    setDisplaySingleLocaleByLanguageTagResult,
  ] = useState(false);
  const [
    displayMultipleLocalesByLanguageTagResult,
    setDisplayMultipleLocalesByLanguageTagResult,
  ] = useState(false);
  const [
    displaySingleLocaleByOfficialLanguageResult,
    setDisplaySingleLocaleByOfficialLanguageResult,
  ] = useState(false);
  const [
    displayMultipleLocalesByOfficialLanguageResult,
    setDisplayMultipleLocalesByOfficialLanguageResult,
  ] = useState(false);
  const [
    displaySingleLocaleByRegionResult,
    setDisplaySingleLocaleByRegionResult,
  ] = useState(false);
  const [
    displayMultipleLocalesByRegionResult,
    setDisplayMultipleLocalesByRegionResult,
  ] = useState(false);
  const [
    demoLocalesPlaceholder,
    setDemoLocalesPlaceholder,
  ] = useState<ConfigOptions>(localesConfigPlaceholder[0]);
  const [localesByGetLocales, setLocalesByGetLocales] = useState<Locale[]>([]);
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
  const [
    multipleLocalesByOfficialLanguageQuery,
    setMultipleLocalesByOfficialLanguageQuery,
  ] = useState(defaultMultipleLocalesByOfficialLanguageQuery);
  const [
    singleLocaleByOfficialLanguageQuery,
    setSingleLocaleByOfficialLanguageQuery,
  ] = useState(defaultSingleLocaleByOfficialLanguageQuery);
  const [
    singleLocaleByOfficialLanguage,
    setSingleLocaleByOfficialLanguage,
  ] = useState<Locale[]>();
  const [
    multipleLocalesByOfficialLanguage,
    setMultipleLocalesByOfficialLanguage,
  ] = useState<Locale[]>([]);
  const [
    multipleLocalesByRegionQuery,
    setMultipleLocalesByRegionQuery,
  ] = useState(defaultMultipleLocalesByRegionQuery);
  const [singleLocaleByRegionQuery, setSingleLocaleByRegionQuery] = useState(
    defaultSingleLocaleByRegionQuery
  );
  const [singleLocaleByRegion, setSingleLocaleByRegion] = useState<
    Locale[] | Locale
  >();
  const [multipleLocalesByRegion, setMultipleLocalesByRegion] = useState<
    Locale[] | Locale
  >([]);

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

  const handleSelectOnChange = (value: LocaleKey) => {
    setDemoLookupKey(value);

    const config = localesConfigPlaceholder.find(
      (conf) => conf.localesSubset.lookupKey === value
    );

    setDemoLocales(config.localesSubset.locales);
    setDemoLocalesPlaceholder(config);
  };

  const handleDemoLocales = (value: string[]) => setDemoLocales(value);

  const notifyOnConfigure = () => {
    const locales = getLocales();

    toast(
      `Configured locales subset with ${locales.length} locale object${
        locales.length > 1 ? "s" : ""
      }!`,
      {
        type: "success",
      }
    );
  };

  const handleOnConfigure = () => {
    configure({
      localesSubset: {
        lookupKey: demoLookupKey,
        locales: demoLocales,
      },
    });

    notifyOnConfigure();
  };

  const handleGetLocales = () => {
    const locales = getLocales();
    setLocalesByGetLocales(locales);
    setDisplayGetLocalesResult(true);
  };

  const handleSingleLocaleByLanguageTag = () => {
    const locale = getLocaleByIETFLanguageTag(
      singleLocaleByLanguageTagQuery
    ) as Locale;

    setSingleLocaleByLanguageTag(locale);
    setDisplaySingleLocaleByLanguageTagResult(true);
  };

  const handleMultipleLocalesByLanguageTag = () => {
    const locales = getLocaleByIETFLanguageTag(
      multipleLocalesByLanguageTagQuery
    ) as Locale[];

    setMultipleLocalesByLanguageTag(locales);
    setDisplayMultipleLocalesByLanguageTagResult(true);
  };

  const handleSingleLocaleByOfficialLanguage = () => {
    const locales = getLocalesByOfficialLanguage(
      singleLocaleByOfficialLanguageQuery
    );

    setSingleLocaleByOfficialLanguage(locales);
    setDisplaySingleLocaleByOfficialLanguageResult(true);
  };

  const handleMultipleLocalesByOfficialLanguage = () => {
    const locales = getLocalesByOfficialLanguage(
      multipleLocalesByOfficialLanguageQuery
    );
    setMultipleLocalesByOfficialLanguage(locales);
    setDisplayMultipleLocalesByOfficialLanguageResult(true);
  };

  const handleSingleLocaleByRegion = () => {
    const locale = getLocaleByRegion(singleLocaleByRegionQuery);

    setSingleLocaleByRegion(locale);
    setDisplaySingleLocaleByRegionResult(true);
  };

  const handleMultipleLocalesByRegion = () => {
    const locale = getLocaleByRegion(multipleLocalesByRegionQuery);
    setMultipleLocalesByRegion(locale);
    setDisplayMultipleLocalesByRegionResult(true);
  };

  const configureCode = `
import { configure } from '@marcelovicentegc/i18n-iso-languages'
                
configure({
  localesSubset: {
    lookupKey: '${demoLookupKey}',
    locales: [${demoLocales.map((locale) => `'${locale}'`)}],
  },
})
`;

  const getLocalesCode = `
import { getLocales } from '@marcelovicentegc/i18n-iso-languages'
                
const locales = getLocales()
  
locales.map((locale) => {
  return (
    <>
    <Separator />
    <p>Official language: {locale.officialLanguage}</p>
    <p>
      Native official language: {locale.nativeOfficialLanguage}
    </p>
    <p>Region: {locale.region}</p>
    <p>Native region: {locale.nativeRegion}</p>
    <p>ISO 639-1: {locale.ISO6391}</p>
    <p>ISO 639-2: {locale.ISO6392}</p>
    <p>ISO 3166-1 alpha-2: {locale.ISO31661Alpha2}</p>
    <p>ISO 3166-1 alpha-3: {locale.ISO31661Alpha3}</p>
    <p>IETFL language tag: {locale.IETFLanguageTag}</p>
    </>
  );
})

`;

  const singleLocaleByLanguageTagCode = `
import { getLocaleByIETFLanguageTag, Locale } from '@marcelovicentegc/i18n-iso-languages'
                
const locale = getLocaleByIETFLanguageTag('${singleLocaleByLanguageTagQuery}') as Locale
                `;

  const multipleLocalesByLanguageTagCode = `
import { getLocaleByIETFLanguageTag, Locale } from '@marcelovicentegc/i18n-iso-languages'
                
const locales = getLocaleByIETFLanguageTag([${multipleLocalesByLanguageTagQuery.map(
    (locale) => `'${locale}'`
  )}]) as Locale[]`;

  const singleLocaleByOfficialLanguageCode = `
import { getLocalesByOfficialLanguage } from '@marcelovicentegc/i18n-iso-languages'
                
const locales = getLocalesByOfficialLanguage('${singleLocaleByOfficialLanguageQuery}')
                `;

  const multipleLocalesByOfficialLanguageCode = `
import { getLocalesByOfficialLanguage } from '@marcelovicentegc/i18n-iso-languages'
                
const locales = getLocalesByOfficialLanguage([${multipleLocalesByOfficialLanguageQuery.map(
    (locale) => `'${locale}'`
  )}])`;

  const singleLocaleByRegionCode = `
import { getLocaleByRegion } from '@marcelovicentegc/i18n-iso-languages'
                
const locales = getLocaleByRegion('${singleLocaleByRegionQuery}')
                `;

  const multipleLocalesByRegionCode = `
import { getLocaleByRegion, Locale } from '@marcelovicentegc/i18n-iso-languages'
                  
const locales = getLocaleByRegion([${multipleLocalesByRegionQuery.map(
    (locale) => `'${locale}'`
  )}])`;

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
          <Card
            title={"configure"}
            sections={[
              {
                code: configureCode,
                onClick: handleOnConfigure,
                inputs: (
                  <>
                    <h4>lookup key</h4>
                    <Select
                      options={options}
                      defaultValue={options[0]}
                      onChange={(option: {
                        value: LocaleKey;
                        label: string;
                      }) => {
                        handleSelectOnChange(option.value);
                      }}
                    />
                    <h4>locales</h4>
                    <Input
                      placeholder={demoLocalesPlaceholder.localesSubset.locales.join(
                        ","
                      )}
                      value={demoLocales.join()}
                      onChange={(event) =>
                        handleDemoLocales(event.target.value.split(","))
                      }
                    />
                  </>
                ),
              },
            ]}
          />
          <Card
            title={"getLocales"}
            sections={[
              {
                code: getLocalesCode,
                onClick: handleGetLocales,
                results: {
                  data: localesByGetLocales,
                  display: displayGetLocalesResult,
                  onToggle: (event) => {
                    event.preventDefault();
                    setDisplayGetLocalesResult(!displayGetLocalesResult);
                  },
                },
              },
            ]}
          />
          <Card
            title="getLocaleByIETFLanguageTag"
            sections={[
              {
                inputs: (
                  <>
                    <h4>
                      You can get a single locale by language tag by providing a
                      single language tag...
                    </h4>
                    <Input
                      placeholder={defaultSingleLocaleByLanguageTagQuery}
                      value={singleLocaleByLanguageTagQuery}
                      onChange={(event) => {
                        setSingleLocaleByLanguageTagQuery(event.target.value);
                      }}
                    />
                  </>
                ),
                code: singleLocaleByLanguageTagCode,
                onClick: handleSingleLocaleByLanguageTag,
                results: {
                  data: singleLocaleByLanguageTag,
                  display: displaySingleLocaleByLanguageTagResult,
                  onToggle: (event) => {
                    event.preventDefault();
                    setDisplaySingleLocaleByLanguageTagResult(
                      !displaySingleLocaleByLanguageTagResult
                    );
                  },
                },
              },
              {
                inputs: (
                  <>
                    <h4>
                      Or you can get multiple by providing multiple language
                      tags!
                    </h4>
                    <Input
                      placeholder={defaultMultipleLocalesByLanguageTagQuery.join(
                        ","
                      )}
                      value={multipleLocalesByLanguageTagQuery.join()}
                      onChange={(event) => {
                        setMultipleLocalesByLanguageTagQuery(
                          event.target.value.split(",")
                        );
                      }}
                    />
                  </>
                ),
                code: multipleLocalesByLanguageTagCode,
                onClick: handleMultipleLocalesByLanguageTag,
                results: {
                  data: multipleLocalesByLanguageTag,
                  display: displayMultipleLocalesByLanguageTagResult,
                  onToggle: (event) => {
                    event.preventDefault();
                    setDisplayMultipleLocalesByLanguageTagResult(
                      !displayMultipleLocalesByLanguageTagResult
                    );
                  },
                },
              },
            ]}
          />
          <Card
            title="getLocalesByOfficialLanguage"
            sections={[
              {
                inputs: (
                  <>
                    <h4>
                      You can get multiple locales by official language by
                      providing a single official language...
                    </h4>
                    <Input
                      placeholder={defaultSingleLocaleByOfficialLanguageQuery}
                      value={singleLocaleByOfficialLanguageQuery}
                      onChange={(event) => {
                        setSingleLocaleByOfficialLanguageQuery(
                          event.target.value
                        );
                      }}
                    />
                  </>
                ),
                code: singleLocaleByOfficialLanguageCode,
                onClick: handleSingleLocaleByOfficialLanguage,
                results: {
                  data: singleLocaleByOfficialLanguage,
                  display: displaySingleLocaleByOfficialLanguageResult,
                  onToggle: (event) => {
                    event.preventDefault();
                    setDisplaySingleLocaleByOfficialLanguageResult(
                      !displaySingleLocaleByOfficialLanguageResult
                    );
                  },
                },
              },
              {
                inputs: (
                  <>
                    <h4>
                      Or you can get multiple by providing multiple official
                      languages!
                    </h4>
                    <Input
                      placeholder={defaultMultipleLocalesByOfficialLanguageQuery.join(
                        ","
                      )}
                      value={multipleLocalesByOfficialLanguageQuery.join()}
                      onChange={(event) => {
                        setMultipleLocalesByOfficialLanguageQuery(
                          event.target.value.split(",")
                        );
                      }}
                    />
                  </>
                ),
                code: multipleLocalesByOfficialLanguageCode,
                onClick: handleMultipleLocalesByOfficialLanguage,
                results: {
                  data: multipleLocalesByOfficialLanguage,
                  display: displayMultipleLocalesByOfficialLanguageResult,
                  onToggle: (event) => {
                    event.preventDefault();
                    setDisplayMultipleLocalesByOfficialLanguageResult(
                      !displayMultipleLocalesByOfficialLanguageResult
                    );
                  },
                },
              },
            ]}
          />
          <Card
            title="getLocaleByRegion"
            sections={[
              {
                inputs: (
                  <>
                    <h4>
                      You can get multiple locales by region by providing a
                      single region...
                    </h4>
                    <Input
                      placeholder={defaultSingleLocaleByRegionQuery}
                      value={singleLocaleByRegionQuery}
                      onChange={(event) => {
                        setSingleLocaleByRegionQuery(event.target.value);
                      }}
                    />
                  </>
                ),
                code: singleLocaleByRegionCode,
                onClick: handleSingleLocaleByRegion,
                results: {
                  data: singleLocaleByRegion,
                  display: displaySingleLocaleByRegionResult,
                  onToggle: (event) => {
                    event.preventDefault();
                    setDisplaySingleLocaleByRegionResult(
                      !displaySingleLocaleByRegionResult
                    );
                  },
                },
              },
              {
                inputs: (
                  <>
                    <h4>
                      Or you can get multiple by providing multiple regions!
                    </h4>
                    <Input
                      placeholder={defaultMultipleLocalesByRegionQuery.join(
                        ","
                      )}
                      value={multipleLocalesByRegionQuery.join()}
                      onChange={(event) => {
                        setMultipleLocalesByRegionQuery(
                          event.target.value.split(",")
                        );
                      }}
                    />
                  </>
                ),
                code: multipleLocalesByRegionCode,
                onClick: handleMultipleLocalesByRegion,
                results: {
                  data: multipleLocalesByRegion,
                  display: displayMultipleLocalesByRegionResult,
                  onToggle: (event) => {
                    event.preventDefault();
                    setDisplayMultipleLocalesByRegionResult(
                      !displayMultipleLocalesByRegionResult
                    );
                  },
                },
              },
            ]}
          />
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

      <ToastContainer />

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

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: calc(100vw - 2.5rem);
            flex-direction: column;
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
