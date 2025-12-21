import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";

import {
  fadeInFromBottom,
  fadeInFromRight,
  fadeInFromTop,
} from "@src/common/animation";
import { Grid } from "@src/common/layout/grid/Grid";

const StyledGrid = styled(Grid)<{
  $fadeFromBottomElement: number;
}>`
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
  const [fadeFromBottomElement, setFadeFromBottomElement] = useState<number>(0);

  useEffect(() => {
    const childCount = React.Children.count(children);
    if (childCount > 3)
      setFadeFromBottomElement(childCount - ((childCount + 2) % 3));
  }, [children]);

  return (
    <StyledGrid $fadeFromBottomElement={fadeFromBottomElement} {...rest}>
      {children}
    </StyledGrid>
  );
};
