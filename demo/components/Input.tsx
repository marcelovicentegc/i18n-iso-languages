import React, { ChangeEvent, HTMLProps } from "react";

interface InputProps extends Omit<HTMLProps<HTMLInputElement>, "onChange"> {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Input(props: InputProps) {
  return (
    <>
      <input {...props} />
      <style jsx>
        {`
          input {
            padding: 0.5rem;
            height: 38px;
            border-radius: 4px;
            border: 0.5px solid hsl(0, 0%, 80%);
            width: 100%;
            font-size: 16px;
            transition: all 100ms;
            color: hsl(0, 0%, 20%);
          }

          input:focus {
            outline: none;
            border: 1px solid #2684ff;
            box-shadow: 0 0 0 1px #2684ff;
          }
        `}
      </style>
    </>
  );
}
