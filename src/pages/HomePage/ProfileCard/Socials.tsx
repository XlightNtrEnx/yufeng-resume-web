import styled from "styled-components";

import { Img } from "@src/elements";
import Github from "@src/assets/icons/github512.png";
import LinkedIn from "@src/assets/icons/linkedin2048.png";
import { FlexRow, ExternalLink } from "@src/components";

const Container = styled(FlexRow)`
  gap: 8px;
  justify-content: center;
`;

const StyledImg = styled(Img)`
  width: 20px;
  height: 20px;
  object-fit: contain;
`;

export const Socials = () => {
  return (
    <Container>
      <ExternalLink href="https://github.com/XlightNtrEnx">
        <StyledImg src={Github}></StyledImg>
      </ExternalLink>
      <ExternalLink href="https://www.linkedin.com/in/xue-yufeng-596a10297/">
        <StyledImg src={LinkedIn}></StyledImg>
      </ExternalLink>
    </Container>
  );
};
