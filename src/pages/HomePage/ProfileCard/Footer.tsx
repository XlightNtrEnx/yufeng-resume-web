import styled from "styled-components";

import { DownloadLinkWithIcon, SafeNewTabLink, ImgIcon } from "@src/components";
import { Footer as FooterElement, Span } from "@src/elements";
import Email from "@src/assets/icons/email512.png";

const StyledFooter = styled(FooterElement)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 20px 10px 20px;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <DownloadLinkWithIcon href="files/resume.pdf">
        <Span>Download CV </Span>
      </DownloadLinkWithIcon>
      <SafeNewTabLink href="mailto:xyf.oco@gmail.com">
        <Span>Contact me</Span> <ImgIcon src={Email} $iconSize="0.75em" />
      </SafeNewTabLink>
    </StyledFooter>
  );
};
