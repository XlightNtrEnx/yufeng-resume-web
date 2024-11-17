import styled from "styled-components";

import { H2 } from "@src/elements";

import { ExpendablePanel } from "./ExpendablePanel";
import { PSLEOpencert, OLevelOpencert, ALevelOpencert } from "./Opencerts";
import { PSLEResult, OLevelResult, ALevelResult, SUTDResult } from "./Results";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  transition: background 0.2s;
  align-items: stretch;

  > * {
    margin-top: 10px;
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

export const EducationPage = () => {
  return (
    <Container>
      {headers.map((header, index) => (
        <ExpendablePanel key={index} header={header}>
          {results[index]}
          {opencerts[index]}
        </ExpendablePanel>
      ))}
    </Container>
  );
};
