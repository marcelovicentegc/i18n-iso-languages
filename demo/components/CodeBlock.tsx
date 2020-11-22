import React, { CSSProperties, HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLPreElement> & {
  children: ReactNode;
  style?: CSSProperties;
};

export function CodeBlock({ children, ...props }: Props) {
  return (
    <>
      <pre {...props} className="codeBlock">
        <code>{children}</code>
      </pre>
      <style jsx>
        {`
          .codeBlock {
            overflow-x: scroll;
            margin: 0 0 1.5rem;
            padding: 0.75em 1em;
            overflow-x: auto;
            background: var(--blue);
            border-radius: 0.2em;
            color: #fff;
          }

          .codeBlock code {
            font-size: 16px;
          }

          .codeBlock::-webkit-scrollbar-thumb {
            background-color: #fff;
            border-radius: 8px;
            border: 5px solid var(--blue);
          }

          .codeBlock::-webkit-scrollbar-track {
            background: var(--blue);
          }

          .codeBlock::-webkit-scrollbar {
            width: 11px;
          }
        `}
      </style>
    </>
  );
}
