import React, { FunctionComponent } from "react";
import NextLink, { LinkProps } from "next/Link";

interface Props extends LinkProps {
  route: string;
}

export const Link: FunctionComponent<Props> = ({ route, ...other }) => {
  return <NextLink href={route} {...other} />;
};
