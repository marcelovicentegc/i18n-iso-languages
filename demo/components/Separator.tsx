import React from "react";

interface SeparatorProps {
  thick?: boolean;
}

export function Separator({ thick }: SeparatorProps) {
  return (
    <div
      className="separator"
      style={{
        height: thick ? 22 : 14,
        width: "100%",
        borderBottom: `${thick ? 3 : 1}px solid #eaeaea`,
        marginBottom: thick ? 16 : 12,
      }}
    />
  );
}
