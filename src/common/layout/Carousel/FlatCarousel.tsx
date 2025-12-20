import styled from "styled-components";

import { FlexRow } from "@src/common/layout/flex";

const Viewport = styled(FlexRow)`
  position: relative;
`;

const Strip = styled(FlexRow)<{
  $right?: string;
}>`
  position: relative;
  right: ${({ $right }) => $right || "0%"};
  transition: right 0.5s, left 0.5s;

  & > * {
    flex-shrink: 0;
  }
`;

export interface FlatCarouselProps {
  children: React.ReactNode;
  activeEleIdx: number;
  className?: string;
}

export const FlatCarousel = ({
  children,
  activeEleIdx,
  className,
}: FlatCarouselProps) => {
  return (
    <Viewport className={className}>
      <Strip $right={`${activeEleIdx * 100}%`}>{children}</Strip>
    </Viewport>
  );
};
