import { Children, useEffect, useState } from "react";
import styled from "styled-components";
import { Div } from "@src/common/element/Div";
import { FlexColumn, FlexRow } from "./flex";
import { fadeInFromBottom, fadeInFromTop } from "../animation";

const Scene = styled(Div)<{
  $widthPx: number;
  $heightPx: number;
  $perspective: string;
}>`
  width: ${({ $widthPx }) => $widthPx}px;
  height: ${({ $heightPx }) => $heightPx}px;
  position: relative;
  perspective: ${({ $perspective }) => $perspective};
`;

const CellContainer = styled(FlexRow)<{
  $childCount: number;
  $rotateDeg: number;
  $breakPoint: string;
}>`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;

  transform: rotateY(${({ $rotateDeg }) => $rotateDeg}deg);

  @media (max-width: ${({ $breakPoint }) => $breakPoint}) {
    transform: rotateX(${({ $rotateDeg }) => $rotateDeg}deg);
  }

  transition: transform 1s;
  align-items: center;
  justify-content: center;

  & > :first-child {
    ${fadeInFromTop()}
  }

  & > :nth-child(${({ $childCount }) => $childCount / 2 + 1}) {
    ${fadeInFromBottom()};
  }
`;

const Cell = styled(FlexColumn)<{
  $isFocused: boolean;
  $rotateDeg: number;
  $translateZPx: number;
  $noTransition?: boolean;
  $breakPoint: string;
}>`
  position: absolute;
  width: 95%;
  height: 95%;

  transform: rotateY(${({ $rotateDeg }) => $rotateDeg}deg)
    translateZ(${({ $translateZPx }) => $translateZPx}px);

  @media (max-width: ${({ $breakPoint }) => $breakPoint}) {
    transform: rotateX(${({ $rotateDeg }) => $rotateDeg}deg)
      translateZ(${({ $translateZPx }) => $translateZPx}px);
  }
  background: ${({ theme }) => theme.backgroundColor + "22"};
  ${({ $noTransition }) => ($noTransition ? "" : "transition: transform 1s;")}
  align-items: center;
  justify-content: center;
  z-index: ${({ $isFocused }) => ($isFocused ? "auto" : "-1")};
`;

interface Props {
  children: React.ReactNode;
  $widthPx: number;
  $heightPx: number;
  focusOn: number;
  $perspective: string;
  $breakPoint: string;
}

export const Carousel = ({
  children,
  $widthPx,
  $heightPx,
  focusOn,
  $perspective,
  $breakPoint,
}: Props) => {
  const childCount = Children.count(children);
  const rotation = 360 / childCount;

  const [$translateZPx, set$TranslateZPx] = useState<number>(0);
  const [$rotateDeg, set$RotateDeg] = useState<number>(0);

  useEffect(() => {
    set$TranslateZPx(
      Math.ceil($widthPx / 2 / Math.tan(((rotation / 2) * Math.PI) / 180))
    );
    set$RotateDeg(rotation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Scene
      $perspective={$perspective}
      $heightPx={$heightPx}
      $widthPx={$widthPx}
    >
      <CellContainer
        $breakPoint={$breakPoint}
        $childCount={childCount}
        $rotateDeg={focusOn * -rotation}
      >
        {Children.map(children, (child, index) => {
          return (
            <Cell
              $breakPoint={$breakPoint}
              $isFocused={
                index === ((focusOn % childCount) + childCount) % childCount
              }
              $translateZPx={$translateZPx}
              $rotateDeg={$rotateDeg * index}
              $noTransition={index === childCount / 2}
              key={index}
            >
              {child}
            </Cell>
          );
        })}
      </CellContainer>
    </Scene>
  );
};
