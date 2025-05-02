import { styled } from "styled-components";

import GitHub from "@src/assets/icons/github512.png";
import { ReactComponent as ColabSVGIcon } from "@src/assets/svgs/icons/google-colab.svg";
import { ReactComponent as DocsSVGIcon } from "@src/assets/svgs/icons/google-docs.svg";
import {
  ExternalLink,
  FlexColumn,
  FlexRow,
  ImgIcon,
  Modal,
} from "@src/components";
import { H2, Span } from "@src/elements";
import { zIndexes } from "@src/zIndex";

import { MediaScroller } from "./MediaScroller";
import { useState } from "react";

const Container = styled(FlexColumn)`
  align-items: start;
  gap: 1rem;
`;

interface CommonProps {
  name: string;
  achievements: string;
  docsURL?: string;
  gitHubURL?: string;
  colabURL?: string;
  medias?: any[];
}

export interface ProjectProps extends CommonProps {}

const iconSize = "1.75em";
export const Project = ({
  name,
  achievements,
  medias,
  colabURL,
  docsURL,
  gitHubURL,
}: ProjectProps) => {
  const [focused, setFocused] = useState<boolean>(false);
  return (
    <Container>
      <Pjt
        // CommonProps
        name={name}
        achievements={achievements}
        medias={medias}
        colabURL={colabURL}
        docsURL={docsURL}
        gitHubURL={gitHubURL}
        // Pjt-specific Props
        onClickMedia={() => {
          setFocused(true);
        }}
      />
      {focused && (
        <Modal
          zIndex={zIndexes.pages.projects.projectModal.enlargedProjectModal}
          width="1280px"
          maxWidth="1280px"
          onClose={() => setFocused(false)}
        >
          <Pjt
            // CommonProps
            name={name}
            achievements={achievements}
            medias={medias}
            colabURL={colabURL}
            docsURL={docsURL}
            gitHubURL={gitHubURL}
            // Pjt-specific Props
            onClickMedia={() => {}}
          />
        </Modal>
      )}
    </Container>
  );
};

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

interface PjtProps extends CommonProps {
  onClickMedia: () => void;
}

const Pjt = ({
  name,
  achievements,
  medias,
  colabURL,
  docsURL,
  gitHubURL,
  onClickMedia,
}: PjtProps) => {
  var count = 0;
  if (gitHubURL) count += 1;
  if (colabURL) count += 1;
  if (docsURL) count += 1;
  return (
    <>
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
      {medias && <MediaScroller medias={medias} onClickMedia={onClickMedia} />}
    </>
  );
};
