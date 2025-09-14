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
import { Button } from "@src/common/element/Button";

import { ChildInternalLink } from "./ChildInternalLink";

const sideBarEleWidth = "4em";
const sideBarEleHeight = "4em";

const StyledFlexRowReverse = styled(FlexRowReverse)<{ open?: boolean }>`
  align-items: flex-start;

  & > * {
    background: ${({ theme }) => theme.colors.softerWhite};
  }

  @media (max-width: ${({ theme }) => theme.mobileBreakPoint}) {
    position: fixed;
    top: 1.25em;
    left: ${({ open }) => (open ? "0" : `-${sideBarEleWidth}`)};
    transition: left 0.3s;
  }
`;

const StyledFlexColumn = styled(FlexColumn)`
  > * {
    width: ${sideBarEleWidth};
    height: ${sideBarEleHeight};
  }

  border: 1px solid ${({ theme }) => theme.colors.softerBlack};

  & > *:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.softerBlack};
  }
`;

const ArrowButton = styled(Button)`
  width: 1.25em;
  height: ${sideBarEleHeight};
  border-radius: 0;

  @media (min-width: ${({ theme }) => theme.mobileBreakPoint}) {
    display: none;
  }

  border: 1px solid ${({ theme }) => theme.colors.softerBlack};
  border-left: none;
`;

export const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledFlexRowReverse open={open}>
      <ArrowButton
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? "<" : ">"}
      </ArrowButton>
      <StyledFlexColumn>
        <ChildInternalLink to={paths.landing} label="Home" SVG={HomeSVG} />
        <ChildInternalLink
          to={paths.projects}
          label="Projects"
          SVG={ClipboardSVG}
        />
        <ChildInternalLink
          to={paths.achievements}
          label="Achieved"
          SVG={TrophySVGIcon}
        />
        <ChildInternalLink
          to={paths.education}
          label="Education"
          SVG={GraduationCapSVG}
        />
        {/* <ChildInternalLink
          to="/test"
          label="Test"
          SVG={GraduationCapSVG}
        /> */}
      </StyledFlexColumn>
    </StyledFlexRowReverse>
  );
};
