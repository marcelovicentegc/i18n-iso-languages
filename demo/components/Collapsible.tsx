import React, { DetailsHTMLAttributes, ReactNode } from "react";
import { Separator } from "./Separator";

interface CollapsibleProps extends DetailsHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Collapsible({ children, ...props }: CollapsibleProps) {
  return (
    <>
      <Separator />
      <details {...props}>
        <summary>Result</summary>
        {children}
      </details>
    </>
  );
}
