import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { InternalLink } from "@src/common/component/InternalLink";
import { Span } from "@src/common/element/text";

const StyledSpan = styled(Span)`
  font-size: 0.625rem;
`;

const StyledInternalLink = styled(InternalLink)<{ $isActive: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3125em;

  text-decoration: none;

  & > * {
    color: ${({ theme, $isActive }) =>
      $isActive
        ? theme.colors.pallete.complementary.primary
        : theme.colors.black};
  }

  & > svg {
    width: 1.25em;
    height: 1.25em;
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
      <SVG />
      <StyledSpan>{label}</StyledSpan>
    </StyledInternalLink>
  );
};
