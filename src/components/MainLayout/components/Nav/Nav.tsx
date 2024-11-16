import { styled } from "styled-components";

import { HomeLink, EducationLink, DropdownImg } from "./components";

const NavHeightInPx = 64;

const NavItemMaxHeightInPx = NavHeightInPx * 0.5;
const NavItemDefaultHeightInPx = NavItemMaxHeightInPx;
const NavItemMaxWidthInPx = 300;
const NavItemDefaultWidthInPx = NavItemMaxWidthInPx * 0.5;

const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  width: 100vw;
  padding: 0 16px;
  height: ${NavHeightInPx}px;
  gap: 0.8rem;
  position: sticky;
  top: 0px;
  background-color: ${({ theme }) =>
    theme.colors.pallete.complementary.primary};

  > * {
    max-width: ${NavItemMaxWidthInPx}px;
    width: ${NavItemDefaultWidthInPx}px;
    max-height: ${NavItemMaxHeightInPx}px;
    height: ${NavItemDefaultHeightInPx}px;
    background-color: ${({ theme }) => theme.colors.softerWhite};
  }

  > *:last-child {
    justify-self: end;
  }
`;

const NavItem1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  > *:not(:first-child) {
    border-left: 1px solid ${({ theme }) => theme.colors.black};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
`;

export const Nav = () => {
  return (
    <StyledNav>
      <NavItem1>
        <HomeLink />
        <EducationLink />
      </NavItem1>
      <DropdownImg />
    </StyledNav>
  );
};
