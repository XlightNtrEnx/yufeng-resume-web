import styled from "styled-components";

import { NewTabLink } from "@src/common/component/NewTabLink";
import { Footer as FooterElement } from "@src/common/element/Footer";
import { Span } from "@src/common/element/text";
import { Email, OpenInNewTabSVGIcon } from "@src/common/svg";
import { paths } from "@src/router/paths";

const StyledFooter = styled(FooterElement)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 20px 10px 20px;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <NewTabLink href={paths.public.meDir.resume}>
        <Span>View CV</Span>{" "}
        <OpenInNewTabSVGIcon width="0.8em" height="0.8em" />
      </NewTabLink>
      <NewTabLink href="mailto:xyf.oco@gmail.com">
        <Span>Contact me</Span> <Email width="0.75em" height="0.75em" />
      </NewTabLink>
    </StyledFooter>
  );
};
