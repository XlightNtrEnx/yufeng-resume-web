import styled from "styled-components";
import React from "react";

import {
  fadeInFromBottom,
  fadeInFromRight,
  fadeInFromTop,
} from "@src/common/animations";
import { mobileBreakpointInPx } from "@src/common/atoms/isMobile";
import { Grid } from "@src/common/layouts/grid/Grid";

interface ContainerProps {
  $fadeFromBottomElement: number;
}

const Container = styled(Grid)<ContainerProps>`
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;

  @media (max-width: ${mobileBreakpointInPx}px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    > :nth-child(n + 2) {
      margin-top: 50px;
    }
  }

  > * {
    max-width: 200px;
    max-height: 200px;
    background-color: ${({ theme }) => theme.softBackgroundColor};
  }

  > :nth-child(n + 4) {
    margin-top: 50px;
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

export interface GridLayoutProps
  extends Omit<ContainerProps, "$fadeFromBottomElement"> {
  children: React.ReactNode;
}

export const ColumnGrid = ({ children, ...rest }: GridLayoutProps) => {
  const childCount = React.Children.count(children);
  let fadeFromBottomElement = 0;
  if (childCount > 3) fadeFromBottomElement = childCount - 3 + (childCount % 3);

  return (
    <Container $fadeFromBottomElement={fadeFromBottomElement} {...rest}>
      {children}
    </Container>
  );
};
