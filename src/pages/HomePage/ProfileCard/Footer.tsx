import styled from "styled-components";

import { DownloadLink, ExternalLink } from "@src/components";
import { Footer as FooterElement } from "@src/elements";
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
      <DownloadLink text="Download CV" href="files/hi.txt" />
      <ExternalLink
        text="Contact me"
        href="mailto:xyf.oco@gmail.com"
        src={Email}
      />
    </StyledFooter>
  );
};
