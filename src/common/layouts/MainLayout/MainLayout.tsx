import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

import { fadeInFromLeft } from "@src/common/animations";
import { mobileBreakpointInPx } from "@src/common/atoms/isMobile";
import { FlexColumn, FlexRowReverse } from "@src/common/layouts/flex";
import { LoadingSpinner } from "@src/common/components/LoadingSpinner";
import { paths } from "@src/router/paths";

import { SideBar } from "./SideBar";

const StyledFlexRowReverse = styled(FlexRowReverse)`
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
  position: relative;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.pallete.complementary.primary},
    ${({ theme }) => theme.colors.pallete.complementary.softerPrimary}
  );
  background-image: url(${paths.public.imagesDir.background});
  align-items: center;

  @media (max-width: ${mobileBreakpointInPx}px) {
    flex-direction: column;
    justify-content: flex-start;
  }

  & > :nth-child(2) {
    ${fadeInFromLeft()};
  }
`;

const StyledFlexColumn = styled(FlexColumn)`
  align-items: stretch;
  justify-content: center;
  width: 100%;
  max-width: 924px;
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
