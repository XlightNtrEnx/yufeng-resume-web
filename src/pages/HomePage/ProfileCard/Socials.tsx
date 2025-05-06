import styled from "styled-components";

import Github from "@src/assets/icons/github512.png";
import LinkedIn from "@src/assets/icons/linkedin2048.png";
import { FlexRow, SafeNewTabLink, ImgIcon } from "@src/components";

const Container = styled(FlexRow)`
  gap: 8px;
  justify-content: center;
`;

export const Socials = () => {
  return (
    <Container>
      <SafeNewTabLink href="https://github.com/XlightNtrEnx">
        <ImgIcon src={Github} $iconSize="20px" />
      </SafeNewTabLink>
      <SafeNewTabLink href="https://www.linkedin.com/in/xue-yufeng-596a10297/">
        <ImgIcon src={LinkedIn} $iconSize="20px" />
      </SafeNewTabLink>
    </Container>
  );
};
