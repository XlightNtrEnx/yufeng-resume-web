import styled from "styled-components";

import {
  fadeInFromRight,
  fadeInFromTop,
  fadeInFromBottom,
} from "@src/common/animations";
import { FlexColumn } from "@src/common/layouts/flex";

import { ExpendablePanel } from "./ExpendablePanel";
import { PSLEOpencert } from "./Opencerts/PSLEOpencert";
import { OLevelOpencert } from "./Opencerts/OLevelOpencert";
import { ALevelOpencert } from "./Opencerts/ALevelOpencert";
import { PSLEResult } from "./Results/PSLEResult";
import { OLevelResult } from "./Results/OLevelResult";
import { ALevelResult } from "./Results/ALevelResult";
import { YISSResult } from "./Results/YISSResult";
import { SUTDResult } from "./Results/SUTDResult";
import { SUTDTranscript } from "./Transcripts/SUTDTranscript";
import { YISSTranscript } from "./Transcripts/YISSTranscript";

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
