import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import { mobileBreakpointInPx } from "@src/common/atoms/isMobile";

import { FlexRow } from "../layouts/flex/FlexRow";

const Overlay = styled(FlexRow)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const Container = styled.div<{
  $width?: string;
  $maxWidth?: string;
  $padding?: string;
}>`
  background: white;
  padding: ${(props) => props.$padding || "1.5rem"};
  border-radius: 8px;
  width: ${(props) => props.$width || "auto"};
  max-width: ${(props) => props.$maxWidth || "60%"};
  overflow: scroll;
  max-height: 90%;

  @media (max-width: ${mobileBreakpointInPx}px) {
    max-width: 90%;
  }
`;

interface Props {
  closer: () => void;
  children: React.ReactNode;
  $padding?: string;
  $width?: string;
  $maxWidth?: string;
}

export const Modal = ({
  closer,
  children,
  $padding,
  $width,
  $maxWidth,
}: Props) => {
  const [portalEl, setPortalEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.getElementById("portal");
    setPortalEl(el);
  }, []);

  if (!portalEl) return <></>;
  return createPortal(
    <Overlay
      onClick={() => {
        closer();
      }}
    >
      <Container
        $padding={$padding}
        $width={$width}
        $maxWidth={$maxWidth}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </Container>
    </Overlay>,
    portalEl
  );
};
