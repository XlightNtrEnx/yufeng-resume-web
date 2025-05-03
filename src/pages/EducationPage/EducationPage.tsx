import styled from "styled-components";

import {
  fadeInFromRight,
  fadeInFromTop,
  fadeInFromBottom,
} from "@src/animations";
import { FlexColumn } from "@src/components";

import { ExpendablePanel } from "./ExpendablePanel";
import { PSLEOpencert, OLevelOpencert, ALevelOpencert } from "./Opencerts";
import {
  PSLEResult,
  OLevelResult,
  ALevelResult,
  YISSResult,
  SUTDResult,
} from "./Results";
import { YISSTranscript, SUTDTranscript } from "./Transcripts";

const Container = styled(FlexColumn)`
  gap: 10px;
  > * {
    border-left: 20px solid
      ${({ theme }) => theme.colors.pallete.complementary.primary};
  }
`;

const headers = [
  "SUTD",
  "YISS (Exchange student)",
  "A Level",
  "O Level",
  "PSLE",
];

const results = [
  <SUTDResult />,
  <YISSResult />,
  <ALevelResult />,
  <OLevelResult />,
  <PSLEResult />,
];

const opencerts = [
  <></>,
  <></>,
  <ALevelOpencert />,
  <OLevelOpencert />,
  <PSLEOpencert />,
];

const transcripts = [
  <SUTDTranscript />,
  <YISSTranscript />,
  <></>,
  <></>,
  <></>,
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
          headerString={header}
          $animation={assignAnimation(index)}
        >
          {results[index]}
          {opencerts[index]}
          {transcripts[index]}
        </ExpendablePanel>
      ))}
    </Container>
  );
};
