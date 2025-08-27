import { paths } from "@src/router/paths";

import { ascendaFinalReportDocs, term4CSDGitHubOrg } from "@src/common/strings";
import { Project } from "./project-components/Project";

const AscendaDescription = `
A simple CRUD web app that books hotels backed by a monolithic API.
- {Demo}(ocs0)
- {Deployment diagram}(ocs1)
- {Railway overview}(ocs2)
- {Supabase overview}(ocs3)
`;

export const Ascenda = () => {
  return (
    <Project
      name="Ascenda"
      description={AscendaDescription}
      urls={[term4CSDGitHubOrg, ascendaFinalReportDocs]}
      mediasDir={paths.public.projectDir.ascendaDir.path}
      mediasDirSize={4}
      nonPNGMedias={{ 1: ".mp4" }}
    />
  );
};
