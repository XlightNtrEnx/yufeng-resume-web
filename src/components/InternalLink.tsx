import { Link, useLocation } from "react-router-dom";
import { ReactNode } from "react";
import { styled } from "styled-components";

const StyledLink = styled(Link)<{ $isActive: boolean }>`
  text-decoration: none;
  border-radius: 10px;
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.softerWhite : theme.colors.softWhite};
  color: ${({ theme, $isActive }) =>
    $isActive
      ? theme.colors.pallete.complementary.primary
      : theme.colors.black};
  fill: ${({ theme, $isActive }) =>
    $isActive
      ? theme.colors.pallete.complementary.primary
      : theme.colors.black};

  &:hover {
    background-color: ${({ theme }) => theme.colors.softerWhite};
  }
`;

interface Props {
  children: ReactNode;
  to: string;
}

/**
 * Link to an internal page
 */
export const InternalLink = ({ children, to }: Props) => {
  const location = useLocation();
  const isactive = location.pathname === to;

  return (
    <StyledLink
      to={to}
      $isActive={isactive}
      {...(isactive ? { className: "active" } : {})}
    >
      {children}
    </StyledLink>
  );
};
