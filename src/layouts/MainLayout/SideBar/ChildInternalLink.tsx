import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { InternalLink } from "@src/components";
import { Span } from "@src/elements";

const StyledSpan = styled(Span)`
  font-size: 10px;
`;

const StyledInternalLink = styled(InternalLink)<{ $isActive: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  text-decoration: none;
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.softerWhite : theme.colors.softWhite};

  > * {
    color: ${({ theme, $isActive }) =>
      $isActive
        ? theme.colors.pallete.complementary.primary
        : theme.colors.black};
  }
`;

interface Props {
  SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  to: string;
}

export const ChildInternalLink = ({ SVG, label, to }: Props) => {
  const location = useLocation();
  return (
    <StyledInternalLink to={to} $isActive={location.pathname === to}>
      <SVG width="20px" height="20px" />
      <StyledSpan>{label}</StyledSpan>
    </StyledInternalLink>
  );
};
