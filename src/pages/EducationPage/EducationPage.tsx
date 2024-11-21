import styled from "styled-components";

import { H2 } from "@src/elements";
import {
  fadeInFromRight,
  fadeInFromTop,
  fadeInFromBottom,
} from "@src/animations";
import { FlexColumn } from "@src/components";

import { ExpendablePanel } from "./ExpendablePanel";
import { PSLEOpencert, OLevelOpencert, ALevelOpencert } from "./Opencerts";
import { PSLEResult, OLevelResult, ALevelResult, SUTDResult } from "./Results";

const Container = styled(FlexColumn)`
  gap: 10px;
  > * {
    border-left: 20px solid
      ${({ theme }) => theme.colors.pallete.complementary.primary};
  }
`;

const StyledH2 = styled(H2)`
  margin: 30px;
`;

const headers = [
  <StyledH2>SUTD</StyledH2>,
  <StyledH2>A Level</StyledH2>,
  <StyledH2>O Level</StyledH2>,
  <StyledH2>PSLE</StyledH2>,
];

const results = [
  <SUTDResult />,
  <ALevelResult />,
  <OLevelResult />,
  <PSLEResult />,
];

const opencerts = [
  <></>,
  <ALevelOpencert />,
  <OLevelOpencert />,
  <PSLEOpencert />,
];

const firstIndex = 0;
const lastIndex = headers.length - 1;

const assignAnimation = (index: number) => {
  switch (index) {
    case firstIndex:
      return fadeInFromTop;
    case lastIndex:
      return fadeInFromBottom;
    default:
      return fadeInFromRight;
  }
};

export const EducationPage = () => {
  return (
    <Container>
      {headers.map((header, index) => (
        <ExpendablePanel
          key={index}
          header={header}
          animation={assignAnimation(index)}
        >
          {results[index]}
          {opencerts[index]}
        </ExpendablePanel>
      ))}
    </Container>
  );
};
