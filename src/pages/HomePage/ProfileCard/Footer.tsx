import styled from "styled-components";

import Email from "@src/assets/icons/email512.png";
import { ReactComponent as OpenInNewTabSVGIcon } from "@src/assets/svgs/icons/open-in-new-tab.svg";
import { SafeNewTabLink, ImgIcon } from "@src/components";
import { Footer as FooterElement, Span } from "@src/elements";

const StyledFooter = styled(FooterElement)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 20px 10px 20px;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <SafeNewTabLink href="files/resume.pdf">
        <Span>View CV</Span>{" "}
        <OpenInNewTabSVGIcon width="0.8em" height="0.8em" />
      </SafeNewTabLink>
      <SafeNewTabLink href="mailto:xyf.oco@gmail.com">
        <Span>Contact me</Span> <ImgIcon src={Email} $iconSize="0.75em" />
      </SafeNewTabLink>
    </StyledFooter>
  );
};
