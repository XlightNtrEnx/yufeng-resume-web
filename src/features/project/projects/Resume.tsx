import { resumeGitHub } from "@src/common/strings";
import { paths } from "@src/router/paths";

import { Project } from "./project-components/Project";

const ResumeDescription = `
A single-page application (SPA) built for recruiters to easily navigate my portfolio.
- {Deployment diagram}(ocs0)
`;

export const Resume = () => {
  return (
    <Project
      name="Resume"
      description={ResumeDescription}
      urls={[resumeGitHub]}
      mediasDir={paths.public.projectDir.resumeDir.path}
      mediasDirSize={1}
    />
  );
};
