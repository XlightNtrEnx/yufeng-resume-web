import { paths } from "@src/router/paths";

import { Achievement } from "@src/features/achievement/achievements/achievement-components";

const term4InfoSysAIContainerizationDescription = `
For submission to my university, it was required that the code be runnable. Unfortunately it is only runnable on linux and I doubted that my professors would use linux. As such I containerized my AI server.

It was initially 32GB compressed but I got it down to slightly under {5GB}(ocs0) using {multi-stage builds}(ocs1)

Abused {github actions CI/CD}(ocs5) so I don't need to waste my CPU to build images
`;

export const Term4InfoSysAIContainerizationProject = () => {
  return (
    <Achievement
      name="Containerization for my project submission"
      description={term4InfoSysAIContainerizationDescription}
      urls={[
        "https://github.com/Term-4-CSD-Team-48/api",
        "https://docs.google.com/document/d/1dvR93rBY1RPfFKiElFRue1kAFKH0__rnXRhzZnTRy3s/edit?usp=sharing",
      ]}
      mediasDir={
        paths.public.achievementDir.term4InfosysAIContainerizationDir.path
      }
      mediasDirSize={6}
    />
  );
};
