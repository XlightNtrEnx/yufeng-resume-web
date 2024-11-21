import styled from "styled-components";

import { paths } from "@src/router";
import { ReactComponent as HomeSVG } from "@src/assets/svgs/icons/home.svg";
import { ReactComponent as GraduationCapSVG } from "@src/assets/svgs/icons/graduation-cap.svg";
import { FlexColumn } from "@src/components";

import { ChildInternalLink } from "./ChildInternalLink";

const Container = styled(FlexColumn)<{ animation?: any }>`
  background: transparent;

  > * {
    width: 64px;
    height: 64px;
  }

  * {
    background: ${({ theme }) => theme.colors.softerWhite};
  }

  ${({ animation }) => animation()}
`;

interface Props {
  animation?: any;
}

export const SideBar = ({ animation }: Props) => {
  return (
    <Container animation={animation}>
      <ChildInternalLink
        to={paths.home}
        label="Home"
        SVG={HomeSVG}
        key="Home"
      />
      <ChildInternalLink
        key="Education"
        to={paths.education}
        label="Education"
        SVG={GraduationCapSVG}
      />
    </Container>
  );
};
