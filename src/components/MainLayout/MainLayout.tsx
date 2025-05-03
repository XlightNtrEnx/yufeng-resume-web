import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import { Suspense } from "react";

import { mobileBreakpointInPx } from "@src/atoms";
import { FlexColumn, FlexRow, LoadingSpinner } from "@src/components";
import { fadeInFromLeft } from "@src/animations";
import BackgroundImage from "@src/assets/images/starry_sky.jpg";

import { SideBar } from "./SideBar";

const Container = styled(FlexRow)`
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
  position: relative;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.pallete.complementary.primary},
    ${({ theme }) => theme.colors.pallete.complementary.softerPrimary}
  );
  background-image: url(${BackgroundImage});
  align-items: center;

  @media (max-width: ${mobileBreakpointInPx}px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const OutletContainer = styled(FlexColumn)`
  align-items: stretch;
  justify-content: center;
  width: 100%;
  max-width: 924px;
  padding: 12px;
`;

export function MainLayout() {
  return (
    <Container id="app">
      <SideBar $animation={fadeInFromLeft} />
      <OutletContainer>
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </OutletContainer>
    </Container>
  );
}
