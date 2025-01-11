import styled from "styled-components";

import { Span } from "@src/elements";
import { ExternalLink } from "@src/components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSpan = styled(Span)`
  font-size: 1.2rem;
  font-weight: bold;
  padding-bottom: 0.5rem;
`;

export const Transcript = ({
  educationMilestonesPath,
  milestoneFolderName,
  filenames,
}: {
  educationMilestonesPath?: string;
  milestoneFolderName: string;
  filenames: string[];
}) => {
  let transcriptsFolderPath: string = "";
  if (!educationMilestonesPath) {
    transcriptsFolderPath = `files/education_milestones/${milestoneFolderName}/transcripts`;
  } else {
    transcriptsFolderPath = `${educationMilestonesPath}/${milestoneFolderName}/transcripts`;
  }
  return (
    <Container>
      <StyledSpan>Transcripts</StyledSpan>
      {filenames.map((filename, index) => (
        <ExternalLink
          text={filename}
          key={index}
          href={`${transcriptsFolderPath}/${filename}`}
        />
      ))}
    </Container>
  );
};
