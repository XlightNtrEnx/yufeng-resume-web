import { useState } from "react";
import styled from "styled-components";

import { VolumetricCarousel } from "@src/common/layout/Carousel";
import { FlexRow } from "@src/common/layout/flex";
import { Button } from "@src/common/element/Button";
import { LeftArrow, RightArrow } from "@src/common/svg";

import { AboutCard } from "./AboutCard";
import { Backrooms } from "./Backrooms";
import { ProfileCard } from "./ProfileCard";

const StyledFlexRow = styled(FlexRow)`
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  & > :nth-child(2) {
    margin: 0 0.625em 0 0;
  }
`;

const Arrow = styled(Button)`
  background-color: ${({ theme }) => theme.evenSofterBackgroundColor};
  cursor: pointer;
  width: 2.5em;
  height: 6.25em;

  & > svg {
    display: block;
    width: 3.13em;
    height: 1.25em;
  }
`;

const Arrows = styled(FlexRow)`
  gap: 1em;
`;

export const LandingPage = () => {
  const [focusOn, setFocusOn] = useState<number>(0);
  const childCount = 3;
  const backroomsFocused =
    2 === ((focusOn % childCount) + childCount) % childCount;

  return (
    <StyledFlexRow>
      <VolumetricCarousel
        $perspective={"none"}
        focusOn={focusOn}
        $height={"37.5em"}
        $width={"34.4em"}
      >
        <ProfileCard />
        <AboutCard />
        <Backrooms preload={backroomsFocused} disable={!backroomsFocused} />
      </VolumetricCarousel>
      <Arrows>
        <Arrow onClick={() => setFocusOn(focusOn - 1)}>
          <LeftArrow />
        </Arrow>
        <Arrow onClick={() => setFocusOn(focusOn + 1)}>
          <RightArrow />
        </Arrow>
      </Arrows>
    </StyledFlexRow>
  );
};

export default LandingPage;
