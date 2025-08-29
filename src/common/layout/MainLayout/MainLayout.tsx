import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

import { fadeInFromLeft } from "@src/common/animation";
import { mobileBreakpointInPx } from "@src/common/atom/isMobile";
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

  @media (min-width: ${mobileBreakpointInPx}px) {
    & > :nth-child(2) {
      ${fadeInFromLeft()};
      position: relative;
      left: 20px;
    }
  }

  @media (max-width: ${mobileBreakpointInPx}px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const StyledFlexColumn = styled(FlexColumn)`
  max-width: ${({ theme }) => theme.maxPageWidth};
  width: 100%;
  padding: 12px;
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
      <div id="portal" />
    </StyledFlexRowReverse>
  );
}
