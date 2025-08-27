import { paths } from "@src/router/paths";

import { Achievement } from "@src/features/achievement/achievements/achievement-components";
import { Resume as ResumeProject } from "@src/features/project/projects/Resume";

const description = `
Learnt how to build an interactive and mobile responsive website as well as how to deploy it automatically
- {React}(ocs0) (frontend)
- {Firebase}(ocs1) (backend + hosting)
- {Github actions}(ocs2) (CI/CD)
`;
export const Resume = () => {
  return (
    <Achievement
      name="Resume (typescript)"
      Project={() => <ResumeProject />}
      description={description}
      urls={["https://github.com/XlightNtrEnx/yufeng-resume-web"]}
      mediasDir={paths.public.achievementDir.webResumeDir.path}
      mediasDirSize={3}
    />
  );
};
