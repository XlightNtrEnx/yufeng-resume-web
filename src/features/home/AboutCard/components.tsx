import styled from "styled-components";

import { H2 } from "@src/common/elements/text";

export const PartialColorH2 = styled(H2)`
  &::first-letter {
    color: ${({ theme }) => theme.colors.pallete.complementary.primary};
  }
`;
