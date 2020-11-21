import Head from "next/head";
import { Fragment } from "react";
import { CodeBlock } from "../components/CodeBlock";
import { configure, getLocales } from "@marcelovicentegc/i18n-iso-languages";

configure({
  localesSubset: {
    lookupKey: "IETFLanguageTag",
    locales: ["en-US", "pt-BR", "it-IT", "es-AR"],
  },
});

export default function Home() {
  const locales = getLocales();

  return (
    <div className="container">
      <Head>
        <title>i18n-iso-languages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">i18n-iso-languages</h1>

        <p className="description">
          Get started by adding it to your project{" "}
          <code>yarn add @marcelovicentegc/i18n-iso-languages</code>
        </p>

        <div className="grid">
          <div className="card">
            <h3>configure</h3>
            <CodeBlock>
              {`
import { configure } from '@marcelovicentegc/i18n-iso-languages'
              
configure({
  localesSubset: {
    lookupKey: 'IETFLanguageTag',
    locales: ['en-US', 'pt-BR', 'it-IT', 'es-AR'],
  },
})
              `}
            </CodeBlock>
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
      <p>Region: {locale.region}</p>
      <p>ISO 639-1: {locale.ISO6391}</p>
      <p>ISO 3166-1 alpha-2: {locale.ISO31661Alpha2}</p>
      <p>ISO 3166-1 alpha-3: {locale.ISO31661Alpha3}</p>
      <p>IETFL language tag: {locale.IETFLanguageTag}</p>
    </>
  );
})
              `}
            </CodeBlock>
            {locales.map((locale, index) => {
              return (
                <Fragment key={index}>
                  <div className="separator" />
                  <p>Official language: {locale.officialLanguage}</p>
                  <p>Region: {locale.region}</p>
                  <p>ISO 639-1: {locale.ISO6391}</p>
                  <p>ISO 3166-1 alpha-2: {locale.ISO31661Alpha2}</p>
                  <p>ISO 3166-1 alpha-3: {locale.ISO31661Alpha3}</p>
                  <p>IETFL language tag: {locale.IETFLanguageTag}</p>
                </Fragment>
              );
            })}
          </div>
        </div>
      </main>

      <footer>
        <a
          href="https://github.com/marcelovicentegc/i18n-iso-languages"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brought to you with ❤️
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

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
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
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
