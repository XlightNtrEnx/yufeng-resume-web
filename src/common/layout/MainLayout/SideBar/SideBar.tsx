import styled from "styled-components";
import { useState } from "react";

import { paths } from "@src/router/paths";
import {
  HomeSVG,
  GraduationCapSVG,
  ClipboardSVG,
  TrophySVGIcon,
} from "@src/common/svg";
import { FlexColumn, FlexRowReverse } from "@src/common/layout/flex";
import { mobileBreakpointInPx } from "@src/common/atom/isMobile";
import { Button } from "@src/common/element/Button";

import { ChildInternalLink } from "./ChildInternalLink";

const StyledFlexRowReverse = styled(FlexRowReverse)<{ open?: boolean }>`
  align-items: flex-start;

  & > * {
    background: ${({ theme }) => theme.colors.softerWhite};
  }

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

  & > *:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.softerBlack};
  }
`;

const ArrowButton = styled(Button)`
  width: 20px;
  height: 64px;
  border-radius: 0;

  @media (min-width: ${mobileBreakpointInPx}px) {
    display: none;
  }

  border-right: 1px solid ${({ theme }) => theme.colors.softerBlack};
  border-top: 1px solid ${({ theme }) => theme.colors.softerBlack};
  border-bottom: 1px solid ${({ theme }) => theme.colors.softerBlack};
`;

export const SideBar = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <StyledFlexRowReverse open={open}>
      <ArrowButton onClick={toggleSidebar}>{open ? "<" : ">"}</ArrowButton>
      <SideBarElements>
        <ChildInternalLink
          key="Home"
          to={paths.landing}
          label="Home"
          SVG={HomeSVG}
        />
        <ChildInternalLink
          key="Projects"
          to={paths.projects}
          label="Projects"
          SVG={ClipboardSVG}
        />
        <ChildInternalLink
          key="Achievements"
          to={paths.achievements}
          label="Achieved"
          SVG={TrophySVGIcon}
        />
        <ChildInternalLink
          key="Education"
          to={paths.education}
          label="Education"
          SVG={GraduationCapSVG}
        />
        {/* <ChildInternalLink
          key="Test"
          to="/test"
          label="Test"
          SVG={GraduationCapSVG}
        /> */}
      </SideBarElements>
    </StyledFlexRowReverse>
  );
};
