import styled from "styled-components";

import { Span } from "@src/elements";
import { SafeNewTabLink, FlexColumn } from "@src/components";
import { ReactComponent as OpenInNewTabSVGIcon } from "@src/assets/svgs/icons/open-in-new-tab.svg";

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
  console.log(dir);
  return (
    <Container>
      <StyledSpan>Transcripts</StyledSpan>
      {filenames.map((filename, index) => (
        <SafeNewTabLink key={index} href={dir + filename}>
          <Span>{filename} </Span>
          <OpenInNewTabSVGIcon width={iconSize} height={iconSize} />
        </SafeNewTabLink>
      ))}
    </Container>
  );
};
