import styled from "styled-components";

import { Carousel } from "@src/common/layout/Carousel";
import { FlexColumn, FlexRow } from "@src/common/layout/flex";

import { ProfileCard } from "../landing/ProfileCard";
import { useState } from "react";

import { AboutCard } from "../landing/AboutCard";
import { LeftArrow, RightArrow } from "@src/common/svg";

const StyledFlexRow = styled(FlexRow)`
  align-items: center;
  justify-content: center;

  & > :nth-child(2) {
    margin: 0 10px 0 0;
  }
`;

const Arrow = styled(FlexColumn)`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.colors.pallete.complementary.softPrimary + "dd"};
  cursor: pointer;
  width: 40px;
  height: 100px;
  border-radius: 10px;

  & > * {
    width: 50px;
    height: 20px;
  }
`;

const BackRooms = styled(FlexColumn)`
  width: 400px;
  background: white;
  height: 500px;
  justify-content: center;
  align-items: center;
`;

export const TestPage = () => {
  const [focusOn, setFocusOn] = useState<number>(0);
  return (
    <StyledFlexRow>
      <Carousel
        $perspective={"none"}
        focusOn={focusOn}
        $heightPx={600}
        $widthPx={550}
      >
        <ProfileCard />
        <AboutCard />
        <BackRooms>the backrooms</BackRooms>
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
