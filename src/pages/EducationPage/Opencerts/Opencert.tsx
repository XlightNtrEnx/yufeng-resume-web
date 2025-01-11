import styled from "styled-components";

import { Span } from "@src/elements";
import { DownloadLink } from "@src/components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSpan = styled(Span)`
  font-size: 1.2rem;
  font-weight: bold;
  padding-bottom: 0.5rem;
`;

export const Opencert = ({
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
        <DownloadLink
          text={filename}
          key={index}
          href={`${assetsPath}/${filename}`}
        />
      ))}
    </Container>
  );
};
