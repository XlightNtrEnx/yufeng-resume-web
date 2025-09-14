import styled from "styled-components";

import { NewTabLink } from "@src/common/component/NewTabLink";
import { FlexRow } from "@src/common/layout/flex";
import { GitHubSVGIcon, LeetCode, LinkedIn } from "@src/common/svg";

const StyledFlexRow = styled(FlexRow)`
  gap: 0.5em;
  justify-content: center;

  & > * > * {
    width: 1.25em;
    height: 1.25em;
  }
`;

export const Socials = () => {
  return (
    <StyledFlexRow>
      <NewTabLink href="https://github.com/XlightNtrEnx">
        <GitHubSVGIcon />
      </NewTabLink>
      <NewTabLink href="https://www.linkedin.com/in/xue-yufeng-596a10297/">
        <LinkedIn />
      </NewTabLink>
      <NewTabLink href="https://leetcode.com/u/XU3mCuw2Sb/">
        <LeetCode />
      </NewTabLink>
    </StyledFlexRow>
  );
};
