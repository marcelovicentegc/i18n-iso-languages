import React, { Fragment, ReactNode, SyntheticEvent, useState } from "react";
import Link from "next/link";
import { Locale } from "@marcelovicentegc/i18n-iso-languages";
import { CodeBlock } from "./CodeBlock";
import { Collapsible } from "./Collapsible";
import { Result } from "./Result";
import { Separator } from "./Separator";

interface CardProps {
  title: string;
  sections: {
    inputs?: ReactNode;
    code: string;
    results?: {
      data?: Locale | Locale[];
      display: boolean;
      onToggle: (event: SyntheticEvent<HTMLElement, Event>) => void;
    };
    onClick: () => void;
  }[];
}

export function Card({ title, sections }: CardProps) {
  const [displayChain, setDisplayChain] = useState(false);

  return (
    <>
      <div className="card" id={title}>
        <div
          className="row"
          onMouseEnter={() => setDisplayChain(true)}
          onMouseLeave={() => setDisplayChain(false)}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              left: -24,
              bottom: 2,
              width: 24,
              cursor: displayChain ? "pointer" : "default",
            }}
          >
            {displayChain && (
              <Link href={`/i18n-iso-languages#${title}`} scroll={false}>
                <img
                  src="/i18n-iso-languages/chain.png"
                  alt={title}
                  width="18"
                  height="18"
                />
              </Link>
            )}
          </div>
          <h3>{title}</h3>
        </div>
        {sections.map(({ inputs, onClick, code, results }, index) => {
          return (
            <Fragment key={index}>
              {inputs}
              <Separator />
              <CodeBlock>{code}</CodeBlock>
              <button onClick={onClick}>Run the code above ☝️</button>
              {Array.isArray(results?.data)
                ? results.data.length > 0 && (
                    <Collapsible
                      open={results.display}
                      onClick={results.onToggle}
                    >
                      {results.data.map((locale, index) => {
                        return <Result index={index} locale={locale} />;
                      })}
                    </Collapsible>
                  )
                : results?.data && (
                    <Collapsible
                      open={results.display}
                      onClick={results.onToggle}
                    >
                      <Result locale={results.data} />
                    </Collapsible>
                  )}
              {sections.length - 1 > index && <Separator thick />}
            </Fragment>
          );
        })}
      </div>
      <style jsx>
        {`
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

          .card .row {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
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
            margin: 0 0 1rem -24px;
            font-size: 1.5rem;
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }

          @media (max-width: 600px) {
            .card {
              width: calc(100% - 1.5rem);
            }
          }
        `}
      </style>
    </>
  );
}
