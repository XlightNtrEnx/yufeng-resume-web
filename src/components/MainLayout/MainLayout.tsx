import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import { Suspense } from "react";

import { FlexColumn, FlexRow, LoadingSpinner } from "@src/components";
import { fadeInFromLeft } from "@src/animations";

import { SideBar } from "./SideBar";

const Container = styled(FlexRow)`
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
  position: relative;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.pallete.complementary.softPrimary},
    ${({ theme }) => theme.colors.pallete.complementary.softerPrimary}
  );
  align-items: center;

  > :first-child {
    position: relative;
    left: 8px;
    z-index: 9999;
  }
`;

const OutletContainer = styled(FlexColumn)`
  align-items: stretch;
  justify-content: center;
  width: 100%;
  max-width: 900px;
`;

export function MainLayout() {
  return (
    <Container id="app">
      <SideBar animation={fadeInFromLeft} />
      <OutletContainer>
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </OutletContainer>
    </Container>
  );
}
