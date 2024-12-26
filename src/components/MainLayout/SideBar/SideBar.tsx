import styled from "styled-components";
import { useState } from "react";

import { paths } from "@src/router";
import { ReactComponent as HomeSVG } from "@src/assets/svgs/icons/home.svg";
import { ReactComponent as GraduationCapSVG } from "@src/assets/svgs/icons/graduation-cap.svg";
import { ReactComponent as ClipboardSVG } from "@src/assets/svgs/icons/clipboard.svg";
import { FlexColumn, FlexRowReverse } from "@src/components";
import { mobileBreakpointInPx } from "@src/atoms";
import { Button } from "@src/elements";

import { ChildInternalLink } from "./ChildInternalLink";

const Container = styled(FlexRowReverse)<{ animation?: any; open?: boolean }>`
  align-items: flex-start;
  z-index: 9999;
  position: relative;
  left: 20px;

  * {
    background: ${({ theme }) => theme.colors.softerWhite};
  }

  ${({ animation }) => animation()}

  @media (max-width: ${mobileBreakpointInPx}px) {
    position: fixed;
    top: 20px;
    left: ${({ open }) =>
      open ? "0px" : "-64px"}; /* Adjust based on sidebar width */
    transition: left 0.3s;
  }
`;

const SideBarElements = styled(FlexColumn)`
  > * {
    width: 64px;
    height: 64px;
  }

  border: 1px solid ${({ theme }) => theme.colors.softerBlack};

  > *:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.softerBlack};
  }
`;

const ArrowButton = styled(Button)`
  width: 20px;
  height: 64px;

  @media (min-width: ${mobileBreakpointInPx}px) {
    display: none;
  }

  border-right: 1px solid ${({ theme }) => theme.colors.softerBlack};
  border-top: 1px solid ${({ theme }) => theme.colors.softerBlack};
  border-bottom: 1px solid ${({ theme }) => theme.colors.softerBlack};
`;

interface Props {
  animation?: any;
}

export const SideBar = ({ animation }: Props) => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <Container animation={animation} open={open}>
      <ArrowButton onClick={toggleSidebar}>{open ? "<" : ">"}</ArrowButton>
      <SideBarElements>
        <ChildInternalLink
          key="Home"
          to={paths.home}
          label="Home"
          SVG={HomeSVG}
        />
        <ChildInternalLink
          key="Education"
          to={paths.education}
          label="Education"
          SVG={GraduationCapSVG}
        />
        <ChildInternalLink
          key="Projects"
          to={paths.projects}
          label="Projects"
          SVG={ClipboardSVG}
        />
      </SideBarElements>
    </Container>
  );
};
