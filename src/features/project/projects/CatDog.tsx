import { paths } from "@src/router/paths";

import { term4CSDGitHubOrg } from "@src/common/strings";
import { Project } from "./project-components/Project";

const HighLowDescription = `
A binary CNN built from best practices of top models (VGG, ResNET) that achieved 95% training and validation accuracy on 16384 images (50% cat 50% dog)
- {Architecture}(ocs0)
- {ResNet Block}(ocs1)
- {Results}(ocs2)
`;

export const CatDog = () => {
  return (
    <Project
      name="CatDog"
      description={HighLowDescription}
      urls={[term4CSDGitHubOrg]}
      mediasDir={paths.public.projectDir.catDogDir.path}
      mediasDirSize={3}
    />
  );
};
