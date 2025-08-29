import { useState } from "react";
import styled from "styled-components";

import { Carousel } from "@src/common/layout/Carousel";
import { FlexColumn, FlexRow } from "@src/common/layout/flex";
import { LeftArrow, RightArrow } from "@src/common/svg";

import { AboutCard } from "./AboutCard";
import { Backrooms } from "./Backrooms";
import { ProfileCard } from "./ProfileCard";

const $breakPoint = "600px";

const StyledFlexRow = styled(FlexRow)`
  align-items: center;
  justify-content: center;

  & > :nth-child(2) {
    margin: 0 10px 0 0;
  }

  @media (max-width: ${$breakPoint}) {
    flex-direction: column;

    & > :nth-child(2) {
      bottom: 140px;
    }

    & > :nth-child(3) {
      bottom: 90px;
    }

    & > :nth-child(n + 2) {
      transform: rotateZ(90deg);
      position: absolute;
      margin: 0;
    }
  }
`;

const Arrow = styled(FlexColumn)`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.colors.pallete.complementary.softPrimary + "dd"};
  cursor: pointer;
  border-radius: 10px;
  width: 40px;
  height: 100px;

  & > * {
    width: 50px;
    height: 20px;
  }
`;

export const TestPage = () => {
  const [focusOn, setFocusOn] = useState<number>(0);
  const childCount = 3;

  return (
    <StyledFlexRow>
      <Carousel
        $perspective={"none"}
        focusOn={focusOn}
        $heightPx={600}
        $widthPx={550}
        $breakPoint={$breakPoint}
      >
        <ProfileCard />
        <AboutCard />
        <Backrooms
          preloadAudio={
            2 === ((focusOn % childCount) + childCount) % childCount
          }
        />
      </Carousel>
      <Arrow onClick={() => setFocusOn(focusOn - 1)}>
        <LeftArrow />
      </Arrow>
      <Arrow onClick={() => setFocusOn(focusOn + 1)}>
        <RightArrow />
      </Arrow>
    </StyledFlexRow>
  );
};

export default TestPage;
