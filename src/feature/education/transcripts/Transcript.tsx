import styled from "styled-components";

import { Span } from "@src/common/element/text";
import { NewTabLink } from "@src/common/component/NewTabLink";
import { FlexColumn } from "@src/common/layout/flex";
import { OpenInNewTabSVGIcon } from "@src/common/svg";

const Container = styled(FlexColumn)``;

const StyledSpan = styled(Span)`
  font-size: 1.2rem;
  font-weight: bold;
  padding-bottom: 0.5rem;
`;
const iconSize = "0.75em";

interface TranscriptProps {
  paths: string[];
}

export const Transcript = ({ paths }: TranscriptProps) => {
  return (
    <Container>
      <StyledSpan>Transcripts</StyledSpan>
      {paths.map((path, index) => {
        const split = path.split("/");
        const name = split[split.length - 1];
        return (
          <NewTabLink key={index} href={path}>
            <Span>{name} </Span>
            <OpenInNewTabSVGIcon width={iconSize} height={iconSize} />
          </NewTabLink>
        );
      })}
    </Container>
  );
};
