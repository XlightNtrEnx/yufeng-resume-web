import styled from "styled-components";

import { Span, A } from "@src/elements";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > :last-child {
    margin-top: 1rem;
  }
`;

const StyledSpan = styled(Span)`
  font-size: 1.2rem;
  font-weight: bold;
  padding-bottom: 0.5rem;
`;

export const Opencerts = ({
  assetsPath,
  filenames,
}: {
  assetsPath: string;
  filenames: string[];
}) => {
  return (
    <Container>
      <StyledSpan>Opencerts</StyledSpan>
      {filenames.map((filename, index) => (
        <A key={index} href={`${assetsPath}/${filename}`}>
          {filename}
        </A>
      ))}
      <A href="https://opencerts.io/">View and verify on Opencerts.io</A>
    </Container>
  );
};
