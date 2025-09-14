import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

import { fadeInFromLeft } from "@src/common/animation";
import { LoadingSpinner } from "@src/common/component/LoadingSpinner";
import { FlexColumn, FlexRowReverse } from "@src/common/layout/flex";
import { paths } from "@src/router/paths";

import { SideBar } from "./SideBar";

const StyledFlexRowReverse = styled(FlexRowReverse)`
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  min-width: 100vw;
  position: relative;
  background-image: url(${paths.public.imagesDir.background});

  @media (min-width: ${({ theme }) => theme.mobileBreakPoint}) {
    & > :nth-child(2) {
      ${fadeInFromLeft()};
      position: relative;
      left: 1.25em;
    }
  }
`;

const StyledFlexColumn = styled(FlexColumn)`
  max-width: 57.75em;
  width: 100%;
  padding: 0.75em;
`;

export function MainLayout() {
  return (
    <StyledFlexRowReverse id="app">
      <StyledFlexColumn>
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </StyledFlexColumn>
      <SideBar />
    </StyledFlexRowReverse>
  );
}
