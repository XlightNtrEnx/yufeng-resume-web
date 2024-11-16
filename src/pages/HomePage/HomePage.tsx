import { styled } from "styled-components";

import { H1, P } from "@src/elements";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 40px;

  & > * {
    width: 100%;
    max-width: 80%;
  }
`;

const StyledH1 = styled(H1)`
  text-align: center;
`;

const StyledP = styled(P)`
  text-align: center;
`;

export const HomePage = () => {
  return (
    <Container>
      <StyledH1>About me</StyledH1>
      <StyledP>An aspiring and passionate software engineer.</StyledP>
    </Container>
  );
};
