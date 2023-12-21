"use client";

import { Squircle } from "corner-smoothing";
import { PropsWithChildren } from "react";

type Props = {
  type?: string;
};

const Button = ({ type = "primary", children }: PropsWithChildren<Props>) => {
  return (
    <Squircle className={`btn btn-${type}`} cornerRadius={12} as={"button"}>
      {children}
    </Squircle>
  );
  //  <button className={`btn btn-${type}`}>{children}</button>;
};

export default Button;
