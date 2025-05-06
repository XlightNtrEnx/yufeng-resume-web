import { createContext, useContext, useEffect, useState } from "react";
import { styled } from "styled-components";

import { mobileBreakpointInPx } from "@src/atoms";
import { FlexColumn, Modal } from "@src/components";
import { H2 } from "@src/elements";
import { RegisterFragmentContext } from "@src/providers";
import { zIndexes } from "@src/zIndex";

import { ProjectAchievements } from "./ProjectAchievements";
import { ProjectLinks } from "./ProjectLinks";
import { ProjectMedias } from "./ProjectMedias";

const Container = styled(FlexColumn)`
  align-items: start;
  gap: 1rem;
`;

const ModalPjtContainer = styled(FlexColumn)`
  gap: 1rem;
`;

interface CommonProps {
  name: string;
  achievements: React.ReactElement<typeof ProjectAchievements>;
  links?: React.ReactElement<typeof ProjectLinks>;
  medias?: React.ReactElement<typeof ProjectMedias>;
}

export interface ProjectProps extends CommonProps {}

export const Project = ({
  name,
  achievements,
  links,
  medias,
}: ProjectProps) => {
  const [focused, setFocused] = useState<boolean>(false);
  return (
    <Container>
      <Pjt
        // CommonProps
        name={name}
        achievements={achievements}
        links={links}
        medias={medias}
        // Pjt-specific Props
        onClickMedia={() => {
          window.innerWidth < mobileBreakpointInPx || setFocused(true);
        }}
      />
      {focused && (
        <Modal
          $zIndex={zIndexes.pages.projects.projectModal.enlargedProjectModal}
          $width="1080px"
          $maxWidth="1080px"
          closer={() => setFocused(false)}
        >
          <ModalPjtContainer>
            <Pjt
              // CommonProps
              name={name}
              achievements={achievements}
              medias={medias}
              links={links}
              // Pjt-specific Props
              onClickMedia={() => {}}
            />
          </ModalPjtContainer>
        </Modal>
      )}
    </Container>
  );
};

interface PjtProps extends CommonProps {
  onClickMedia: () => void;
}

export const pjtNameToId = (name: string) => {
  return name.replace(/[^a-zA-Z0-9-_:]/g, "");
};
export const PjtContext = createContext(() => {});
const Pjt = ({ name, achievements, links, medias, onClickMedia }: PjtProps) => {
  const id = pjtNameToId(name);

  const registerFragment = useContext(RegisterFragmentContext);
  useEffect(() => {
    return registerFragment(id);
  }, [registerFragment, id]);
  return (
    <PjtContext.Provider value={onClickMedia}>
      <H2 id={id}>{name}</H2>
      {links}
      {achievements}
      {medias}
    </PjtContext.Provider>
  );
};
