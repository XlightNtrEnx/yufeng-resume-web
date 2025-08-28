import styled from "styled-components";

import { NewTabLink } from "@src/common/component/NewTabLink";
import { FlexRow } from "@src/common/layout/flex";
import { GitHubSVGIcon, LeetCode, LinkedIn } from "@src/common/svg";

const Container = styled(FlexRow)`
  gap: 8px;
  justify-content: center;

  & > * > * {
    width: 20px;
    height: 20px;
  }
`;

export const Socials = () => {
  return (
    <Container>
      <NewTabLink href="https://github.com/XlightNtrEnx">
        <GitHubSVGIcon />
      </NewTabLink>
      <NewTabLink href="https://www.linkedin.com/in/xue-yufeng-596a10297/">
        <LinkedIn />
      </NewTabLink>
      <NewTabLink href="https://leetcode.com/u/XU3mCuw2Sb/">
        <LeetCode />
      </NewTabLink>
    </Container>
  );
};
