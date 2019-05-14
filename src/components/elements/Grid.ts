import React, { ComponentProps } from "react";
import styled, { StyledComponent, StyledFunction } from "styled-components";

type Justify =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-around"
  | "space-between";

type TGrid = ComponentProps<"div"> & {
  container?: boolean;
  item?: boolean;
  justify?: Justify;
  alignItems?: "flex-start" | "center" | "flex-end" | "stretch";
  spacing?: 4 | 8 | 16 | 32 | 40;
  xs?: number;
};

export default styled.div<TGrid>`
  display: ${({ container, item }) => {
    return container ? "flex" : item ? "initial" : "initial";
  }};
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "")};
  flex-wrap: wrap;
  width: ${({ xs }) => (xs ? String((100 / 12) * xs + "%") : "auto")};
  margin: 0 ${({ spacing }) => (spacing ? spacing : 0)}px;
`;
