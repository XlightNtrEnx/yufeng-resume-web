import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import { useEffect, useState } from "react";

import { FlexColumn, FlexRow } from "@src/components";
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

const LoadingSpinner = styled.div`
  border: 4px solid ${({ theme }) => theme.colors.softerWhite};
  border-top: 4px solid ${({ theme }) => theme.colors.softerBlack};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export function MainLayout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container id="app">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <SideBar animation={fadeInFromLeft} />
          <OutletContainer>
            <Outlet />
          </OutletContainer>
        </>
      )}
    </Container>
  );
}
