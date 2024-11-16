import { styled } from "styled-components";

import { FlexBox } from "@src/components";
import { InternalLink } from "@src/components";
import { paths } from "@src/router";

import { ProfileDropdownMenu } from "./components";

const NavHeightInPx = 64;

const NavItemMaxHeightInPx = NavHeightInPx * 0.5;
const NavItemMaxWidthInPx = 500;

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
    max-height: ${NavItemMaxHeightInPx}px;
    background-color: ${({ theme }) => theme.colors.softerWhite};
  }

  > *:first-child {
    justify-self: start;
  }

  > *:last-child {
    justify-self: end;
  }
`;

const NavItem1 = styled(FlexBox)`
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: auto;
  > *:not(:first-child) {
    border-left: 1px solid ${({ theme }) => theme.colors.black};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const Nav = () => {
  return (
    <StyledNav>
      <NavItem1>
        <InternalLink to={paths.home}>Home</InternalLink>
        <InternalLink to={paths.education}>Education</InternalLink>
        <InternalLink to={paths.projects}>Projects</InternalLink>
      </NavItem1>
      <ProfileDropdownMenu />
    </StyledNav>
  );
};
