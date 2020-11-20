import React, { CSSProperties, HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLPreElement> & {
  children: ReactNode;
  style?: CSSProperties;
};

export function CodeBlock({ children, ...props }: Props) {
  return (
    <pre {...props}>
      <code>{children}</code>
    </pre>
  );
}
