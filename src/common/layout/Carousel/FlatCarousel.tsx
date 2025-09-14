import styled from "styled-components";

import { FlexRow } from "@src/common/layout/flex";

const Viewport = styled(FlexRow)`
  position: relative;
  overflow-x: hidden;
  aspect-ratio: 16 / 9;
`;

const Strip = styled(FlexRow)<{
  $right?: string;
  $imgWidth?: string;
}>`
  position: relative;
  right: ${({ $right }) => $right || "0%"};
  transition: right 0.5s, left 0.5s;

  > img,
  video {
    object-fit: contain;
    aspect-ratio: 16 / 9;
    width: ${({ $imgWidth }) => $imgWidth || "100%"};
  }

  & > img {
    cursor: pointer;
  }
`;

export interface FlatCarouselProps {
  children: React.ReactNode;
  visibleEleIdx: number;
}

export const FlatCarousel = ({
  children,
  visibleEleIdx,
}: FlatCarouselProps) => {
  return (
    <Viewport>
      <Strip $right={`${visibleEleIdx * 100}%`}>{children}</Strip>
    </Viewport>
  );
};
