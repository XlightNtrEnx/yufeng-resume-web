import { resumeGitHub } from "@src/common/strings";
import { paths } from "@src/router/paths";

import { Project } from "./project-components/Project";
import { AchievementsLayout } from "@src/features/achievement/achievements/achievement-components/AchievementsLayout";
import { Resume as ResumeAchievement } from "@src/features/achievement/achievements/Web/Resume";

const ResumeDescription = `
A single-page application (SPA) built for recruiters to easily navigate my portfolio.
- {Deployment diagram}(ocs0)
- {Folder structure}(ocs1)
`;

export const Resume = () => {
  return (
    <Project
      name="Resume"
      Achievements={() => (
        <AchievementsLayout>
          <ResumeAchievement />
        </AchievementsLayout>
      )}
      description={ResumeDescription}
      urls={[resumeGitHub]}
      mediasDir={paths.public.projectDir.resumeDir.path}
      mediasDirSize={2}
    />
  );
};
