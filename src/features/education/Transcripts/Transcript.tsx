import styled from "styled-components";

import { Span } from "@src/common/elements/text";
import { NewTabLink } from "@src/common/components/NewTabLink";
import { FlexColumn } from "@src/common/layouts/flex";
import { OpenInNewTabSVGIcon } from "@src/common/svgs";

const Container = styled(FlexColumn)``;

const StyledSpan = styled(Span)`
  font-size: 1.2rem;
  font-weight: bold;
  padding-bottom: 0.5rem;
`;
const iconSize = "0.75em";

interface TranscriptProps {
  dir: string;
  filenames: string[];
}

export const Transcript = ({ dir, filenames }: TranscriptProps) => {
  return (
    <Container>
      <StyledSpan>Transcripts</StyledSpan>
      {filenames.map((filename, index) => (
        <NewTabLink key={index} href={dir + filename}>
          <Span>{filename} </Span>
          <OpenInNewTabSVGIcon width={iconSize} height={iconSize} />
        </NewTabLink>
      ))}
    </Container>
  );
};
