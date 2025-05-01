import styled from "styled-components";

import { Span } from "@src/elements";
import { DownloadLinkWithIcon, FlexColumn } from "@src/components";

const Container = styled(FlexColumn)``;

const StyledSpan = styled(Span)`
  font-size: 1.2rem;
  font-weight: bold;
  padding-bottom: 0.5rem;
`;

export interface OpencertProps {
  certsDir: string;
  filenames: string[];
}

export const Opencert = ({
  certsDir: assetsPath,
  filenames,
}: OpencertProps) => {
  return (
    <Container>
      <StyledSpan>Opencerts</StyledSpan>
      {filenames.map((filename, index) => (
        <DownloadLinkWithIcon key={index} href={`${assetsPath}/${filename}`}>
          <Span>{filename} </Span>
        </DownloadLinkWithIcon>
      ))}
    </Container>
  );
};
