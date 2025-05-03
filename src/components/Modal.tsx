import React from "react";
import styled from "styled-components";

import { mobileBreakpointInPx } from "@src/atoms";

import { FlexRow } from "./FlexBox";

const Overlay = styled(FlexRow)<{ $zIndex: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: ${(props) => props.$zIndex};
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: scroll;
  max-height: 90%;

  @media (max-width: ${mobileBreakpointInPx}px) {
    max-width: 90%;
  }
`;

interface Props {
  onClose: () => void;
  children: React.ReactNode;
  $padding?: string;
  $width?: string;
  $maxWidth?: string;
  $zIndex: number;
}

export const Modal = ({
  onClose,
  children,
  $padding,
  $width,
  $maxWidth,
  $zIndex,
}: Props) => {
  return (
    <Overlay
      onClick={() => {
        onClose();
      }}
      $zIndex={$zIndex}
    >
      <Container
        $padding={$padding}
        $width={$width}
        $maxWidth={$maxWidth}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </Container>
    </Overlay>
  );
};
