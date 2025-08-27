import { styled } from "styled-components";

import { FlexColumn } from "@src/common/layouts/flex";

export interface TextBlockProps {
  children: React.ReactNode;
}

const Container = styled(FlexColumn)`
  gap: 1em;

  > * {
    margin: 0;
  }
`;

export const TextBlock = ({ children }: TextBlockProps) => {
  return <Container>{children}</Container>;
};
