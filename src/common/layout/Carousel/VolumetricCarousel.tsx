import { Children, useEffect, useState } from "react";
import styled from "styled-components";
import { Div } from "@src/common/element/Div";
import { FlexColumn, FlexRow } from "@src/common/layout/flex";
import { fadeInFromBottom, fadeInFromTop } from "src/common/animation";
import { stripUnit } from "@src/common/util";

interface CommonProps {
  $breakPoint?: string;
}

const Scene = styled(Div)<{
  $width: string;
  $height: string;
  $perspective: string;
}>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  position: relative;
`;

const CellContainer = styled(FlexRow)<
  {
    $childCount: number;
    $rotateDeg: number;
  } & CommonProps
>`
  width: 100%;
  height: 100%;

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

const Cell = styled(FlexColumn)<
  {
    $isFocused: boolean;
    $rotateDeg: number;
    $translateZ: string;
    $noTransition?: boolean;
  } & CommonProps
>`
  position: absolute;
  width: 95%;
  height: 95%;

  transform: rotateY(${({ $rotateDeg }) => $rotateDeg}deg)
    translateZ(${({ $translateZ }) => $translateZ});

  @media (max-width: ${({ $breakPoint }) => $breakPoint}) {
    transform: rotateX(${({ $rotateDeg }) => $rotateDeg}deg)
      translateZ(${({ $translateZ }) => $translateZ});
  }
  background: ${({ theme }) => theme.backgroundColor + "22"};
  ${({ $noTransition }) => ($noTransition ? "" : "transition: transform 1s;")}
  align-items: center;
  justify-content: center;
  z-index: ${({ $isFocused }) => ($isFocused ? "auto" : "-1")};
`;

interface VolumetricCarouselProps extends CommonProps {
  children: React.ReactNode;
  focusOn: number;
  $perspective: string;
  $width: string;
  $height: string;
}

export const VolumetricCarousel = ({
  children,
  focusOn,
  $perspective,
  $breakPoint,
  $width,
  $height,
}: VolumetricCarouselProps) => {
  const childCount = Children.count(children);
  const rotation = 360 / childCount;

  const [$translateZ, set$TranslateZ] = useState<string>("0");
  const [$rotateDeg, set$RotateDeg] = useState<number>(0);

  useEffect(() => {
    const [width, widthUnit] = stripUnit($width);

    set$TranslateZ(
      Math.ceil(
        parseFloat(width) / 2 / Math.tan(((rotation / 2) * Math.PI) / 180)
      ) + widthUnit
    );
    set$RotateDeg(rotation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Scene $perspective={$perspective} $height={$height} $width={$width}>
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
              $translateZ={$translateZ}
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
