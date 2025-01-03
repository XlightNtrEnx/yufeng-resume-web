import styled from "styled-components";

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

const headers = ["SUTD", "A Level", "O Level", "PSLE"];

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
          headerContent={header}
          animation={assignAnimation(index)}
        >
          {results[index]}
          {opencerts[index]}
        </ExpendablePanel>
      ))}
    </Container>
  );
};
