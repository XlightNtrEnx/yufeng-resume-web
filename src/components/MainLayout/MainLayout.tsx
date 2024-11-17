import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

import { Nav } from "./Nav";

const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  position: relative;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.pallete.complementary.softPrimary},
    ${({ theme }) => theme.colors.pallete.complementary.softerPrimary}
  );
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OutletContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  max-width: 1024px;
  padding: 0 12px;
`;

export function MainLayout() {
  return (
    <Container id="app">
      <Nav />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </Container>
  );
}
