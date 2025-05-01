import { styled } from "styled-components";

export interface AProps {
  href: string;
}

export const A = styled.a`
  text-decoration: none !important;
  color: inherit;
  line-height: 0;
`;
