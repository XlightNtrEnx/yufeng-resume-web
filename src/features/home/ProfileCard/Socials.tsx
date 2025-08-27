import styled from "styled-components";

import { FlexRow } from "@src/common/layouts/flex";
import { NewTabLink } from "@src/common/components/NewTabLink";
import { ImgIcon } from "@src/common/components/ImgIcon";
import { paths } from "@src/router/paths";

const Container = styled(FlexRow)`
  gap: 8px;
  justify-content: center;
`;

export const Socials = () => {
  return (
    <Container>
      <NewTabLink href="https://github.com/XlightNtrEnx">
        <ImgIcon src={paths.public.iconsDir.gitHub} $iconSize="20px" />
      </NewTabLink>
      <NewTabLink href="https://www.linkedin.com/in/xue-yufeng-596a10297/">
        <ImgIcon src={paths.public.iconsDir.linkedIn} $iconSize="20px" />
      </NewTabLink>
      <NewTabLink href="https://leetcode.com/u/XU3mCuw2Sb/">
        <ImgIcon src={paths.public.iconsDir.leetCode} $iconSize="20px" />
      </NewTabLink>
    </Container>
  );
};
