import styled from "styled-components";
import React from "react";

import {
  fadeInFromBottom,
  fadeInFromRight,
  fadeInFromTop,
} from "@src/common/animation";
import { Grid } from "@src/common/layout/grid/Grid";

interface ContainerProps {
  $fadeFromBottomElement: number;
}

const StyledGrid = styled(Grid)<ContainerProps>`
  width: 100%;
  grid-template-columns: repeat(auto-fill, 12.5em);
  gap: 3.125em;
  justify-content: center;

  & > * {
    max-width: 12.5em;
    max-height: 12.5em;
    background-color: ${({ theme }) => theme.softBackgroundColor};
  }

  & > :first-child {
    ${fadeInFromTop()}
  }

  & > :nth-child(${({ $fadeFromBottomElement }) => $fadeFromBottomElement}) {
    ${fadeInFromBottom()}
  }

  & > * {
    ${fadeInFromRight()}
  }
`;

export interface GridLayoutProps {
  children: React.ReactNode;
}

export const ColumnGrid = ({ children, ...rest }: GridLayoutProps) => {
  const childCount = React.Children.count(children);
  let fadeFromBottomElement = 0;
  if (childCount > 3)
    fadeFromBottomElement = childCount - ((childCount + 2) % 3);

  return (
    <StyledGrid $fadeFromBottomElement={fadeFromBottomElement} {...rest}>
      {children}
    </StyledGrid>
  );
};
