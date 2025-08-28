import { lazy } from "react";

import {
  term4CSDParcelEyeAIRepo,
  term4CSDParcelEyeDocs,
} from "@src/common/string";
import { paths } from "@src/router/paths";
import { Achievement } from "@src/feature/achievement/achievements/achievement-components";

const term4InfoSysAICloudDescription = `
My team's physical prototype needed to be lightweight so instead of hauling our own desktop around with a GPU, I developed a cloud based solution to house our AI server

Choice of Amazon Machine Image (AMI) was the more expensive Ubuntu for its better support for CUDA and nginx.

We also needed a secondary server (API) and I chose Amazon Linux for that because it's cheaper and still can deploy a java based server.

The {VPC}(ocs1) also allowed us to put the servers into one private network for more security by restricting the different types of requests using tools like Route Tables, Network ACLs, and Security Groups.
`;

const LazyParcelEyeProject = lazy(
  () => import("@src/feature/project/projects/ParcelEye")
);

export const Term4InfoSysAICloudAchievement = () => {
  return (
    <Achievement
      name="Deploying EC2 instances and configuring their VPC"
      LazyProject={LazyParcelEyeProject}
      description={term4InfoSysAICloudDescription}
      urls={[term4CSDParcelEyeAIRepo, term4CSDParcelEyeDocs]}
      medias={[
        { src: paths.public.achievementDir.term4InfosysCloudDir.png_1 },
        { src: paths.public.achievementDir.term4InfosysCloudDir.png_2 },
      ]}
    />
  );
};

export default Term4InfoSysAICloudAchievement;
