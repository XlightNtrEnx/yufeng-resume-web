import styled from "styled-components";

import {
  fadeInFromRight,
  fadeInFromTop,
  fadeInFromBottom,
} from "@src/common/animation";
import { FlexColumn } from "@src/common/layout/flex";

import { ExpendablePanel } from "@src/common/component/ExpendablePanel";
import { PSLEOpencert } from "./opencerts/PSLEOpencert";
import { OLevelOpencert } from "./opencerts/OLevelOpencert";
import { ALevelOpencert } from "./opencerts/ALevelOpencert";
import { PSLEResult } from "./results/PSLEResult";
import { OLevelResult } from "./results/OLevelResult";
import { ALevelResult } from "./results/ALevelResult";
import { YISSResult } from "./results/YISSResult";
import { SUTDResult } from "./results/SUTDResult";
import { SUTDTranscript } from "./transcripts/SUTDTranscript";
import { YISSTranscript } from "./transcripts/YISSTranscript";

const StyledFlexColumn = styled(FlexColumn)`
  gap: 10px;
  width: 100%;

  & > * {
    border-left: 20px solid
      ${({ theme }) => theme.colors.pallete.complementary.primary};
  }

  & > :first-child {
    ${fadeInFromTop()};
  }

  & > :nth-child(n + 2) {
    ${fadeInFromRight()};
  }

  & > :last-child {
    ${fadeInFromBottom()};
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

export const EducationPage = () => {
  return (
    <StyledFlexColumn>
      {headers.map((header, index) => (
        <ExpendablePanel key={index} headerString={header}>
          {results[index]}
          {opencerts[index]}
          {transcripts[index]}
        </ExpendablePanel>
      ))}
    </StyledFlexColumn>
  );
};

export default EducationPage;
