import { styled } from "styled-components";

import GitHub from "@src/assets/icons/github512.png";
import { ReactComponent as ColabSVGIcon } from "@src/assets/svgs/icons/google-colab.svg";
import { ReactComponent as DocsSVGIcon } from "@src/assets/svgs/icons/google-docs.svg";
import { ExternalLink, FlexColumn, FlexRow, ImgIcon } from "@src/components";
import { H2, Span } from "@src/elements";

import { MediaScroller } from "./MediaScroller";

const Container = styled(FlexColumn)`
  align-items: start;
  gap: 1rem;
`;

const Links = styled(FlexRow)`
  gap: 0.3em;
  align-items: center;
  border-left: 3px solid ${({ theme }) => theme.negSofterBackgroundColor};
  padding-left: 0.5em;
  > a {
    &:hover {
      background-color: ${({ theme }) => theme.negSofterBackgroundColor};
    }
  }
`;

export interface ProjectProps {
  name: string;
  achievements: string;
  docsURL?: string;
  gitHubURL?: string;
  colabURL?: string;
  medias?: any[];
}

const iconSize = "1.75em";
export const Project = ({
  name,
  achievements,
  medias,
  colabURL,
  docsURL,
  gitHubURL,
}: ProjectProps) => {
  var count = 0;
  if (gitHubURL) count += 1;
  if (colabURL) count += 1;
  if (docsURL) count += 1;
  return (
    <Container>
      <H2>{name}</H2>
      {count > 0 && (
        <Links>
          {gitHubURL && (
            <ExternalLink href={gitHubURL}>
              <ImgIcon iconSize={iconSize} src={GitHub} />
            </ExternalLink>
          )}
          {colabURL && (
            <ExternalLink href={colabURL}>
              <ColabSVGIcon width={iconSize} height={iconSize} />
            </ExternalLink>
          )}
          {docsURL && (
            <ExternalLink href={docsURL}>
              <DocsSVGIcon width={iconSize} height={iconSize} />
            </ExternalLink>
          )}
        </Links>
      )}
      <Span>{achievements}</Span>
      {medias && <MediaScroller medias={medias} />}
    </Container>
  );
};
